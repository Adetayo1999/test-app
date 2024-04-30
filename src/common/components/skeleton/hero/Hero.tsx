
import { HomeImages, SlideImages } from "@/utils/config"
import Image from "next/image"
import ImageCarousel from "../animationimages/Slider"



export const HeroSection = () => {
    return (
        <div className="flex flex-col gap-[180px] md:gap-[700px]">
            <div className="mt-[40vw] md:mt-[300px]">
            <ImageCarousel listOfSlides={SlideImages} />
            </div>

            <div className="mb-40 mt-[50vw] md:mt-0 mx-auto grid grid-cols-1 md:grid-cols-3 w-[88%] md:w-[58%] gap-8">
                {
                    HomeImages.map((item) => (
                        <div className="relative transform transition-transform duration-300 ease-in-out hover:scale-110" key={item.id}> 
                            <Image src={item.icon} className="w-full h-full object-cover rounded-xl cursor-pointer" alt="" />
                            <h1 className="absolute w-full cursor-pointer font-bodoni text-2xl md:text-5xl 
                            text-center text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                {item.title}
                            </h1>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}