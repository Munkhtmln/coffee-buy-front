"use client";
import { Input } from "@/components/ui/input";
import Header from "../components/Header";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import profile2 from "./page2";
import { useState } from "react";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "The username is already taken",
  }),
});
export default function profilePage() {
  const [current, setCurrent] = useState(0);
  const Form = [profile1, profile2][current];
  const nextPage = () => {
    setCurrent(current + 1);
  };
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="w-[510px] h-[631px] m-auto mt-60">
        <h1 className="font-bold text-2xl">Complete your profile page</h1>
        <p className=" mt-4">add photo</p>
        <Input type="file"></Input>
        <div>
          <Form nextPage={nextPage} />
        </div>
      </div>
    </div>
  );
}
const profile1 = ({ nextPage }: { nextPage: () => void }) => {
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
              <FormLabel className="mt-4 font-medium text-sm text-black">
                Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="enter your name here"
                  className="text-black"
                />
              </FormControl>
              <FormLabel className="mt-4 font-medium text-sm text-black">
                About
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Write about yourself here"
                  className="text-black pb-20 pt-4"
                />
              </FormControl>
              <FormLabel className="mt-4 font-medium text-sm text-black">
                Social media URL
              </FormLabel>
              <FormControl>
                <Input placeholder="https://" className="text-black" />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
      <Button
        type="submit"
        className="bg-gray-300 w-[260px] h-[40px] text-black ml-62 mt-5"
      >
        continue
      </Button>
    </Form>
  );
};
