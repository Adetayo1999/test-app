import { SlideTypes } from "@/common/types/slider.types";
import name from "@/assets/icons/name.svg";
import Image from "next/image";
import React, { useState, useEffect } from "react";


const ImageCarousel : React.FC<SlideTypes>= ({listOfSlides }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % listOfSlides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative mx-auto">
            {listOfSlides.map((slide) => (
                <div
                    key={slide.id}
                    className={`w-[100%] flex flex-col object-cover absolute transition-opacity duration-1000 ease-in-out ${slide.id === activeIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                    <Image src={slide.image} alt='bg-icon' className="md:w-full h-[600px] md:h-full object-cover relative md:top-3/4 transform -translate-y-1/2" />
                    <Image src={name} alt='name' className='w-1/3 h-auto absolute z-10 top-[35vw] md:top-[10vw] left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                </div>
            ))}
        </div>
    );
};

export default ImageCarousel;
