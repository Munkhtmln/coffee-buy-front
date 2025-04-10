"use client";

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

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { User } from "../utils/type";

const formSchema = z.object({
  email: z.string().min(3, {
    message: "Email must be at least 3 characters.",
  }),
  password: z.string().min(3, {
    message: "Password must be at least 3 characters.",
  }),
  username: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
});

export default function Second({ Mail }: { Mail: string }) {
  const [postDatas, setPostDatas] = useState<User[]>([]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      username: Mail,
    },
  });
  const router = useRouter();

  const PostData = async ({ values }: { values: User }) => {
    try {
      const postData = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const getJson = await postData.json();
      console.log("Response from server:", getJson);
      if (getJson?.postData) {
        setPostDatas(getJson.postData);
      }
      // PostData(values.email, values.password, values.username);
      router.push("/login");
    } catch (error) {
      console.log("Error during signup:", error);
    }
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form values:", values);
    PostData({ values });
  }

  return (
    <div className="w-[40vw] m-auto p-20 items-start">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <h1 className="text-3xl font-bold">Create Your Account</h1>
                <p className="text-[#71717A]">
                  Choose a <div className="text-2xl font-bold"></div> for your
                  page
                </p>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    className="w-[410px]"
                    placeholder="Email address"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    className="w-[410px]"
                    placeholder="Password"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Choose a strong password to secure your account.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-[410px]" type="submit">
            Continue
          </Button>
        </form>
      </Form>
    </div>
  );
}
