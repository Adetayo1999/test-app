"use client";
import Link from "next/link";
import { HomeImages } from "@/common/data/home-data";
import Image from "next/image";
import { HomeSlideShow } from "../home-slideshow";
import { AnimatePresence, motion } from "framer-motion";

export const HeroSection = () => {
    return (
        <div className=''>
            <HomeSlideShow />
            <div className='flex justify-center px-[3.438rem] md:px-0  mb-[8.313rem] mt-[7.5rem] items-center'>
                <div className='gap-[2.5rem]  w-full md:w-fit grid grid-cols-1 md:grid-cols-3  mx-auto'>
                    {HomeImages.map((item) => (
                        <Link href={item.path} key={item.id} className='w-full'>
                            <div
                                className='relative transform transition-transform 
                          h-[20rem] group md:h-[19.34rem] md:w-[18.75rem]
                        '>
                                <Image
                                    src={item.icon}
                                    className='w-full h-full z-[0] object-cover  cursor-pointer  absolute top-0 left-0'
                                    alt=''
                                    placeholder='blur'
                                />
                                <div className='relative group-hover:hidden z-[20] h-full w-full  flex justify-center items-center p-5'>
                                    <h1
                                        className='cursor-pointer font-bodoni text-4xl md:text-5xl 
                            text-center text-white'>
                                        {item.title}
                                    </h1>
                                </div>

                                {/* <AnimatePresence> */}
                                <motion.div
                                    exit={{ opacity: 0 }}
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className='absolute pt-8 bg-opacity-40 p-4 bg-black top-0 left-0 w-full h-full     transition duration-[20s]  flex-col justify-center items-center ease-in hidden group-hover:flex'>
                                    <p className=' text-white mb-4 text-center leading-relaxed'>
                                        We pride ourselves on creating bespoke
                                        client-focused spaces with innovative
                                        solutions that complement the
                                        personalities of both the home and its
                                        owner
                                    </p>
                                    <button className='border border-white px-8 py-3 text-white text-sm font-medium  w-fit transition duration-200 hover:bg-white hover:text-gray-800 rounded'>
                                        Learn More
                                    </button>
                                </motion.div>
                                {/* </AnimatePresence> */}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

//mb-40 mt-[50vw] md:mt-0 mx-auto flex flex-col items-center md:grid grid-cols-1 md:grid-cols-3 w-[88%] md:w-[58%] md:gap-[2.5rem] gap-y-[2rem]
