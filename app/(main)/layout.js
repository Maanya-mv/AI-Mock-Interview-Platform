
import React from "react";
import DashboardProvider from "../provider";
import { AppSidebar } from "./_components/AppSidebar";
import '../globals.css';


export default function DashboardLayout({ children }) {
  return (
    <DashboardProvider>
      <div className="flex">
        <AppSidebar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </DashboardProvider>
  );
}
