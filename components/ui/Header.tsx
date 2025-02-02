"use client";

import { CommandDemo } from "@/components/ui/CommandDemo";
import { Button } from "@/components/ui/button";
import { BellIcon } from "lucide-react";

export default function Header() {
  return (
    <div className="grid grid-cols-2 gap-4 border-b p-4">
      <CommandDemo />
      <div className="flex items-center justify-end">
        <Button variant="outline" size="icon">
          <BellIcon />
        </Button>
      </div>
    </div>
  );
}
