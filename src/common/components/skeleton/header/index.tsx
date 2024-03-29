"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "@/common/routes";
import { Container } from "../container";
import logo from "@/assets/images/white_logo.png";
import Image from "next/image";

export const Header = () => {
    const pathname = usePathname();

    return (
        <header className='bg-[#111111] text-gray-100 py-2 '>
            <Container>
                <div className='flex justify-between items-center'>
                    <div className=''>
                        <Image src={logo} alt='Omoyeni' className='h-16' />
                    </div>
                    <nav>
                        <ul className='flex items-center gap-x-[3.75rem] text-sm'>
                            {routes
                                .filter((route) => route.path !== "/contact")
                                .map((route) => (
                                    <li key={route.id}>
                                        <Link
                                            href={route.path}
                                            className={` underline-offset-4 hover:underline ${pathname === route.path ? "underline" : null}`}>
                                            {route.title}
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    </nav>
                    <div className=''>
                        <button className='text-sm px-8 py-3 border rounded border-white border-opacity-50 font-bold'>
                            Contact
                        </button>
                    </div>
                </div>
            </Container>
        </header>
    );
};
