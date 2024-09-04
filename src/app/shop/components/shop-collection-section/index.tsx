import { ProductType } from "@/app/types/products";
import { Container } from "@/common/components/skeleton/container";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export const ShopCollectionSection: React.FC<
    Omit<ProductType, "descriptions">
> = (props) => {
    return (
        <div className='h-[60vh] md:h-[80vh] relative'>
            <Container className='z-10 relative h-full flex gap-y-4 justify-center text-left items-start flex-col'>
                <h1 className='text-white font-semibold font-bodoni text-2xl md:text-4xl'>
                    {props.title}
                </h1>
                <p className='max-w-sm text-slate-100 text-xs md:text-sm'>
                    {props.description}
                </p>
                <Link
                    href={`/shop/${props.slug}`}
                    className='border border-white rounded px-8 py-3 text-white text-xs md:text-sm font-medium  md:w-fit transition duration-300 hover:bg-gray-50 hover:text-[#111] '>
                    Learn More
                </Link>
            </Container>
            <Image
                src={props.banner}
                alt={props.title}
                className='top-0 left-0 w-full h-full object-cover absolute z-0'
                fill
            />
            <div className='z-[5] top-0 left-0 w-full h-full absolute ' />
        </div>
    );
};
