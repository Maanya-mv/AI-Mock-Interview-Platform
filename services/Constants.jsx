export const QUESTIONS_PROMPT = `You are an expert technical interviewer.

Based on the following inputs, generate a well-structured list of high-quality interview questions:

Job Title: {{jobTitle}}
Job Description: {{jobDescription}}
Interview Duration: {{duration}} minutes
Interview Type: {{type}}

Your task:
- Analyze the job description to identify key responsibilities, required skills, and expected experience.
- Generate a list of interview questions based on the interview duration.
- Adjust the number and depth of questions to match the time available.
- Ensure the questions reflect the tone and structure of a real-life {{type}} interview.

Format your response strictly in JSON as:

{
  "interviewQuestions": [
    {
      "question": "Your question here...",
      "type": "Technical | Behavioral | Experience | Problem Solving | Leadership"
    }
  ]
}

DO NOT include any explanation, reasoning, or extra text — ONLY return the JSON structure.
`;
