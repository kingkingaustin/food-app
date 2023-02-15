import React from 'react'
import { data} from '../data/data.js'
import { useState } from 'react'

const Food = () => {
  //console.log(data)
  const [food, setFood] = useState(data)
  // Filter Foos 
  const filterType = (category) => {
    setFood(
      data.filter((items)=>{
        return items.category === category;
      })
    );
  };
  //filter by Price
  const filterPrice = (price) => {
    setFood (
      data.filter((items)=> {
        return items.price === (price);
      })
    );
  };
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>Our Top Rated Menu Items</h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Filter Type */}
        <div>
          <p className='font-bold text-gray-700 '>Filter Type</p>
          <div className='flex justify-between flex-wrap'>
            <button onClick={() => setFood(data)} className='font-bold m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-300'>All</button>
            <button onClick={() => filterType('burger')} className='font-bold m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-300'>Burger</button>
            <button onClick={() => filterType('pizza')} className='font-bold m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-300'>Pizza</button>
            <button onClick={() => filterType('salad')} className='font-bold m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-300'>Salad</button>
            <button onClick={() => filterType('chicken')} className='font-bold m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-300'>Chicken</button>
            <button onClick={() => filterType('Ice Cream')} className='font-bold m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-300'>Ice Cream</button>
            <button onClick={() => filterType('Shakes')} className='font-bold m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-300'>Shakes</button>
            <button onClick={() => filterType('Pasta')} className='font-bold m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-300'>Pasta</button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
           <p className='font-bold text-gray-700 '>Filter Price</p>
           <div className='flex justify-between max-w-[390px] w-full'>
            <button onClick={() => filterPrice('$')} className='font-bold m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-300'>$</button>
            <button onClick={() => filterPrice('$$')} className='font-bold m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-300'>$$</button>
            <button onClick={() => filterPrice('$$$')} className='font-bold m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-300'>$$$</button>
            <button onClick={() => filterPrice('$$$$')} className='font-bold m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-300'>$$$$</button>
           </div>
        </div>
      </div>

      {/* Food Display */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {food.map((items, index)=>(
          <div key={index} className='shadow-xl rounded-lg hover:scale-105 duration-300'>
            <img src= {items.image} alt= {items.name} className='w-full h-[200px] object-cover rounded-t-lg'/>
            <div className='flex justify-between px-2 py-4 cursor-pointer'>
              <p className='font-bold'>{items.name}</p>
              <p>
                <span className='bg-orange-600 hover:bg-white hover:text-orange-600 duration-300 text-white p-1 rounded-full'>{items.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Food