"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { routes } from "@/common/routes";
import { Container } from "../container";
import logo from "@/assets/images/logo_white.svg";
import Image from "next/image";
import { HamburgerIcon } from "@/assets/icons/hamburger-icon";
import { MobileNavbar } from "./mobile-navbar";
import { useCallback, useState } from "react";

export const Header = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [modalStatus, setModalStatus] = useState(false);

    const handleModalClose = useCallback(() => {
        setModalStatus(false);
    }, []);

    return (
        <header className='relative top-0 left-0  z-50 w-full bg-[#111111] text-gray-100 py-2 '>
            <Container>
                <div className='flex md:justify-between justify-center items-center'>
                    <div className='md:hidden absolute left-4 '>
                        <button
                            className='cursor-pointer'
                            onClick={() => setModalStatus(true)}>
                            <HamburgerIcon scale={0.8} />
                        </button>
                    </div>
                    <div className='flex- md:flex-initial  flex md:block justify-center items-center '>
                        <Link href='/'>
                            <Image
                                src={logo}
                                alt='Omoyeni'
                                className='h-12 md:h-fit'
                            />
                        </Link>
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
                        <button
                            className='text-sm px-8 py-3 border rounded border-white border-opacity-50 font-medium transition duration-200 hover:bg-white hover:text-[#111111]'
                            onClick={() => router.push("/cart")}>
                            Contact
                        </button>
                    </div>
                </div>
            </Container>
            <MobileNavbar handleClose={handleModalClose} status={modalStatus} />
        </header>
    );
};
