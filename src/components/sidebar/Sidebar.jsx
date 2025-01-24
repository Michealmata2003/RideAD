import React from 'react';
import logo from '../../assets/Logo.svg';
import Image from "next/image";
import Link from 'next/link';


const Sidebar = () => {
    return (
        <div>
            <div>
                <div className="  m-auto align-center justify-center pb-4"
                >
                    <Image
                        src={logo}
                        alt="Logo"
                        width={180}
                        height={38}
                    />
                </div>
                <div>
                    <nav>
                    <Link href="/">Home</Link>
                    <Link href="/">Home</Link>
                    <Link href="/">Home</Link>
                    <Link href="/">Home</Link>


                    </nav>

                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Sidebar