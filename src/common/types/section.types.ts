import { StaticImageData } from "next/image";

export interface SectionTypes{
    header: string,
    subheader: string,
    body: string,
    image: StaticImageData,
    reversed: boolean,
    textColor: boolean,
}