"use client";

import { useGetProductsQuery } from "@/apis/product/product-apis";
import { Card, CardContent } from "@/components/ui/Card";
import React from "react";
import ProductCard from "./ProductCard";
import Spinner from "@/components/common/Spinner";

const ProductList = ({
  searchValues,
}: {
  searchValues: Record<string, string>;
}) => {
  const { data: products, isFetching } = useGetProductsQuery(searchValues);

  if (isFetching) {
    return <Spinner />;
  }

  const isListEmpty = !products || products.length === 0;

  if (isListEmpty) {
    return <p className="text-center text-xl">No Item Found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
      {products?.map((product) => {
        return <ProductCard key={product.id} {...product} />;
      })}
    </div>
  );
};

export default ProductList;
