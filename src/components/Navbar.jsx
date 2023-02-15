import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaSearch ,FaWallet,FaUserFriends} from 'react-icons/fa'
import {BsFillCartFill,BsFillSaveFill} from 'react-icons/bs'
import {AiOutlineClose,AiTwotoneTags} from 'react-icons/ai'
import {TbTruckDelivery} from 'react-icons/tb'
import {MdFavorite,MdHelp} from 'react-icons/md'
import { useState } from 'react'


const Navbar = () => {
    const [nav, setNav] = useState(false)

    const menus = [
        {
            id:1,
            title: 'Order',
            icon: <TbTruckDelivery size={25} className='mr-4'/>
        },
        {
            id:2,
            title: 'Favorites',
            icon: <MdFavorite size={25} className='mr-4'/>
        },
        {
            id:3,
            title: 'Walet',
            icon: <FaWallet size={25} className='mr-4'/>
        },
        {
            id:4,
            title: 'Help',
            icon: <MdHelp size={25} className='mr-4'/>
        },
        {
            id:5,
            title: 'Promotions',
            icon: <AiTwotoneTags size={25} className='mr-4'/>
        },
        {
            id:6,
            title: 'Best Ones',
            icon: <BsFillSaveFill size={25} className='mr-4'/>
        },
        {
            id:7,
            title: 'Invite Friends ',
            icon: <FaUserFriends size={25} className='mr-4'/>
        },
    ]
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        {/* left side */}
        <div className='flex items-center'>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
            <GiHamburgerMenu size={30}/> 
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
        KING'S <span className='font-bold'>DINER</span>
        </h1>
        <div className='hidden lg:flex items-center bg-gray-300 rounded-full p-1 text-[14px]'>
            <p className='bg-black text-white rounded-full p-2'>Dedlivery</p>
            <p className='p-2'>Pickup</p>
        </div>
        </div>
        {/* Search Bar */}
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <FaSearch className='cursor-pointer' size={25}/>
            <input className='bg-transparent p-2 w-full focus:outline-none' type='text' placeholder='Search Food'/>
        </div>
        {/* Cart Button */}
        <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
            <BsFillCartFill size={20} className='mr-2' />Cart
        </button>
        {/* Mobile Menu */}
        {/* Overlay */}
        {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0  duration-300' ></div> : ''}
        
        {/* Side Draw Menu */}
        <div className={nav ?'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-500 ' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-1000'}     >
            <AiOutlineClose onClick={()=> setNav(!nav)} size={30} className='absolute right-4 top-4 cursor-pointer '/>
            <h2 onClick={()=> setNav(!nav)} className='text-2xl p-4 cursor-pointer'>
                KING'S <span className='font-bold'>DINER</span>
            </h2>
            <nav>
                <ul className='flex flex-col p-4 text-gray-800'>
                {menus.map(({id,title,icon})=>(
                    <li key={id} className='text-xl py-4 flex cursor-pointer hover:bg-gray-200 rounded-xl hover:duration-100'>
                    {icon} 
                    {title}
                   </li>
                ))}
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar