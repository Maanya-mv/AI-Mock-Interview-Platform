'use client';

import React from 'react';
import { Phone, Video } from 'lucide-react';
import Link from 'next/link';

function CreateOptions() {
  return (
    <div className="grid grid-cols-2 gap-5">
      <Link href="/dashboard/create-interview" className="no-underline">
        <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-md cursor-pointer hover:shadow-lg transition">
          <Video className="p-3 text-primary bg-blue-50 rounded-lg h-10 w-10" />
          <h2 className="font-bold mt-2">Create New Interview</h2>
          <p className="text-gray-500 font-medium">
            Create AI Interview and schedule them with the candidates
          </p>
        </div>
      </Link>

      <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-md">
        <Phone className="p-3 text-primary bg-blue-50 rounded-lg h-10 w-10" />
        <h2 className="font-bold mt-2">Create Phone Screening Call</h2>
        <p className="text-gray-500 font-medium">
          Schedule phone screening call with the candidates
        </p>
      </div>
    </div>
  );
}

export default CreateOptions;
