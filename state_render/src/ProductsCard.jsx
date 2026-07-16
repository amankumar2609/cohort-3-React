import React from 'react'

const ProductsCard = ({product , del}) => {



 

  return (
    <div className='p-2 border-2 flex flex-col gap-2 rounded justify-between bg-gray-500'>
      <div className='w-40 '>
        <img src= {product.image} alt="" />
      </div>
      <div className='flex flex-col gap-1'>
        <h1 className='font-bold text-xl'>{product.title.substring(0, 20)}</h1>
        <p className='text-green-300'>${product.price}</p>
        <p>{product.description.substring(0, 20)}</p>
      </div>
      <button onClick={() => del(product.id)} className='bg-red-600 py-2 border-none rounded cursor-pointer'>Delete</button>
    </div>
  )
}

export default ProductsCard
