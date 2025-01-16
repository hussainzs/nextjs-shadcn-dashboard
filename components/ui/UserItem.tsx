"use client";
import React from "react";

const UserItem: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-2 rounded-[8px] border p-2">
      <div
        className="avatar flex min-h-10 min-w-10 items-center justify-center rounded-full
       bg-emerald-500 font-[700] text-white"
      >
        <p>UN</p>
      </div>
      <div className="flex flex-col">
        <p className="text-[16px] font-bold">Username</p>
        <p>user@email</p>
      </div>
    </div>
  );
};

export default UserItem;
