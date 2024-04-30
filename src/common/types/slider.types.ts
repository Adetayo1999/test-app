import { StaticImageData } from "next/image";

export interface SlideShow{
    id: number,
    image: StaticImageData,
}
export interface SlideTypes{
    listOfSlides: SlideShow[]
}