"use client";

import { useGetCategoriesQuery } from "@/apis/product/product-apis";
import { ProductCategory } from "@/apis/product/product-types";
import { Input } from "@/components/form/input/Input";
import Select from "@/components/form/select/Select";
import Button from "@/components/ui/Button";
import { useDisclosure } from "@/hooks/use-disclosure";
import React from "react";
import { LuPlus, LuX } from "react-icons/lu";
import ProductForm from "../product-form/ProductForm";
import { HandleSearchChange } from "@/hooks/use-search";
import CreateProduct from "../create-product/CreateProduct";

interface ProductsActionsProps {
  values: Record<string, string>;
  reset: () => void;
  handleChange: HandleSearchChange;
}

const ProductsActions = ({
  handleChange,
  values,
  reset,
}: ProductsActionsProps) => {
  const { isOpen, onOpen, setIsOpen } = useDisclosure();

  const { data: categories } = useGetCategoriesQuery();
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_auto] gap-4">
        <Input
          placeholder="Search..."
          value={values.title}
          onChange={(e) => handleChange("title", e.target.value, true)}
        />
        <Select
          value={values.category}
          options={(categories as ProductCategory[]).map((category) => {
            return {
              label: category,
              value: category,
            };
          })}
          onChange={(value) => handleChange("category", value, false)}
        />

        <Button color={"muted"} onClick={reset}>
          <LuX /> Reset
        </Button>
      </div>
      <div className="-order-1 lg:order-1">
        <>
          <Button onClick={onOpen} className="w-full">
            <LuPlus /> Add New Product
          </Button>
          <CreateProduct isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
      </div>
    </div>
  );
};

export default ProductsActions;
