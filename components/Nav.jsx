"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";


const Nav = () => {
    return (
        <nav className='flex-between w-full mb-16 pt-3'>
            <Link href='/' className='flex gap-2 flex-center'>
                <Image
                    src='/assets/images/logo.svg'
                    alt='logo'
                    width={30}
                    height={30}
                    className='object-contain'
                />
                <p className='logo_text'>พร้อม AI</p>
            </Link>

            {/* Desktop Navigation */}
            <div className='sm:flex hidden'>

                <div className='flex gap-3 md:gap-5'>
                    <Link href='/create-prompt' className='black_btn'>
                        สร้างพร้อม
                    </Link>
                    <Link href='/' className='black_btn'>
                        เข้าสู่ระบบ
                    </Link>
                </div>
            </div>

            
        </nav>
    );
};

export default Nav;
