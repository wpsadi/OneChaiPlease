"use client";
import React, { useState } from "react";

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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useAuthStore } from "@/store/Auth";
import { Lock, Unlock } from "lucide-react";
import  UploadFile from "@/components/component/upload/upload-file";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email("Email doesn't seem to be valid"),
  type: z.enum(["creator", "supporter"]),
  image: z.array(z.instanceof(File)).min(1,{
    message: "At least 1 asset is required to upload"
  }).max(1,{
    message: "Only 1 asset is allowed to upload"
  })  ,
});

function Form_main({
  statusState
}:{
  statusState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}) {
  
  const [LockStatusForm1, setLockStatusForm1] = statusState;
  const { sessionInfo } = useAuthStore();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: sessionInfo?.user?.name || "Can't access name",
      email: sessionInfo?.user?.email || "Can't access email",
      type: "supporter",
      image: [] as (File | undefined)[]
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    const check = formSchema.safeParse(values);
    const reader = new FileReader();
    reader.onload = () => {
      console.log(reader.result); // Log the file contents as a string or array buffer
    };
    if (check.success) {
      setLockStatusForm1(true);
    }
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="shadcn"
                  {...field}
                  required
                  disabled={LockStatusForm1}
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="shadcn"
                  {...field}
                  disabled={true}
                  required
                />
              </FormControl>
              <FormDescription>
                We are filling this for you :&#41;
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Account type</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={"supporter"}
                disabled={LockStatusForm1}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="supporter">supporter</SelectItem>
                  <SelectItem value="creator">creator</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Don&lsquo;t worry. you can change this in future
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          
          render={({ field }) => (
            <FormItem>
            <FormLabel>Profile Photo</FormLabel>
            <UploadFile fields={{...field}}         

         disabled={LockStatusForm1} multiple={false} accept="image/*" />
            <FormDescription>
              Don&lsquo;t worry. you can change this in future
            </FormDescription>
            <FormMessage />
          </FormItem>
          )}
        />
        {!LockStatusForm1 && (
          <Button type="submit" className="text-white flex items-center bg-red-500">
            Lock <Lock />
          </Button>
        )}
        {LockStatusForm1 && (
          <Button
            type="button"
            className="text-white flex items-center bg-green-500"
            onClick={() => {
              setLockStatusForm1(false);
            }}
          >
            Unlock <Unlock />
          </Button>
        )}
      </form>
    </Form>
  );
}

export default Form_main;
