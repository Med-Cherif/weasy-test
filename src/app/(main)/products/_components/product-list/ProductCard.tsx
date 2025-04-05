import { Product } from "@/apis/product/product-types";
import Button from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import pathnames from "@/constants/pathnames";
import Link from "next/link";
import React from "react";
import { LuEye, LuPen, LuTrash } from "react-icons/lu";
import ProductForm from "../product-form/ProductForm";
import { useDisclosure } from "@/hooks/use-disclosure";
import EditProduct from "../edit-product/EditProduct";
import AlertDialogDelete from "@/components/ui/alert-dialog/AlertDialogDelete";
import { useDeleteProductMutation } from "@/apis/product/product-apis";

const iconClassName = "hidden sm:inline-block";

type ProductCardProps = Product;

const ProductCard = (props: ProductCardProps) => {
  const { title, image, price, category, id } = props;

  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    setIsOpen: setIsEditOpen,
  } = useDisclosure();

  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    setIsOpen: setIsDeleteOpen,
  } = useDisclosure();

  const deleteMutation = useDeleteProductMutation();

  const actionTextContent = (text: string) => <span className="">{text}</span>;

  return (
    <Card className="rounded-md flex flex-col">
      <div className="h-44 p-3">
        <img className="w-full h-full object-contain" src={image} alt={title} />
      </div>
      <div className="p-4 space-y-2 flex-1">
        <h2 className="font-medium text-sm">{title}</h2>
        <p className="text-muted-foreground text-sm">{category}</p>
        <p className="font-semibold text-lg">${price}</p>
      </div>
      <div className="flex justify-between gap-2 mt-2 items-end border-t border-input py-2 px-4 text-xs">
        <Button variant={"link"} asChild>
          <Link href={pathnames.PRODUCT_DETAILS(id)}>
            <LuEye className={iconClassName} /> {actionTextContent("View")}
          </Link>
        </Button>
        <>
          <EditProduct
            isOpen={isEditOpen}
            setIsOpen={setIsEditOpen}
            data={props}
          />
          <Button variant={"link"} color={"success"} onClick={onEditOpen}>
            <LuPen className={iconClassName} />
            {actionTextContent("Edit")}
          </Button>
        </>

        <>
          <Button variant={"link"} color={"destructive"} onClick={onDeleteOpen}>
            <LuTrash className={iconClassName} />
            {actionTextContent("Delete")}
          </Button>
          <AlertDialogDelete
            isOpen={isDeleteOpen}
            setIsOpen={setIsDeleteOpen}
            handleSubmit={() =>
              deleteMutation.mutate(id, {
                onSuccess() {
                  setIsDeleteOpen(false);
                },
              })
            }
            isPending={deleteMutation.isPending}
          />
        </>
      </div>
    </Card>
  );
};

export default ProductCard;
