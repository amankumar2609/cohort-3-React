import React, { useState } from 'react'

const Counter = () => {

  let [count, setCount] = useState(0)
 
 console.log(count);
 

  return (
    <div>
      <h1 className='text-xl '>Count is - {count}</h1>
      <button onClick={()=>{ 
        setCount ((prev)=> prev +1);
    setCount ((prev)=> prev +1);
setCount ((prev)=> prev +1);}}
        
        className='py-2 px-4 bg-red-600 cursor-pointer'>Increase </button>
    </div>
  )
}

export default Counter
