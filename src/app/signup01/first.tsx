"use client";

import Leftside from "../components/Leftside";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/router";
import { CircleX } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Signup02 from "./page2";

const formSchema = z.object({
  username: z.string().min(2, {
    message: `${(<CircleX />)} The username is already taken`,
  }),
});

export default function Signup01({ setMail }: { setMail: () => void }) {
  const [postData, setPostData] = useState("");
  const getData = async (username: string) => {
    const data = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ username }),
    });
    const jsondta = await data.json();
    setPostData(jsondta);
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setMail(values.username);
  }
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 text-red-500"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-2xl text-black">
                  Create your account
                </FormLabel>
                <FormLabel className="font-normal text-gray-400">
                  Choose a {postData} for your page
                </FormLabel>
                <FormLabel className="mt-4 font-medium text-sm text-black">
                  Username
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="enter your username here"
                    className="text-black"
                    {...field}
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="bg-gray-300 w-[359px] h-[40px] text-black"
          >
            continue
          </Button>
        </form>
      </Form>
    </div>
  );
}
