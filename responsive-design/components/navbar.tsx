"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "About",
            href: "/about",
        },
        {
            label: "Contact",
            href: "/contact",
        },
    ]

    return (
        <div className="relative">
            <div className='flex relative justify-between items-center max-w-4xl mx-auto mt-4 p-4 bg-white md:shadow-acc rounded-full border border-neutral-200'>
                <Image src="/next.svg" alt="logo" width={50} height={50} className="rounded-full" />
                <div className="hidden md:flex items-center gap-4 text-sm text-neutral-500 mr-10 cursor-pointer">
                    {navItems.map((items, index) => (
                        <Link className="hover:text-neutral-900" href={items.href} key={index}>
                            {items.label}
                        </Link>
                    ))}
                </div>
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                    click
                </button>
                {isOpen && (
                    <div className="absolute inset-x-0 rounded-md shadow-acc bg-white top-15 max-w-[95%] mx-auto">
                        <div className="flex md:hidden flex-col items-start gap-4 p-4 text-sm text-neutral-500">
                            {navItems.map((items, index) => (
                                <Link className="hover:text-neutral-900" href={items.href} key={index}>
                                    {items.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}