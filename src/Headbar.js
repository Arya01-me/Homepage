import { BookOpenIcon, Search, User } from 'lucide-react';
import React from 'react';
import './global.css'

function Headbar() {
  return (
    <div className='grid md:grid sm:grid xs:grid lg:flex xl:flex bg-white w-screen  font-bold text-lg p-2'>
      <div className='flex'>
        <BookOpenIcon className='m-5  mr-0 h-8 w-8 text-gray-600' />
      
      <div className='  bg-white rounded-lg font-bold text-2xl text-bllack p-2 m-2 flex-shrink-0 w-full sm:w-auto'>
        COMPANY.COM
      </div>
      </div>
      <div className='grid sm:grid xs:grid lg:flex xl:flex'>
      <div className='xl:ml-28 cursor-pointer transition-all hover:text-pink-500 hover:text-xl hover:ease-in-out duration-500 border border-gray-50 p-2 m-2 ml-12 rounded-xl text-lg text-gray-400 font-sans font-medium flex-shrink-0 w-full sm:w-auto'>
        <h1>Products</h1>
      </div>
      <div className=' xl:ml-28 cursor-pointer transition-all hover:text-pink-500 hover:text-xl hover:ease-in-out duration-500 border border-gray-50 p-2 m-2 ml-12 rounded-xl text-lg text-gray-400 font-sans font-medium flex-shrink-0 w-full sm:w-auto'>
        <h1>Contact Us</h1>
      </div>
      <div className='xl:ml-28 cursor-pointer transition-all hover:text-pink-500 hover:text-xl hover:ease-in-out duration-500 border border-gray-50 p-2 m-2 ml-12 rounded-xl text-lg text-gray-400 font-sans font-medium flex-shrink-0 w-full sm:w-auto'>
        <h1>About</h1>
      </div>
      <div className='xl:ml-28 cursor-pointer transition-all hover:text-pink-500 hover:text-xl hover:ease-in-out duration-500 border border-gray-50 p-2 m-2 ml-12 rounded-xl text-lg text-gray-400 font-sans font-medium flex-shrink-0 w-full sm:w-auto'>
        <h1>Our Project</h1>
        </div>
      </div>
      <div className='xl:ml-36 ml-6 flex sm:flex xs:flex lg:flex xl:flex flex-shrink-0    w-full sm:w-auto items-center justify-center'>
        <Search className='text-gray-600 m-2 hover:ease-in-out cursor-pointer h-7 w-7 hover:h-8 hover:w-8 transition-all ml-12  duration-300 hover:text-pink-500' />
      
        <User className='text-gray-600 m-2 hover:ease-in-out cursor-pointer h-7 w-7 hover:h-8 hover:w-8 transition-all ml-12 duration-300 hover:text-pink-500' />
      </div>
    </div>
  );
}

export default Headbar;
