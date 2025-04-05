import React from "react";
import ProductForm from "../product-form/ProductForm";
import { useAddNewProductMutation } from "@/apis/product/product-apis";

interface CreateProductProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const CreateProduct = ({ isOpen, setIsOpen }: CreateProductProps) => {
  const mutation = useAddNewProductMutation();

  return (
    <ProductForm
      title="Add New Product"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      defaultValues={{
        title: "",
        image: "",
        category: "",
        price: "",
        description: "",
      }}
      isPending={mutation.isPending}
      mutateAsync={(values) => mutation.mutateAsync(values)}
    />
  );
};

export default CreateProduct;
