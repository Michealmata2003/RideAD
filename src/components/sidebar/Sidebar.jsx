import React from 'react';
import logo from '../../assets/Logo.svg';
import icon from '@/assets/icon.svg';
import Image from "next/image";
import Link from 'next/link';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div>
                <div className="  m-auto align-center justify-center  border-b-2"
                >
                    <Image
                        src={logo}
                        alt="Logo"
                        width={180}
                        height={38}
                    />
                </div>
                <div>
                    <nav className='flex flex-col py-2 justify-between'>
                        <ul className='flex flex-col py-[3rem] gap-[1rem]'>
                            <Link href="/" className='text-white flex gap-[5px] p-2 hover:shadow-md'>
                                <Image
                                    src={icon}
                                    alt="Logo"
                                    width={18}
                                    height={10}
                                />
                                Dashboard</Link>
                            <Link href="/"className='text-white flex gap-[5px] p-2 hover:shadow-md'>
                                <Image
                                    src={icon}
                                    alt="Logo"
                                    width={18}
                                    height={10}
                                />
                                Campaigns</Link>
                           
                            <Link href="/" className='text-white flex gap-[5px] p-2 hover:shadow-md'>
                                <Image
                                    src={icon}
                                    alt="Logo"
                                    width={18}
                                    height={10}
                                />
                                Wallet</Link>
                            <Link href="/" className='text-white flex gap-[5px] p-2 shadow-md'>
                                <Image
                                    src={icon}
                                    alt="Logo"
                                    width={18}
                                    height={10}
                                />
                                Wallet</Link>
                            <Link href="/" className='text-white flex gap-[5px] p-2 hover:shadow-md'>
                                <Image
                                    src={icon}
                                    alt="Logo"
                                    width={18}
                                    height={10}
                                />
                                Wallet</Link>
                        </ul>
                        <ul className='flex flex-col pt-[3rem] text-white gap-2'>
                            <Link href="/">Settings</Link>
                            <Link href="/">Help and Feedback</Link>
                        </ul>
                        <div className='flex py-[3rem] w-full justify-between'>
                            <span></span>
                            <span className='flex flex-col'>
                                <h6>Omotola</h6>
                                <p>micheal@mytruq.com</p>
                            </span>
                            <span></span>
                        </div>

                    </nav>

                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Sidebar