"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
//========== Import Icons
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
//========== Import Images
import logo from 'media/icons/logo.png'

const Header = () => {
    const [isFixed, setIsFixed] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // ========= Header Fixed
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    // ========= Mobile Menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (

        <header className={`w-full z-[999] rounded-none h-[80px] flex items-center ${isFixed ? 'fixed top-[2%] left-0 w-full duration-1000 ease-in-out' : 'absolute top-[2%] duration-1000 ease-in-out'}`}>
            <div className="container h-full flex items-center">
                <nav className="w-full h-full grid grid-cols-3 items-center mx-auto bg-primary px-8 rounded-xl">
                    <div className="bg-[#354F52] flex lg:hidden items-center justify-center p-2 rounded-md w-[40%] lg:w-[14%] h-[40px]">
                        {isMenuOpen ? (
                            <FaTimes className="text-white text-[20px] cursor-pointer" onClick={toggleMenu} />
                        ) : (
                            <FaBars className="text-white text-[20px] cursor-pointer" onClick={toggleMenu} />
                        )}
                    </div>
                    <div className="lg:flex items-center gap-20 h-full">
                        <div className={`w-[85%] md:w-[80%] lg:w-auto h-[100vh] lg:h-full flex items-center fixed top-0 z-50 lg:static bg-[#484848] lg:bg-transparent ${isMenuOpen ? 'left-0 duration-700 ease-in-out' : 'left-[-100%] duration-700 ease-in-out'}`}>
                            <ul className="w-full h-full flex lg:items-center flex-col lg:flex-row lg:gap-10 xl:gap-14 space-y-10 lg:space-y-0 p-5 lg:p-0 relative">
                                <li className="lg:h-full flex lg:items-center">
                                    <Link href="/" className="lg:h-full flex lg:items-center text-[13px] xl:text-[16px] font-medium font-montserrat text-white" onClick={toggleMenu}>How it Works</Link>
                                </li>
                                <li className="lg:h-full flex lg:items-center">
                                    <Link href="/about-us" className="lg:h-full flex lg:items-center text-[13px] xl:text-[16px] font-medium font-montserrat text-white" onClick={toggleMenu}>Pricing</Link>
                                </li>
                                <li className="lg:h-full flex lg:items-center">
                                    <Link href="/contact-us" className="lg:h-full flex lg:items-center text-[13px] xl:text-[16px] font-medium font-montserrat text-white" onClick={toggleMenu}>Bloodwork</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full lg:w-auto h-full flex flex-wrap items-center justify-center">
                        <Link href="/" className="h-full flex items-center text-[24px] font-bold font-montserrat cursor-pointer lg:w-[160px] xl:w-[180px] lg:ml-2">
                            <Image src={logo} alt="Logo" />
                        </Link>
                    </div>
                    <div className="flex justify-end items-center gap-2 h-[full]">
                        <div className="bg-[#354F52] hidden lg:flex items-center ps-6 p-2 rounded-md w-full h-[40px]">
                            <Link href="/" className="flex items-center text-[16px] font-medium font-montserrat text-white">Login</Link>
                        </div>
                        <div className="bg-[#354F52] flex items-center justify-center p-2 rounded-md w-[40%] lg:w-[14%] h-[40px]">
                            <FaUserCircle className="text-white text-[20px] cursor-pointer" />
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
export default Header;



