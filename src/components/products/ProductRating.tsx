import { ProductRating as TProductRating } from "@/apis/product/product-types";
import { cn } from "@/utils/cn";
import React, { useMemo } from "react";
import { LuStar } from "react-icons/lu";

type ProductRatingProps = TProductRating;

const ProductRating = ({ count, rate }: ProductRatingProps) => {
  //   const rate = 2.5;
  const className = useMemo(() => {
    // const colors = [
    //     '#FEE2E2', '#FFEDD5', '#FEF9C3', '#ECFCCB', '#D1FAE5'
    // ]

    if (rate < 2) {
      return "bg-[#da1600]";
    }

    if (rate < 3) {
      return "bg-[#db711a]";
    }

    if (rate < 4) {
      return "bg-[#61bb00]";
    }

    return "bg-[#009664]";
  }, [rate]);

  return (
    <div className="flex items-center gap-2">
      <span
        className={cn(
          "inline-flex items-center gap-1 px-2 py-0.5 text-sm rounded-sm text-white",
          className
        )}
      >
        {rate} <LuStar size={12} />
      </span>
      <span className="">({count} Ratings)</span>
    </div>
  );
};

export default ProductRating;
