import React from "react";
import { Sidebar } from "@/components/ui/sidebar";
import WelcomeContainer from "./dashboard/_components/WelcomeContainer";



function DashboardProvider({ children }) {
  return (
    <div class='w-full p-10'>
      <WelcomeContainer />
        {children} 
    </div>
    
  );
}

export default DashboardProvider;
