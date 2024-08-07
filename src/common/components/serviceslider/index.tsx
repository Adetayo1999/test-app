"use client";
import "@/assets/styles/globals.css";
import Image from "next/image";
import { SlideTypes } from "@/common/types/slider.types";
import Marquee from "react-fast-marquee";

export const SliderComponent: React.FC<SlideTypes> = ({ listOfSlides }) => {
    return (
        <div className='-mt-20 bg-[black] pt-14'>
            <Marquee autoFill pauseOnHover>
                {listOfSlides?.map((item) => (
                    <div key={item.id}>
                        <Image
                            src={item.image}
                            className=' mr-2 w-[18.75rem] h-[22.5rem]'
                            alt='icon'
                        />
                    </div>
                ))}
            </Marquee>
        </div>
    );
};
