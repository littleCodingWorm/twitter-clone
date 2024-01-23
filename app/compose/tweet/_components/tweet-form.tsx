"use client";

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
import { createPost } from "@/actions/create-post";
import { useRouter } from "next/navigation";
import Image from "next/image";

const formSchema = z.object({
  title: z.string().min(2).max(30),
  body: z.string().min(2).max(150),
});
const TweetForm = ({
  author,
  authorEmail,
  authorImage,
}: {
  author: string;
  authorEmail: string;
  authorImage: string;
}) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      body: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const createdPost = await createPost({
      author,
      authorEmail,
      title: values.title,
      body: values.body,
    });
    createdPost ? router.push("/home") : null;
  }
  return (
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
            name="title"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2">
                <div className="">
                  <Image
                    src={authorImage}
                    className="rounded-full"
                    width={36}
                    height={36}
                    alt="author image"
                  />
                </div>
                <FormControl>
                  <Input
                    placeholder="tweet title..."
                    {...field}
                    className="bg-black"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />{" "}
          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2">
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
  );
};

export default TweetForm;
