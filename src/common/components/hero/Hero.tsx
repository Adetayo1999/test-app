import Link from "next/link";
import { HomeImages, SlideImages } from "@/common/data/home-data";
import Image from "next/image";

import ImageCarousel from "../animationimages/Slider";

export const HeroSection = () => {
    return (
        <div className='flex flex-col gap-[180px] md:gap-[10rem]'>
            <div className='mt-[40vw] md:mt-[300px]'>
                <ImageCarousel
                    listOfSlides={SlideImages}
                    isBgTextPresent={true}
                />
            </div>

            <div className='mb-40 mt-[50vw] md:mt-0 mx-auto flex flex-col items-center md:grid grid-cols-1 md:grid-cols-3 w-[88%] md:w-[58%] md:gap-[2.5rem] gap-y-[2rem]'>
                {HomeImages.map((item) => (
                    <Link href={item.path} key={item.id}>
                        <div
                            className='relative transform transition-transform duration-300 ease-in-out md:hover:scale-110
                        h-[18.051rem] w-[17.5rem] md:h-[19.34rem] md:w-[18.75rem]
                        '>
                            <Image
                                src={item.icon}
                                className='w-full h-full z-[0] object-cover  cursor-pointer  absolute top-0 left-0'
                                alt=''
                                placeholder='blur'
                            />
                            <div className='relative z-[20] h-full w-full  flex justify-center items-center p-5'>
                                <h1
                                    className='cursor-pointer font-bodoni text-4xl md:text-5xl 
                            text-center text-white'>
                                    {item.title}
                                </h1>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
