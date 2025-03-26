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

const formSchema = z.object({
  username: z.string().min(2, {
    message: "The username is already taken",
  }),
});
export default function profile2({ nextPage }: { nextPage: () => void }) {
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
    <div>
      <div>
        <Header />
      </div>
      <div className="w-[510px] h-[631px] m-auto mt-60">
        <h1 className="font-bold text-2xl">How would you like to be paid?</h1>
        <p className="text-gray-400">enter location and payment details</p>
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
          </Form>
          <Button
            type="submit"
            className="bg-gray-300 w-[260px] h-[40px] text-black ml-62 mt-5"
          >
            continue
          </Button>
        </div>
      </div>
    </div>
  );
}
