"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/form/Form";
import FormRow from "@/components/form/FormRow";
import { Input } from "@/components/form/input/Input";
import Button from "@/components/ui/Button";
import Image from "next/image";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFieldValues, loginSchema } from "@/schemas/login-schema";
import Link from "next/link";
import { useLoginMutation } from "@/apis/auth/auth-apis";
import { extractResponseError } from "@/utils/error-utils";

const LoginForm = () => {
  const mutation = useLoginMutation();

  const error = extractResponseError(mutation.error);

  const form = useForm<LoginFieldValues>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginFieldValues> = (values) => {
    mutation.mutate(values);
  };

  return (
    <div className="flex items-center mx-auto w-full max-w-md p-10">
      <div className="w-full space-y-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <Link href={"/"}>
            <Image src="/logo.png" width={78} height={50} alt="" />
          </Link>
          <div className="space-y-1">
            <h2 className="font-medium text-2xl">Welcome to Weasydoo</h2>
            <p className="text-muted-foreground">
              Enter your credentials to continue
            </p>
          </div>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormRow>
              {error && typeof error === "string" ? (
                <div className="p-3 rounded-md text-destructive border border-destructive text-center">
                  {error}
                </div>
              ) : null}
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <Button isLoading={mutation.isPending}>Login</Button>

              <p className="text-center">
                You don't have account ?{" "}
                <span className="underline cursor-pointer">Sign up</span>
              </p>

              <Link href={"/"} className="text-primary underline text-center">
                Visit Our Home Page
              </Link>
            </FormRow>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
