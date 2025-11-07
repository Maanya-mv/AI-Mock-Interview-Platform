import axios from 'axios';
import { Loader2Icon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';

function QuestionList({ formData }) {
  const [loading, setLoading] = useState(true);
  const [questionList, setQuestionList] = useState([]);

 
  useEffect(() => {
    if (questionList.length > 0) {
      console.log("Parsed Questions:", questionList);
    }
  }, [questionList]);

 
  useEffect(() => {
    if (formData) {
      GenerateQuestionList();
    }
    
  }, [formData]);

  const GenerateQuestionList = async () => {
  console.log("Sending request to API...");
  setLoading(true);
  try {
    const result = await axios.post('/api/ai-model', {
      ...formData,
    });

    console.log("API Raw Response:", result.data);

    if (result.data?.interviewQuestions) {
      setQuestionList(result.data.interviewQuestions);
      console.log("Parsed Questions:", result.data.interviewQuestions); // ✅ This shows in browser console
    } else {
      toast("Invalid response from AI");
    }
  } catch (e) {
    console.error("API Error:", e);
    toast('Server Error, Try Again!');
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="mt-4">
      {loading ? (
        <div className="p-5 bg-blue-50 rounded-xl border border-primary flex gap-5 items-center">
          <Loader2Icon className="animate-spin" />
          <div>
            <h2 className="font-medium">Generating Interview Questions</h2>
            <p className="text-primary">
              Our AI is crafting personalized questions based on your description.
            </p>
          </div>
        </div>
      ) : (
        <ul className="list-decimal pl-6 space-y-4 text-gray-800">
  {questionList.map((q, idx) => (
    <li key={idx}>
      <div className="mb-1 font-semibold text-sm text-blue-600 bg-blue-100 inline-block px-2 py-0.5 rounded">
        {q.type}
      </div>
      <div className="text-base mt-1">{q.question}</div>
    </li>
  ))}
</ul>

      )}
    </div>
  );
}

export default QuestionList;
