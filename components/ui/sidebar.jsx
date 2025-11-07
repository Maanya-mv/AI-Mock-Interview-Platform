
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";


export function Sidebar({ className, children, ...props }) {
  return (
    <aside
      className={cn(
        "w-[250px] h-screen flex flex-col border-r border-gray-200 bg-blue-100",
        className
      )}
      {...props}
    >
      <div className="h-full px-4 py-6">{children}</div>
    </aside>
  );
}


export function SidebarHeader({ children }) {
  return <div className="mb-6 text-xl font-bold text-black">{children}</div>;
}

export function SidebarContent({ children }) {
  return <div className="flex-1">{children}</div>;
}

export function SidebarGroup({ children }) {
  return <div className="mb-4">{children}</div>;
}

export function SidebarFooter({ children }) {
  return (
    <div className="mt-auto border-t pt-4 text-sm text-gray-600">{children}</div>
  );
}


export function SidebarMenu({ children }) {
  return <ul className="space-y-1">{children}</ul>;
}

export function SidebarMenuItem({ children }) {
  return <li>{children}</li>;
}
export const SidebarMenuButton = React.forwardRef(
  ({ className, children, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          "w-full flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-200 transition-colors",
          className
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
SidebarMenuButton.displayName = "SidebarMenuButton";
