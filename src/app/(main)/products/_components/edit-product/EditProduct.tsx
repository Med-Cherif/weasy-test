import { Product } from "@/apis/product/product-types";
import React from "react";
import ProductForm from "../product-form/ProductForm";
import { useEditProductMutation } from "@/apis/product/product-apis";

interface EditProductProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  data: Product;
}

const EditProduct = ({ isOpen, setIsOpen, data }: EditProductProps) => {
  const { id, category, description, image, title, price } = data;

  const mutation = useEditProductMutation();

  return (
    <ProductForm
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="Edit Product"
      defaultValues={{
        category,
        description,
        image,
        title,
        price,
      }}
      isPending={mutation.isPending}
      mutateAsync={(values) => mutation.mutateAsync({ id, ...values })}
    />
  );
};

export default EditProduct;
