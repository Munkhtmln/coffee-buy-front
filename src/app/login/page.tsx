"use client";
import Link from "next/link";
import Leftside from "../components/Leftside";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "The username is already taken",
  }),
});
export default function Login1() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="flex relative">
      <Leftside />
      <div className="flex justify-center items-center w-[407px] h-[256px] m-auto ">
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
            <Link href={"/profile"}>
              <Button
                type="submit"
                className="bg-gray-300 w-[359px] h-[40px] text-black cursor-pointer"
              >
                Continue
              </Button>
            </Link>
          </form>
        </Form>
        <Link href={"/signup01"}>
          <Button className="bg-gray-300 absolute right-20 top-10 cursor-pointer text-black">
            Signup
          </Button>
        </Link>
      </div>
    </div>
  );
}
