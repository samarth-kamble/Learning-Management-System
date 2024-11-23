"use client";

import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import React, { useEffect } from "react";

const PDFAIPage = () => {
  const { user } = useUser();

  const createUser = useMutation(api.user.createUser);

  useEffect(() => {
    checkUser();
  }, [user]);

  const checkUser = async () => {
    const result = await createUser({
      email: user?.primaryEmailAddress?.emailAddress ?? "",
      imageUrl: user?.imageUrl ?? "",
      userName: user?.fullName ?? "",
    });
  };

  return <div>PDFAIPage</div>;
};

export default PDFAIPage;
