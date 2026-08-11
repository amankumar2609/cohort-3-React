import { useContext } from "react";
import { MyStore } from "../context/MyWebsite";

const ProductCard = ({ product }) => {

   let{setCartItems}= useContext(MyStore)
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Product Image */}
      <div className="relative flex h-64 items-center justify-center bg-gray-50 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-black px-3 py-1 text-xs font-medium capitalize text-white">
          {product.category}
        </span>
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col p-5">

        {/* Title */}
        <h2 className="mb-2 line-clamp-2 text-lg font-semibold text-gray-900">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="mb-3 flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">★</span>
            <span className="text-sm font-medium text-gray-700">
              {product.rating.rate}
            </span>
          </div>

          <span className="text-sm text-gray-400">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Description */}
        <p className="mb-5 line-clamp-3 text-sm leading-6 text-gray-500">
          {product.description}
        </p>

        {/* Price + Button */}
        <div className="mt-auto flex items-center justify-between gap-4">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price}
          </span>

          <button onClick={()=>{
            setCartItems(prev=>[...prev, product])
          }}
            className="rounded-xl bg-black px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800 active:scale-95"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;