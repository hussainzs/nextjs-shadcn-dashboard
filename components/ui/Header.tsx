"use client";

import { CommandDemo } from "@/components/ui/CommandDemo";
import { Button } from "@/components/ui/button";
import { BellIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React, { useState } from "react";

// type for notification
type Notification = {
  text: string;
  date: string;
  read: boolean;
};

// bunch of dummy notifications
const dummyNotificationsData: Notification[] = [
  {
    text: "Welcome to the app",
    date: "1 hour ago",
    read: false,
  },
  {
    text: "You have a new message",
    date: "2 hours ago",
    read: false,
  },
  {
    text: "Your subscription has expired",
    date: "1 day ago",
    read: true,
  },
];

export default function Header() {
  //   add state
  const [notifications, setNotifications] = useState<Notification[]>(
    dummyNotificationsData,
  );

  return (
    <div className="grid grid-cols-2 gap-4 border-b p-4">
      <CommandDemo />
      <div className="flex items-center justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild={true}>
            <div className="relative">
              <Button variant="outline" size="icon">
                <BellIcon />
              </Button>
              {notifications.find((item: Notification) => !item.read) && (
                <span className="absolute right-0 top-0 size-2 rounded-full bg-green-500" />
              )}
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {notifications.map((item: Notification, index: number) => (
              <DropdownMenuItem
                key={index}
                className="flex cursor-pointer gap-2.5 p-4 hover:bg-neutral-50"
              >
                <div
                  className={`size-3 rounded-full ${item.read ? "bg-neutral-200" : "bg-green-500"}`}
                />
                <div>
                  <p className="text-sm font-medium">{item.text}</p>
                  <p className="text-xs text-neutral-500">{item.date}</p>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
