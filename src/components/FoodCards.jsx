import React from 'react'


const FoodCards = () => {

const titlecards = [
  {
    id:1,
    title:'weekend Specal Pancake',
    time:' Weekend 10% Off',
    title2:'Order Now',
    src:'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id:2,
    title:'Biryani',
    time:'Weekend 20% Off',
    title2:'Order Now',
    src:'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id:3,
    title:' The Bob Burger',
    time:'Fun Friday 50% Off',
    title2:'Order Now',
    src:'https://images.pexels.com/photos/2454533/pexels-photo-2454533.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
]


  return (
    <div className='max-w-[1604px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Cards */}
        { titlecards.map(({id,title,time,title2,src})=>(
              <div className='relative rounded-xl'>
              {/* Overlay */}
              <div key={id} className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                  <p className='font-bold text-2xl px-2 pt-4'>{title}</p>
                  <p className='px-2 text-xl'>{time}</p>
                  <button className='border-black bg-black font-bold text-white mx-2 hover:bg-transparent duration-300 absolute bottom-4'>{title2}</button>
              </div>
              <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={src}  alt='/'/>
          </div>
              ))}
    </div>
  )
}

export default FoodCards