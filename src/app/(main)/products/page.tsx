import React from "react";
import ProductsPageContent from "./_components/ProductsPageContent";
import withAuth from "@/components/guards/withAuth";

const ProductsPage = () => {
  return <ProductsPageContent />;
};

export default withAuth(ProductsPage);
