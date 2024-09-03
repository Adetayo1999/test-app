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
import { useCartStore } from "@/store/cart";

export const Header = () => {
    const { cart } = useCartStore();
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
                    <div className='hidden md:flex gap-x-8 items-center '>
                        <button
                            className='text-sm px-8 py-3 border rounded border-white border-opacity-50 font-medium transition duration-200 hover:bg-white hover:text-[#111111]'
                            onClick={() => router.push("/contact")}>
                            Contact
                        </button>
                        <button
                            onClick={() => router.push("/cart")}
                            className='relative'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth='1.5'
                                stroke='currentColor'
                                className='size-6'>
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
                                />
                            </svg>
                            {cart.length ? (
                                <span className='h-[0.8rem] animate-pulse absolute w-[0.8rem] bg-red-600 rounded-full -top-1 -right-1' />
                            ) : null}
                        </button>
                    </div>
                </div>
            </Container>
            <MobileNavbar handleClose={handleModalClose} status={modalStatus} />
        </header>
    );
};
