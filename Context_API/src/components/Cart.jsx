import React, { useContext } from "react";
import { MyStore } from "../context/MyWebsite";

const Cart = () => {

   let{cartItems}= useContext(MyStore)
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="mx-auto max-w-5xl">
        
        <h1 className="mb-8 text-3xl font-bold text-gray-900">
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800">
              Your cart is empty
            </h2>

            <p className="mt-2 text-gray-500">
              Add some products to your cart.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-5 rounded-2xl bg-white p-5 shadow-sm"
              >
                
                {/* Product Image */}
                <div className="h-24 w-24 flex-shrink- rounded-xl bg-gray-50 p-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1">
                  <h2 className="line-clamp-2 font-semibold text-gray-900">
                    {item.title}
                  </h2>

                  <p className="mt-2 text-lg font-bold text-gray-900">
                    ${item.price}
                  </p>
                </div>

                {/* Remove Button */}
                <button className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600">
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default Cart;