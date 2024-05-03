import { Container } from "@/common/components/skeleton/container";
import shopBanner from "@/assets/images/shop-images/shop-banner.png";
import Image from "next/image";

export const ShopBanner = () => {
    return (
        <div className='h-[45vh] md:h-[70vh]  flex flex-col text-center justify-center items-center relative '>
            <Container className='relative z-20 flex flex-col gap-y-1'>
                <h6 className='text-white text-opacity-70 text-sm md:text-base '>
                    Our Collection
                </h6>
                <h1 className='text-white font-bodoni font-semibold text-3xl md:text-5xl'>
                    Shop exclusive and exquisite deals
                </h1>
            </Container>
            <Image
                src={shopBanner}
                alt='Shop Banner'
                className='z-0 top-0 left-0 w-full h-full absolute object-cover '
            />
        </div>
    );
};
