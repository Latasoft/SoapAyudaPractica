"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import soapayuda from 'public/soapayuda .png';

const navItems = [
    { linkText: 'Inicio', href: '/' },
    { linkText: '¿Quiénes somos?', href: '/#quienesomos' },
    { linkText: 'Ayuda Social', href: '/#ayudasocial' },
    { linkText: 'Tu aporte SOAP', href: '/#tuaporte' },
    { linkText: 'Contacto', href: '/#contacto' }
];

const Navbar = () => {

    const [navBarScrollChange, setNavBarScrollChange] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const theHeight = 146;
            setNavBarScrollChange(window.scrollY >= theHeight); };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav id={navBarScrollChange ? 'navBarB' : undefined} className={`z-30  fixed top-4 left-1/2 -translate-x-1/2 flex items-start justify-start max-w-screen-lg w-full bg-transparent pointer-events-none `} >

            <div className={` pointer-events-auto inline-flex  gap-6 max-w-screen-lg items-center justify-center shadow-lg shadow-[rgba(0,0,0,0.3)] ${navBarScrollChange ? 'bg-[linear-gradient(180deg,#254983,#1A385D,#0E2032)] opacity-80 hover:opacity-100 ml-4 lg:ml-0 p-6 flex-col' : 'bg-white bg-opacity-90 opacity-100 mx-auto py-4 px-8 sm:px-4 md:px-6 lg:px-8 flex-row'} rounded-xl transition-all duration-300 ease-in-out`}>
                <div className={` inline-block text-center mx-auto ${navBarScrollChange ? 'w-20 md:w-28' : 'w-44 sm:w-16 md:w-28 lg:w-44'}`}>
                    { ( !navBarScrollChange ) ? (
                        <Link href='/' ><img src={soapayuda.src} alt="SOAP Ayuda" className={` h-auto w-auto mx-auto `} /></Link>)
                         : (<img src={soapayuda.src} alt="SOAP Ayuda" className={` h-auto w-auto mx-auto `} />) }
                    
                </div>
                {!!navItems?.length && (
                    <p className={` ${navBarScrollChange ? 'hidden flex-col' : 'hidden sm:inline-flex sm:flex-row'} relative gap-6`}>
                        {navItems.map((item, index) => (
                            (navBarScrollChange ) ? (
                                <Link key={index} href={item.href} className={` inline-flex text-left justify-start items-center whitespace-nowrap text-sm md:text-base lg:text-lg font-bold no-underline hover:underline transition-all duration-300 ease-in-out ${navBarScrollChange ? 'text-[#22beeb] hover:text-[#a4ebff]' : 'text-[#1e5db2] hover:text-[#22beeb]'} `}>{item.linkText}</Link>
                            ) :
                                (index != 0 && (
                                    <Link key={index} href={item.href} className={` inline-flex text-left justify-start items-center whitespace-nowrap text-sm md:text-base lg:text-lg font-bold no-underline hover:underline transition-all duration-300 ease-in-out ${navBarScrollChange ? 'text-[#22beeb] hover:text-[#a4ebff]' : 'text-[#1e5db2] hover:text-[#22beeb]'} `}>{item.linkText}</Link>
                                ))
                        ))}
                    </p>
                )}
            </div>
        </nav>
    );
};

export default Navbar;