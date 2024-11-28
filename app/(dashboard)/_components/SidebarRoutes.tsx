"use client";

import {
  BotMessageSquare,
  ChartNoAxesCombined,
  CirclePlus,
  Compass,
  House,
  Layout,
  List,
  MessageSquare,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { SidebarItem } from "./SidebarItem";

const guestRoutes = [
  {
    icon: House,
    label: "Home",
    href: "/home",
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/search",
  },
  {
    icon: BotMessageSquare,
    label: "ChatBot",
    href: "/ai-chatbot",
  },
  {
    icon: MessageSquare,
    label: "Ask Doubt",
    href: "/ask-doubt",
  },
];

const teacherRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/teacher/overview",
  },
  {
    icon: CirclePlus,
    label: "Create Course",
    href: "/teacher/create",
  },
  {
    icon: List,
    label: "All Courses",
    href: "/teacher/courses",
  },
  {
    icon: ChartNoAxesCombined,
    label: "Analytics",
    href: "/teacher/analytics",
  },
];

const SidebarRoutes = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.includes("/teacher");

  const routes = isTeacherPage ? teacherRoutes : guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};

export default SidebarRoutes;
