import React from "react";

const Filters = ({ filterProducts }) => {
  return (
    <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-950 p-4 text-white shadow-lg mb-3">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        {/* Search */}
        <div className="flex w-full gap-2 lg:max-w-2xl">
          <input
            onChange={(e) => filterProducts(e.target.value)}
            className="
              w-full rounded-xl
              border border-zinc-800
              bg-zinc-900
              px-4 py-3
              text-sm text-white
              placeholder:text-zinc-500
              outline-none
              transition
              focus:border-yellow-500
              focus:ring-1
              focus:ring-yellow-500
            "
            type="text"
            placeholder="Search products..."
          />

          <button
            className="
              rounded-xl
              bg-yellow-500
              px-5 py-3
              text-sm font-semibold
              text-black
              transition
              hover:bg-yellow-400
              active:scale-95
            "
          >
            Search
          </button>
        </div>

        {/* Category */}
        <div className="flex w-full items-center gap-3 lg:w-auto">
          <span className="whitespace-nowrap text-sm text-zinc-400">
            Category
          </span>

          <select
            className="
              w-full min-w-40
              cursor-pointer
              rounded-xl
              border border-zinc-800
              bg-zinc-900
              px-3 py-3
              text-sm text-white
              outline-none
              transition
              focus:border-yellow-500
              focus:ring-1
              focus:ring-yellow-500
              lg:w-auto
            "
          >
            <option value="all">All Categories</option>
            <option value="groceries">Groceries</option>
            <option value="beauty">Beauty</option>
            <option value="furniture">Furniture</option>
          </select>
        </div>

      </div>
    </div>
  );
};

export default Filters;
