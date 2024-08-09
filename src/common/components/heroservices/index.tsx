"use-client";

import React from "react";
import Image from "next/image";

import headerImage from "@/assets/images/minimalistic-apartment-design-with-black-and-white-2023-11-27-05-14-38-utc 1.png";
import { listOfServices } from "@/common/data/home-data";
import { Buttons } from "../buttons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderComponent } from "../serviceslider";
import ImageCarousel from "../animationimages/Slider";
import { ServicesImages } from "@/common/data/services-data";

export const ServicesHero = () => {
    return (
        <div>
            <div className='relative h-[18rem] md:h-[25rem] flex justify-center items-center overflow-hidden'>
                <Image
                    src={headerImage}
                    className='w-full absolute top-0 left-0 h-full object-cover origin-bottom-right '
                    alt=''
                />
                <h1
                    className='cursor-pointer font-bodoni text-[2.25rem] z-[30] relative font-medium md:text-[4rem] 
                            text-center text-white'>
                    Our Full Service Offerings
                </h1>
            </div>
            <div
                className='flex flex-col-reverse md:grid md:grid-cols-2 md:mb-0 p-4 px-6 md:p-12 md:pt-14
             w-full md:w-[90%] md:space-x-10 md:m-auto '>
                <div className='w-full'>
                    <p className='font-bodoni text-xl mt-10 md:mt-0 md:text-3xl text-black font-[500]'>
                        We offer full service interior design including new
                        construction, remodels, and furniture planning for your
                        home. some of our key offerings include
                    </p>

                    <div className='mt-6 flex flex-col space-y-4'>
                        {listOfServices.map((item) => (
                            <li key={item.id} className=''>
                                {item.title}
                            </li>
                        ))}
                    </div>
                    <div className='w-full mb-32 md:mb-0 md:w-1/3 flex mt-6 flex-end '>
                        <button className='border border-[#111] px-8 py-3 text-[#111] text-sm font-medium w-full md:w-fit transition duration-200 hover:bg-[#111] hover:text-gray-50'>
                            Book Consultation
                        </button>
                    </div>
                </div>

                <div className='hidden md:block mt-[15rem] mb-[13rem] md:mb-0 md:mt-[22vw]'>
                    <ImageCarousel
                        listOfSlides={ServicesImages}
                        isBgTextPresent={false}
                    />
                </div>
            </div>
            <div className='bg-[#000]'>
                <SliderComponent listOfSlides={ServicesImages} />
            </div>
        </div>
    );
};
