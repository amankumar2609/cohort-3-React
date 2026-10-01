import { useState } from "react";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div
      className="
        group w-full overflow-hidden rounded-2xl
        border border-zinc-800 bg-zinc-950 p-4 text-white
        shadow-lg shadow-black/40
        transition-all duration-300
        hover:-translate-y-1 hover:border-zinc-700
        hover:shadow-2xl
      "
    >
      {/* Image */}
      <div className="flex h-64 items-center justify-center overflow-hidden rounded-xl bg-zinc-900">
        <img
          src={product.images[0]}
          alt={product.title}
          className="
            h-full w-full object-contain p-6
            transition-transform duration-300
            group-hover:scale-105
          "
        />
      </div>

      {/* Title */}
      <h2 className="mt-4 truncate text-lg font-semibold text-white">
        {product.title}
      </h2>

      {/* Price */}
      <p className="mt-2 text-2xl font-bold text-white">
        ${product.price}
      </p>

      {/* Quantity */}
      <div className="mt-4 flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3">
        <span className="text-sm text-zinc-400">
          Quantity
        </span>

        <div className="flex items-center gap-3">
          <button
            onClick={() =>
              setQuantity((q) => Math.max(1, q - 1))
            }
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-800 text-lg text-zinc-300 transition hover:bg-zinc-700"
          >
            −
          </button>

          <span className="w-5 text-center font-medium">
            {quantity}
          </span>

          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-800 text-lg text-zinc-300 transition hover:bg-zinc-700"
          >
            +
          </button>
        </div>
      </div>

      {/* Add to Cart */}
      <button
        onClick={() =>
          console.log("Added to cart:", {
            id: product.id,
            quantity,
          })
        }
        className="
          mt-4 w-full rounded-xl bg-gray-800 cursor-pointer py-3
          font-semibold text-white
          transition-all duration-200
          hover:bg-gray-700
          active:scale-95
        "
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
