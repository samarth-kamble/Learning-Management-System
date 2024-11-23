import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import { ConvexClientProvider } from "./ConvexClientProvider";
import ContextProvider from "@/context/Context";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Learning Management System",
  description:
    "Learning Management System for the modern web developer. Built with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      signInFallbackRedirectUrl={"/"}
      signUpFallbackRedirectUrl={"/"}
    >
      <html lang="en">
        <body className={`${inter.className}`}>
          <ContextProvider>
            <ConvexClientProvider>{children}</ConvexClientProvider>
          </ContextProvider>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
