"use client";
import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="flex min-h-screen w-[300px] min-w-[300px] flex-col border p-4">
      <div></div>
      <div className="grow">Menu</div>
      <div>Settings</div>
    </div>
  );
};

export default Sidebar;
