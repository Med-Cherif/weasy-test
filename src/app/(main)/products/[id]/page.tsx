import React from "react";
import ProductDetailsPageContent from "./_components/ProductDetailsPageContent";
import withAuth from "@/components/guards/withAuth";

const ProductDetails = () => {
  return <ProductDetailsPageContent />;
};

export default withAuth(ProductDetails);
