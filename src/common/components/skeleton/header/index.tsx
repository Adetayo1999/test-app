"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "@/common/routes";
import { Container } from "../container";
import logo from "@/assets/images/white_logo.png";
import Image from "next/image";
import { HamburgerIcon } from "@/assets/icons/hamburger-icon";
import { MobileNavbar } from "./mobile-navbar";
import { useCallback, useState } from "react";

export const Header = () => {
    const pathname = usePathname();
    const [modalStatus, setModalStatus] = useState(false);

    const handleModalClose = useCallback(() => {
        setModalStatus(false);
    }, []);

    return (
        <header className='relative z-50 w-full bg-[#111111] text-gray-100 py-2 '>
            <Container>
                <div className='flex justify-between items-center'>
                    <div className='md:hidden'>
                        <button
                            className='cursor-pointer'
                            onClick={() => setModalStatus(true)}>
                            <HamburgerIcon scale={0.8} />
                        </button>
                    </div>
                    <div className='flex-1 md:flex-initial  flex md:block justify-center items-center '>
                        <Image
                            src={logo}
                            alt='Omoyeni'
                            className=' h-12 md:h-16'
                        />
                    </div>
                    <nav className='hidden md:block'>
                        <ul className='flex items-center gap-x-[3.75rem] text-sm'>
                            {routes
                                .filter((route) => route.path !== "/contact")
                                .map((route) => (
                                    <li key={route.id}>
                                        <Link
                                            href={route.path}
                                            className={`font-medium underline-offset-4 hover:underline ${pathname === route.path ? "underline" : null}`}>
                                            {route.title}
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    </nav>
                    <div className='hidden md:block'>
                        <button className='text-sm px-8 py-3 border rounded border-white border-opacity-50 font-medium transition duration-200 hover:bg-white hover:text-[#111111]'>
                            Contact
                        </button>
                    </div>
                </div>
            </Container>
            <MobileNavbar handleClose={handleModalClose} status={modalStatus} />
        </header>
    );
};
