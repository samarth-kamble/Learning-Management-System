"use client";

import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";
export const NavbarRoutes = () => {
  const pathname = usePathname();

  const isteacherPage = pathname?.startsWith("/teacher");
  const isPlayerPage = pathname?.includes("/chapter");

  return (
    <div className="flex gap-2 ml-auto">
      {isteacherPage || isPlayerPage ? (
        <Link href={"/dashboard"}>
          <Button size={"sm"} variant={"ghost"}>
            <LogOut className="h-4 w-4 mr-1" />
            Exit
          </Button>
        </Link>
      ) : (
        <Link href={"/teacher/courses"}>
          <Button size={"sm"} variant={"ghost"}>
            Teacher Mode
          </Button>
        </Link>
      )}
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};
