import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Image Section */}
      <div className="relative flex h-72 items-center justify-center bg-gray-100 p-6">
        
        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold capitalize text-purple-600">
          {product.category}
        </span>

        {/* Wishlist */}
        <button className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm transition hover:bg-red-50 hover:text-red-500">
          ♡
        </button>

        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition duration-300 "
        />
      </div>

      {/* Product Details */}
      <div className="p-5">

        {/* Title */}
        <h2 className="line-clamp-2 min-h-[56px] text-lg font-bold text-gray-900">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-yellow-400">★</span>

          <span className="font-semibold text-gray-800">
            {product.rating.rate}
          </span>

          <span className="text-sm text-gray-500">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Description */}
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
          {product.description}
        </p>

        {/* Price + Button */}
        <div className="mt-5 flex items-center justify-between gap-3">

          <div>
            <p className="text-xs text-gray-400">Price</p>

            <p className="text-2xl font-bold text-purple-600">
              ${product.price}
            </p>
          </div>

          <button className="rounded-xl bg-purple-600 px-5 py-3 font-semibold text-white transition hover:bg-purple-700 active:scale-95">
            🛒 Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;