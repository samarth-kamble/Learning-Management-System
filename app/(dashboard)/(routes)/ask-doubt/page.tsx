"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const DoubtPage = () => {
  const { toast } = useToast();
  const form = useRef<HTMLFormElement>(null);

  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    if (!form.current) return;

    emailjs
      .sendForm("service_w7zkb2r", "template_2b11pxk", form.current, {
        publicKey: "VXYGyKh6XOf2J51ho",
      })
      .then(
        () => {
          toast({
            title: "Email sent successfully",
            description: "We will get back to you soon",
            variant: "default",
          });
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    setIsLoading(false);
  };
  return (
    <div className="flex flex-col items-center justify-center mt-32">
      <h1 className="font-bold text-4xl mb-3">Ask Your Doubt</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="flex flex-col gap-y-6">
          <div className="flex flex-col gap-3 min-w-[600px]">
            <Label>Name</Label>
            <Input
              type="text"
              name="user_name"
              placeholder="Enter Your Full Name"
            />
          </div>
          <div className="flex flex-col gap-3 min-w-[600px]">
            <Label>Email</Label>
            <Input
              type="email"
              name="user_email"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="flex flex-col gap-3 min-w-[600px]">
            <Label>Message</Label>
            <Textarea name="message" placeholder="Enter your doubt" />
          </div>

          <Button
            type="submit"
            value="Send"
            className="border cursor-pointer "
            size={"lg"}
            disabled={isLoading}
          >
            {isLoading ? <Loader2 /> : "Send"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default DoubtPage;
