"use client";
import React from "react";
import UserItem from "@/components/ui/UserItem";

const Sidebar: React.FC = () => {
  return (
    <div className="flex min-h-screen w-[300px] min-w-[300px] flex-col gap-2 border p-4">
      <div>
        <UserItem />
      </div>
      <div className="grow">Menu</div>
      <div>Settings</div>
    </div>
  );
};

export default Sidebar;
