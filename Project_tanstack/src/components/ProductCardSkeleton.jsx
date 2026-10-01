import { useState } from "react";

const ProductSkeleton = () => {
  return (
    <div className="w-full max-w-sm animate-pulse overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
      {/* Image Skeleton */}
      <div className="h-64 rounded-xl bg-zinc-900" />

      {/* Price Skeleton */}
      <div className="mt-5 h-7 w-24 rounded-lg bg-zinc-800" />

      {/* Quantity Skeleton */}
      <div className="mt-4 flex h-12 items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900 px-4">
        <div className="h-4 w-16 rounded bg-zinc-800" />

        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-zinc-800" />
          <div className="h-4 w-5 rounded bg-zinc-800" />
          <div className="h-8 w-8 rounded-lg bg-zinc-800" />
        </div>
      </div>

      {/* Button Skeleton */}
      <div className="mt-4 h-12 w-full rounded-xl bg-zinc-800" />
    </div>
  );
};
export default ProductSkeleton;
