"use client";
import React from 'react';
import { useUser } from '@/app/provider';

function WelcomeContainer() {
  const { user } = useUser();

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
    </div>
  );
}

export default WelcomeContainer;
