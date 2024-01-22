"use client";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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

import * as z from "zod";

const formSchema = z.object({
  tweet: z.string().min(2).max(50),
});

const TweetPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tweet: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div>
      <div className="flex justify-between">
        <Link href="/home">back</Link>
      </div>
      <div className="flex gap-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <Button
              type="submit"
              className="absolute right-4 top-2 bg-sky-500 hover:bg-sky-500/90"
            >
              Post
            </Button>
            <FormField
              control={form.control}
              name="tweet"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2">
                  <div>useravt</div>
                  <FormControl>
                    <Input
                      placeholder="my tweet..."
                      {...field}
                      className="bg-black"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </div>
  );
};

export default TweetPage;
