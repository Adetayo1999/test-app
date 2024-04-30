"use client"
import Slider from "react-slick";
import "@/assets/styles/globals.css";
import Image from "next/image";
import { SlideTypes } from "@/common/types/types";

export const SliderComponent:React.FC<SlideTypes> = ({listOfSlides}) => {

    const settings = {
        dots: false,
        infinite: true,
        loop: true,
        speed: 4000,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (

            <div className="-mt-20 bg-[black] pt-10 gap-4">
                <Slider {...settings}>
                {listOfSlides?.map(item => (
                    <div key={item.id} >
                        <Image src={item.image} className="rounded-xl w-[370px]" alt="icon" />
                        </div>
                    ))}
                </Slider>
        </div>
    )
}