"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { useUser } from "../_context/UserContext";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserType } from "@/utils/types";

export const Header = () => {
  const { loggedUser, logoutHandler } = useUser() as {
    loggedUser: UserType | null;
    logoutHandler: () => void;
  };

  const pathname = usePathname();
  const router = useRouter();

  const isUser = pathname === "/signin";

  return (
    <div className="absolute flex px-20 w-full bg-white h-[56px] z-10 ">
      <div className="flex justify-between w-full items-center">
        <Link href="/">
          <Image
            alt=""
            src={"/logo.svg"}
            priority={true}
            width={147}
            height={20}
          ></Image>
        </Link>
        {loggedUser ? (
          <div className="flex gap-2 py-2 px-4 items-center w-[187px] h-[40px] justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="w-10 h-10">
                <AvatarImage src={loggedUser.profile.avatarImage} alt="user" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p>{loggedUser.username}</p>
            </div>
            <Popover>
              <PopoverTrigger>
                <ChevronDown />
              </PopoverTrigger>
              <PopoverContent
                className="w-[163px] min-h-[32px] py-[6px] px-2 flex items-center  gap-2 mt-3"
                align="end"
              >
                <Button
                  variant="ghost"
                  className="text-black w-full text-[14px]"
                  onClick={logoutHandler}
                >
                  Logout
                </Button>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Button
            variant="secondary"
            onClick={() => router.push(isUser ? "/signup" : "/signin")}
          >
            {isUser ? "Sign up" : "Log in"}
          </Button>
        )}
      </div>
    </div>
  );
};
