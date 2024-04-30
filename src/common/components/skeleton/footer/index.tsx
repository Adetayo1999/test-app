import Image from "next/image";
import { Container } from "../container";
import logo from "@/assets/images/white_logo.png";
import { routes } from "@/common/routes";
import Link from "next/link";
import { InstagramIcon, MailIcon, PinterestIcon, XIcon } from "../../../../assets/icons";

export const Footer = () => {
    return (
        <footer className='bg-black text-gray-100'>
            <Container>
                <div className='pt-[4rem] pb-[3rem] '>
                    <div className='flex justify-between pb-[4rem] border-b border-white border-opacity-50 '>
                        <div className=''>
                            <div className='mb-8'>
                                <Image src={logo} alt='Omoyeni' />
                            </div>
                            <div className=''>
                                <ul className='flex text-sm gap-x-8'>
                                    {routes
                                        .filter(
                                            (route) =>
                                                !["/", "/shop"].includes(
                                                    route.path,
                                                ),
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
                            <h5 className='text-sm mb-2'>
                                Sign up with your email address to receive news
                                and updates
                            </h5>
                            <form className='flex gap-x-3 items-center'>
                                <input
                                    type='email'
                                    name='email'
                                    placeholder='Enter your email'
                                    className='flex-[0.7] px-2 py-2 text-sm '
                                />
                                <button className='flex-[0.3] text-sm py-2 border border-white border-opacity-50 rounded font-bold'>
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className='mt-8 flex justify-between items-center'>
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
