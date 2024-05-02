"use-client";

import React from "react";
import Image from "next/image";
import img1 from "@/assets/images/img1.png";
import headerImage from "@/assets/images/heroservices.png";
import { SlideImages, listOfServices } from "@/utils/config";
import { Buttons } from "../buttons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderComponent } from "../serviceslider";
export const ServicesHero = () => {
    return (
        <div>
            <div className='relative h-[100vw] md:h-full'>
                <Image
                    src={headerImage}
                    className='w-full h-full object-cover cursor-pointer'
                    alt=''
                />
                <h1
                    className='absolute w-full cursor-pointer font-bodoni text-2xl md:text-5xl 
                            text-center text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    Our Full Service Offerings
                </h1>
            </div>
            <div
                className='flex flex-col-reverse md:grid md:grid-cols-2 md:mb-20 p-4 md:p-12
             w-full md:w-[90%] md:space-x-10 md:m-auto'>
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
                        <Buttons title={"Book Consultation"} />
                    </div>
                </div>
                <Image src={img1} className='rounded-lg mt-2' alt='img-icon' />
            </div>
            <div className='bg-[#000]'>
                <SliderComponent listOfSlides={SlideImages} />
            </div>
        </div>
    );
};
