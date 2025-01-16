"use client";
import React from "react";
import UserItem from "@/components/ui/UserItem";
import {
  BellIcon,
  Cookie,
  CreditCard,
  Inbox,
  MessageSquare,
  Settings,
  User,
} from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

const Sidebar = () => {
  // type for menu items
  type MenuItem = {
    link: string;
    icon: React.ReactNode;
    text: string;
  };

  // type for menu groups
  type MenuGroup = {
    group: string;
    items: MenuItem[];
  };

  // define the menu items for the sidebar
  const menuList: MenuGroup[] = [
    {
      group: "General",
      items: [
        {
          link: "/",
          icon: <User />,
          text: "Profile",
        },
        {
          link: "/",
          icon: <Inbox />,
          text: "Inbox",
        },
        {
          link: "/",
          icon: <CreditCard />,
          text: "Billing",
        },
        {
          link: "/",
          icon: <BellIcon />,
          text: "Notifications",
        },
      ],
    },
    {
      group: "Settings",
      items: [
        {
          link: "/",
          icon: <Settings />,
          text: "General Settings",
        },
        {
          link: "/",
          icon: <Cookie />,
          text: "Privacy",
        },
        {
          link: "/",
          icon: <MessageSquare />,
          text: "Logs",
        },
      ],
    },
  ];

  return (
    <div className="flex min-h-screen w-[300px] min-w-[300px] flex-col gap-2 border p-4">
      <div>
        <UserItem />
      </div>
      <div className="grow">
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {menuList.map((menu: MenuGroup, menuIndex: number) => (
              <React.Fragment key={menuIndex}>
                <CommandGroup heading={menu.group}>
                  {menu.items.map((item, itemIndex) => (
                    <CommandItem key={itemIndex}>
                      {item.icon}
                      {item.text}
                    </CommandItem>
                  ))}
                </CommandGroup>
                {menuIndex < menuList.length - 1 && <CommandSeparator />}
              </React.Fragment>
            ))}
          </CommandList>
        </Command>
      </div>
    </div>
  );
};
export default Sidebar;
