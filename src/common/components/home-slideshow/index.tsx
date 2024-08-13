"use client";
import { SlideImages } from "@/common/data/home-data";
import Image from "next/image";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import logo from "@/assets/images/large-logo.svg";

export const HomeSlideShow = () => {
    return (
        <Zoom
            scale={1.4}
            indicators={false}
            arrows={false}
            infinite
            cssClass='h-[100vh] '>
            {SlideImages.map((each, index) => (
                <div key={index} className='h-screen overflow-hidden relative'>
                    <Image
                        className='w-full object-bottom h-full object-cover relative z-10'
                        alt='Slide Image'
                        src={each.image}
                    />
                    <div className='absolute z-50 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] '>
                        <Image src={logo} alt='Omoyeni' className='md:h-fit' />
                    </div>
                </div>
            ))}
        </Zoom>
    );
};
