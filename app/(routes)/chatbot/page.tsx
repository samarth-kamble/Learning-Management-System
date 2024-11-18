import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Link href={"https://samarth-kamble-7.github.io/chatbot-ai/"}>
        <Button>Go to Bot</Button>
      </Link>
    </div>
  );
};

export default page;
