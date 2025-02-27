import Navbar from '@/components/navbar/Navbar'
import Sidebar from '@/components/sidebar/Sidebar'
import React from 'react'

const page = () => {
    return (
        <div className='w-full flex h-[100vh] bg-[#D0D7DB]'>
            <div className="">
                <Sidebar />
            </div>
            <div className='w-full'>
                <Navbar />
            </div>

        </div>
    )
}

export default page
