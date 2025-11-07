"use client";

import Image from "next/image";
import Link from "next/link"; 
import { Button } from "@/components/ui/button";
import { CalendarClock, Circle, Plus } from "lucide-react";
import { LayoutDashboard } from "lucide-react"
import { ListChecks } from "lucide-react"
import { CreditCard } from "lucide-react"
import { Settings } from "lucide-react"
import { usePathname } from "next/navigation";



import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"; 


const SideBarOptions = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard, 
  },
  {
        name:'Scheduled Interview',
        icon:CalendarClock,
        path:'/scheduled-interview'
    },
    {
        name:'All Interview',
        icon:ListChecks ,
        path:'/all-interview'
    },
    {
        name:'Billing',
        icon: CreditCard,
        path:'/billing'
    },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings, 
  },  
];

export function AppSidebar() {
  const path=usePathname();
  console.log(path);
  return (
    <Sidebar>
      <SidebarHeader className="flex flex-col items-start gap-4 mt-5">
        <Image src={"/Logo.png"} alt="logo" width={200} height={100} priority/>
        <Button className="w-full mt-4">
          <Plus className="mr-2 h-4 w-4" />
          Create New Interview
        </Button>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {SideBarOptions.map((option, index) => (
              <SidebarMenuItem key={index} className='p-1'>
                <SidebarMenuButton asChild className={`p-2 &{path==option.path && 'bg-white-200'}`}>
                  <Link href={option.path} className="flex items-center gap-2">
                    <option.icon className={` ${path === option.path ? 'text-primary' : ''}`}/>
                    <span className={`text-[16px] font-medium ${path === option.path ? 'text-primary' : ''}`}>{option.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
