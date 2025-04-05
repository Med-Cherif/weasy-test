import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/Breadcrumb";
import pathnames from "@/constants/pathnames";
import Link from "next/link";
import React from "react";

const ProductDetailsBreadcrumb = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {/* <BreadcrumbItem>
    </BreadcrumbItem> */}
        {/* <BreadcrumbSeparator /> */}
        <BreadcrumbItem>
          <Link href={pathnames.PRODUCTS}>Products</Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Product Details</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default ProductDetailsBreadcrumb;
