"use client";

import PageTitle from "@/components/common/PageTitle";
import React from "react";
import ProductsActions from "./products-actions/ProductsActions";
import ProductList from "./product-list/ProductList";
import useSearch from "@/hooks/use-search";
import { useSearchParams } from "next/navigation";

const ProductsPageContent = () => {
  const searchParams = useSearchParams();

  const { values, searchValues, reset, handleChange } = useSearch({
    defaultValues: {
      category: searchParams.get("category") || "",
      title: searchParams.get("title") || "",
    },
  });

  return (
    <>
      <PageTitle>Products</PageTitle>
      <div className="space-y-4">
        <ProductsActions
          values={values}
          handleChange={handleChange}
          reset={reset}
        />
        <ProductList searchValues={searchValues} />
      </div>
    </>
  );
};

export default ProductsPageContent;
