'use client';

import React, { useState } from 'react';
import { Brain, Users, Briefcase, Lightbulb, UserCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';



const InterviewType = [
  { title: 'Technical', icon: Brain },
  { title: 'Behavioral', icon: Users },
  { title: 'Experience', icon: Briefcase },
  { title: 'Problem Solving', icon: Lightbulb },
  { title: 'Leadership', icon: UserCheck }
];

function FormContainer({ onHandleInputChange, onNext }){
  const [selectedTypes, setSelectedTypes] = useState([]);

  const toggleInterviewType = (typeTitle) => {
    const isSelected = selectedTypes.includes(typeTitle);
    const updatedTypes = isSelected
      ? selectedTypes.filter(title => title !== typeTitle)
      : [...selectedTypes, typeTitle];

    setSelectedTypes(updatedTypes);
    onHandleInputChange('interviewType', updatedTypes); // 🔁 update parent state too
  };

  return (
    <div className="p-5 bg-white rounded-xl shadow-md w-full max-w-md">
      {/* Job Position Input */}
      <div className="mb-4">
        <label htmlFor="job" className="block text-sm font-medium text-gray-700 mb-1">
          Job Position
        </label>
        <input
          id="job"
          type="text"
          placeholder="e.g. Full Stack Developer"
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(event) => onHandleInputChange('jobPosition', event.target.value)}
        />
      </div>

      {/* Job Description Textarea */}
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
          Job Description
        </label>
        <textarea
          id="description"
          placeholder="Enter details of job description"
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm h-[200px] resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(event) => onHandleInputChange('jobDescription', event.target.value)}
        ></textarea>
      </div>

      {/* Interview Duration Dropdown */}
      <div className="mb-4">
        <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
          Interview Duration
        </label>
        <select
          id="duration"
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(event) => onHandleInputChange('duration', event.target.value)}
        >
          <option value="">Select Duration</option>
          <option value="5">5 Minutes</option>
          <option value="15">15 Minutes</option>
          <option value="30">30 Minutes</option>
          <option value="45">45 Minutes</option>
        </select>
      </div>

      {/* Interview Type Selector */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Interview Type
        </label>
        <div className="flex gap-3 flex-wrap mt-2">
          {InterviewType.map((type, index) => {
            const isSelected = selectedTypes.includes(type.title);

            return (
              <div
                key={index}
                onClick={() => toggleInterviewType(type.title)}
                className={`flex items-center gap-2 p-2 px-3 border rounded-xl cursor-pointer transition 
                  ${isSelected ? 'bg-blue-500 text-white border-blue-500' : 'bg-white text-black border-gray-300 hover:bg-gray-100'}`}
              >
                <type.icon className="h-4 w-4" />
                <span className="text-sm">{type.title}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Submit Button */}
      <div className='mt-7 flex justify-end'>
        <Button onClick= {onNext}>
          Generate Questions <ArrowRight />
        </Button>
      </div>
    </div>
  );
}

export default FormContainer;
