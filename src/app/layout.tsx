import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./_components/Header";
import UsersProvider from "./_context/UserContext";
import ProfileProvider from "./_context/ProfileContext";
import BankCardProvider from "./_context/BankCardContext";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Buy me a coffee",
  description: "Donation platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased relative`}>
        <BankCardProvider>
          <ProfileProvider>
            <UsersProvider>
              <Header />
              {children}
              <Toaster />
            </UsersProvider>
          </ProfileProvider>
        </BankCardProvider>
      </body>
    </html>
  );
}
