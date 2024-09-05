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
import { SubscribeForm } from "../../subscribe-form";

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
                            <SubscribeForm />
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
                                    {
                                        id: 1,
                                        Icon: MailIcon,
                                    },
                                    {
                                        id: 2,
                                        Icon: InstagramIcon,
                                        href: "https://www.instagram.com/omoyeni.io?igsh=MXJkYXRlZWM4cXlsNA==",
                                    },
                                    {
                                        id: 3,
                                        Icon: XIcon,
                                    },
                                    {
                                        id: 4,
                                        Icon: PinterestIcon,
                                    },
                                ].map((item, idx) => (
                                    <li key={idx}>
                                        <Link
                                            href={item.href || "#"}
                                            target={
                                                item.href ? "_blank" : undefined
                                            }>
                                            <item.Icon scale={0.9} />
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

//Let’s add this link to the Instagram icon - https://www.instagram.com/omoyeni.io?igsh=MXJkYXRlZWM4cXlsNA==
