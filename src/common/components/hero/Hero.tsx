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

            <div className='mb-40 mt-[50vw] md:mt-0 mx-auto grid grid-cols-1 md:grid-cols-3 w-[88%] md:w-[58%] gap-8'>
                {HomeImages.map((item) => (
                    <Link href={item.path} key={item.id}>
                        <div className='relative transform transition-transform duration-300 ease-in-out md:hover:scale-110'>
                            <Image
                                src={item.icon}
                                className='w-full md:h-full object-cover h-[18rem] cursor-pointer '
                                alt=''
                            />
                            <h1
                                className='absolute w-full cursor-pointer font-bodoni text-4xl md:text-5xl 
                            text-center text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                {item.title}
                            </h1>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
