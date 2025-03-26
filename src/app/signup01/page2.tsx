"use client";

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
import Leftside from "../components/Leftside";
import Link from "next/link";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "The username is already taken",
  }),
});

export default function Signup02({ nextPage }: { nextPage: () => void }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    nextPage();
  }
  return (
    <div className="flex">
      <div className="flex justify-center items-center w-[407px] h-[256px] m-auto relative">
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
                    Welcome,
                  </FormLabel>
                  <FormLabel className="font-normal text-gray-400">
                    Connect email and set a password
                  </FormLabel>
                  <FormLabel className="mt-4 font-medium text-sm text-black">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="enter your email here"
                      className="text-black"
                    />
                  </FormControl>
                  <FormLabel className="mt-4 font-medium text-sm text-black">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="enter your password here"
                      className="text-black"
                    />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Link href={"/login"}>
              <Button
                type="submit"
                className="bg-gray-300 w-[359px] h-[40px] text-black"
              >
                Continue
              </Button>
            </Link>
          </form>{" "}
        </Form>{" "}
      </div>
    </div>
  );
}
