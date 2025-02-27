import React from 'react'
import { DashCustomFormInput } from '../input/Input'
import Link from 'next/link';
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";




const Navbar = () => {
  return (
    <div className='flex justify-between text-white p-4 items-center bg-[#FBF9F9]'>
      <div className='text-black'>
        <h6 className='text-black flex gap-[5px] items-center'>Settings   <FaAngleRight />
          <Link className='text-DeepBlue' href="/">Company</Link>
        </h6>
      </div>
      <div className='text-black w-2/5'>
        <DashCustomFormInput icon={CiSearch  } className={'bg-white  outline-0'} placeholder={'Search here ...'}/>
      </div>
      <div className='text-black'>
        <IoMdNotificationsOutline size={24}/>
      </div>
    </div>
  )
}

export default Navbar
