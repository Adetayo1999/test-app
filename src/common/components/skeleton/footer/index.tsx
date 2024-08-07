import Image from "next/image";
import { Container } from "../container";
import logo from "@/assets/images/logo_white.svg";
import { routes } from "@/common/routes";
import Link from "next/link";
import {
    InstagramIcon,
    MailIcon,
    PinterestIcon,
    XIcon,
} from "../../../../assets/icons";

export const Footer = () => {
    return (
        <footer className='bg-black text-gray-100'>
            <Container>
                <div className='pt-[4rem] pb-[3rem] '>
                    <div className='flex flex-col-reverse md:flex-row justify-between pb-[4rem] border-b border-white border-opacity-50 gap-y-10 md:gap-y-0 '>
                        <div className='flex flex-col justify-center items-center md:block'>
                            <div className='mb-4 md:mb-8'>
                                <Image
                                    src={logo}
                                    alt='Omoyeni'
                                    className='h-14 md:h-fit'
                                />
                            </div>
                            <div className=''>
                                <ul className='flex text-center md:text-left flex-col md:flex-row gap-y-4 md:gap-y-0 text-sm gap-x-8'>
                                    {routes
                                        .filter(
                                            (route) =>
                                                !["/"].includes(route.path),
                                        )
                                        .map((route) => (
                                            <li key={route.id}>
                                                <Link href={route.path}>
                                                    {route.title}
                                                </Link>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                        <div className=''>
                            <h5 className='text-sm mb-3'>
                                Sign up with your email address to receive news
                                and updates
                            </h5>
                            <form className='flex flex-col gap-y-2 md:gap-y-0 md:flex-row gap-x-3 items-center'>
                                <input
                                    type='email'
                                    name='email'
                                    placeholder='Enter your email'
                                    className='md:flex-[0.7] px-2 py-2 text-sm w-full md:w-fit '
                                />
                                <button className='w-full md:w-fit md:flex-[0.3] text-sm py-2 border border-white border-opacity-50 rounded font-medium transition duration-300 hover:bg-gray-50 hover:text-[#111] '>
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className='mt-8 flex-col-reverse md:flex-row flex justify-between items-center gap-y-4 md:gap-y-0 '>
                        <p className='text-gray-300 text-sm'>
                            &copy; {new Date().getFullYear()}. All rights
                            reserved.
                        </p>
                        <div className=''>
                            <ul className='flex gap-x-6 items-center text-sm'>
                                {["Terms", "Privacy", "Cookies"].map(
                                    (route) => (
                                        <li key={route}>
                                            <Link href='#'>{route}</Link>
                                        </li>
                                    ),
                                )}
                            </ul>
                        </div>
                        <div className=''>
                            <ul className='flex gap-x-6 items-center'>
                                {[
                                    MailIcon,
                                    InstagramIcon,
                                    XIcon,
                                    PinterestIcon,
                                ].map((Icon, idx) => (
                                    <li key={idx}>
                                        <Link href='#'>
                                            <Icon scale={0.9} />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
