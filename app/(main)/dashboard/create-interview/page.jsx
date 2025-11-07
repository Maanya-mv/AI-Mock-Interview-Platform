"use client";

import React, { useState } from 'react';
import { useUser } from '@/app/provider';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import FormContainer from './_components/FormContainer';
import QuestionList from './_components/QuestionList';
import { toast } from 'sonner';

function Progress({ value }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-blue-500 h-2 rounded-full transition-all duration-300 ease-in-out"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}

function CreateInterview() {
  const { user } = useUser();
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [step, setStep] = useState(1);


  const onHandleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  console.log("Form data:", formData);
  const onGoToNext = () => {
  if (
    !formData?.jobPosition ||
    !formData?.jobDescription ||
    !formData?.duration ||
    !formData?.interviewType || // ✅ fixed key name
    formData.interviewType.length === 0 // ✅ ensure at least one type selected
  ) {
    toast('Please enter all details');
    return;
  }

  setStep(step + 1);
};

  

  return (
    <div className="w-full">
      <div className="bg-white p-3 rounded-xl shadow-md">
        <h2 className="text-medium font-bold text-black">
          Welcome Back, {user?.name || "User"}
        </h2>
        <h2 className="text-gray-500 text-medium">
          AI-Driven Interviews, Hassle-Free Hiring
        </h2>
      </div>

      <div className="mt-10 flex justify-center px-4">
        <div className="flex flex-col items-center gap-5 w-full max-w-xl">
          <div className="flex items-center gap-5">
            <ArrowLeft
              onClick={() => router.back()}
              className="cursor-pointer"
            />
            <h2 className="font-bold text-xl text-medium">Create New Interview</h2>
          </div>
          <Progress value={33} />
          {step==1?<FormContainer 
          onHandleInputChange={onHandleInputChange}
          onNext={() => onGoToNext()} 
          />
 
          :step==2?<QuestionList formData={formData} />:null}
        </div>
      </div>
    </div>
  );
}



export default CreateInterview;
