import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import productClient from "./product-client";
import HTTP_KEYS from "../http-keys";
import { FieldValues } from "react-hook-form";
import { Product } from "./product-types";
import { ProductFieldValues } from "@/schemas/product-schema";
import { toast } from "react-toastify";

export const useGetCategoriesQuery = () => {
  return useQuery({
    placeholderData: [],
    queryKey: [HTTP_KEYS.CATEGORIES],
    queryFn: () => productClient.getCategories(),
  });
};

export const useGetProductsQuery = (search?: Record<string, string>) => {
  return useQuery({
    placeholderData: [],
    queryKey: [HTTP_KEYS.PRODUCTS, "list", { search }],
    queryFn: () => productClient.getProducts(),
  });
};

export const useGetProductByIdQuery = (id: string | number) => {
  return useQuery({
    queryKey: [HTTP_KEYS.PRODUCTS, "details", id],
    queryFn: () => productClient.getProductById(id),
  });
};

export const useAddNewProductMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ProductFieldValues) => productClient.addNewProduct(data),
    onSuccess() {
      toast.success("Product Created Successfully");
      queryClient.invalidateQueries({
        queryKey: [HTTP_KEYS.PRODUCTS, "list"],
      });
    },
  });
};

export const useEditProductMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, ...data }: FieldValues) =>
      productClient.editProduct(id, data),
    onSuccess() {
      toast.success("Product Edited Successfully");
      queryClient.invalidateQueries({
        queryKey: [HTTP_KEYS.PRODUCTS],
      });
    },
  });
};

export const useDeleteProductMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string | number) => productClient.deleteProduct(id),
    onSuccess(_, id) {
      toast.success("Product Deleted Successfully");

      queryClient.setQueriesData(
        {
          queryKey: [HTTP_KEYS.PRODUCTS, "list"],
        },
        (current: Product[]) => {
          if (!current) return [];
          return current.filter((product) => {
            return product.id !== id;
          });
        }
      );
    },
  });
};
