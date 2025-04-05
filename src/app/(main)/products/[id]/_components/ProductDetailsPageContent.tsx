"use client";
import {
  useDeleteProductMutation,
  useGetProductByIdQuery,
} from "@/apis/product/product-apis";
import ProductRating from "@/components/products/ProductRating";
import Button from "@/components/ui/Button";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { LuPen, LuStar, LuTrash } from "react-icons/lu";
import EditProduct from "../../_components/edit-product/EditProduct";
import Spinner from "@/components/common/Spinner";
import { useDisclosure } from "@/hooks/use-disclosure";
import AlertDialogDelete from "@/components/ui/alert-dialog/AlertDialogDelete";
import pathnames from "@/constants/pathnames";
import PageTitle from "@/components/common/PageTitle";
import ProductDetailsBreadcrumb from "./ProductDetailsBreadcrumb";

const ProductDetailsPageContent = () => {
  const params = useParams();

  const router = useRouter();

  const editDisclosure = useDisclosure();
  const deleteDisclosure = useDisclosure();

  const deleteMutation = useDeleteProductMutation();

  const { isFetching, data } = useGetProductByIdQuery(params.id as string);

  if (isFetching) {
    return <Spinner />;
  }

  if (!data) return null;

  const { title, description, image, category, price, rating } = data;

  return (
    <div>
      <div className="mb-4">
        <ProductDetailsBreadcrumb />
        {/* <PageTitle className="mb-0">Product Details</PageTitle> */}
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-[280px]">
          <img src={image} alt={title} />
        </div>
        <div className="space-y-4 flex-1">
          <div className="space-y-2">
            <div className="space-y-1">
              <h2 className="font-medium text-2xl">{title}</h2>
              <p className="text-muted-foreground">{category}</p>
            </div>
            <ProductRating {...rating} />
          </div>
          <p className="font-semibold text-3xl">${price}</p>
          <p className="text-base">{description}</p>

          <div className="grid grid-cols-2 gap-4">
            <>
              <Button color={"success"} onClick={() => editDisclosure.onOpen()}>
                <LuPen /> Edit
              </Button>
              <EditProduct
                data={data}
                isOpen={editDisclosure.isOpen}
                setIsOpen={editDisclosure.setIsOpen}
              />
            </>

            <>
              <Button
                color={"destructive"}
                onClick={() => deleteDisclosure.onOpen()}
              >
                <LuTrash /> Delete
              </Button>
              <AlertDialogDelete
                isOpen={deleteDisclosure.isOpen}
                setIsOpen={deleteDisclosure.setIsOpen}
                isPending={deleteMutation.isPending}
                handleSubmit={() =>
                  deleteMutation.mutate(data.id, {
                    onSuccess() {
                      router.replace(pathnames.PRODUCTS);
                    },
                  })
                }
              />
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPageContent;
