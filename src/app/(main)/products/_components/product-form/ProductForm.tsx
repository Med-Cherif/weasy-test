"use client";

import { useGetCategoriesQuery } from "@/apis/product/product-apis";
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
import Select from "@/components/form/select/Select";
import { Textarea } from "@/components/form/textarea/Textarea";
import Button from "@/components/ui/Button";
import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/Dialog";
import { ProductFieldValues, productSchema } from "@/schemas/product-schema";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { FieldValues, Resolver, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface ProductFormContentProps {
  title: string;
  defaultValues?: FieldValues;
  setIsOpen: (isOpen: boolean) => void;
  isPending: boolean;
  mutateAsync: (values: ProductFieldValues) => unknown;
  // handleSubmit: (values: ProductFieldValues) => unknown
}

const ProductFormContent = ({
  title,
  defaultValues,
  isPending,
  setIsOpen,
  mutateAsync,
}: // handleSubmit,
ProductFormContentProps) => {
  const { data: categories } = useGetCategoriesQuery();

  const form = useForm({
    resolver: yupResolver(productSchema) as Resolver<any, any, any>,
    defaultValues,
  });

  const onSubmit: SubmitHandler<ProductFieldValues> = async (values) => {
    try {
      await mutateAsync(values);
      setIsOpen(false);
    } catch (error) {
      toast.error("Something went wrong");
      // console.log({ error });
    }
  };

  return (
    <Form {...form}>
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
      </DialogHeader>
      <DialogBody>
        <FormRow>
          <FormField
            name="title"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem className="!col-span-6">
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            name="price"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem className="!col-span-6">
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            name="image"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem className="!col-span-6">
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            name="category"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem className="!col-span-6">
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Select
                      value={field.value}
                      onChange={field.onChange}
                      options={(categories || [])?.map((category) => {
                        return {
                          label: category,
                          value: category,
                        };
                      })}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            name="description"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </FormRow>
      </DialogBody>
      <DialogFooter>
        <Button
          onClick={() => setIsOpen(false)}
          variant="outline"
          color={"default"}
        >
          Cancel
        </Button>
        <Button isLoading={isPending} onClick={form.handleSubmit(onSubmit)}>
          Save
        </Button>
      </DialogFooter>
    </Form>
  );
};

interface ProductFormProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  title: string;
  defaultValues?: FieldValues;
  isPending: boolean;
  mutateAsync: (values: ProductFieldValues) => unknown;
}

const ProductForm = ({
  title,
  defaultValues,
  isOpen,
  isPending,
  setIsOpen,
  mutateAsync,
}: ProductFormProps) => {
  return (
    <Dialog isOpen={isOpen} setIsOpen={setIsOpen}>
      <ProductFormContent
        title={title}
        defaultValues={defaultValues}
        setIsOpen={setIsOpen}
        isPending={isPending}
        mutateAsync={mutateAsync}
      />
    </Dialog>
  );
};

export default ProductForm;
