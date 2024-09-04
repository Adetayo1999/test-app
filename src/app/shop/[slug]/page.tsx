import { MdKeyboardArrowLeft } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/common/components/skeleton/container";
import furnitureImage from "@/assets/images/house-luxury-img.png";
import { AnimatedRoom } from "../components/3d-rendered-room";
import { ShopDetailType } from "@/common/data/shop-details";
import { FurnitureDescription } from "../components/furniture-description";
import { ProductType } from "@/app/types/products";
import { PurchaseItemButton } from "../components/purchase-item-button";

interface ShopDetailsProps {
    params: {
        slug: string;
    };
    searchParams: {
        [key: string]: string;
    };
}

export default async function ShopDetails(props: ShopDetailsProps) {
    const productsResponse = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL!}/api/products/${props.params.slug}`,
    );
    const productsData = await productsResponse.json();
    const data: ProductType = productsData.data.product;

    return (
        <div className=''>
            <div className='bg-[#F9F1E7] px-[1.563rem] py-[1.4rem] flex items-center gap-x-8'>
                <div className='mr-8'>
                    <Link
                        href='/shop'
                        className='flex items-center gap-x-1 text-[#6B7280]'>
                        <span>
                            <MdKeyboardArrowLeft className='text-xl' />
                        </span>
                        <span className='text-xs'>Back</span>
                    </Link>
                </div>
                <div className='text-[#6B7280]'>|</div>
                <div className=''>
                    <h4 className='text-sm text-[#000000]'>{data.title}</h4>
                </div>
            </div>
            <div className='h-[45vh] md:h-[80vh]  flex flex-col text-center justify-center p-14 items-center relative'>
                <Container className='relative z-20 flex flex-col gap-y-4'>
                    <h6 className='text-white text-opacity-70 text-sm '>
                        {data.subtitle}
                    </h6>
                    <h1 className='text-white font-bodoni font-medium text-3xl md:text-5xl'>
                        {data.title}
                    </h1>
                    <div className='mt-6'>
                        <PurchaseItemButton data={data} variant />
                    </div>
                </Container>
                <Image
                    src={data.banner}
                    alt={data.title}
                    className='z-0 top-0 left-0 w-full h-full absolute object-cover '
                    fill
                />
            </div>
            <AnimatedRoom />
            <ShopDetailsFeatures details={data.descriptions} />
            <div className='flex flex-col md:px-14  gap-y-12 pt-10 md:pt-0 my-0 md:my-20'>
                <div className='flex text-center md:text-left md:justify-between flex-col md:flex-row px-3'>
                    <h2 className='md:flex-[0.5] text-[2rem] md:text-[3rem] text-[#161C2D] font-bodoni mb-4 md:mb-0 font-medium'>
                        A witness to world affairs and continually updated
                        standards
                    </h2>
                    <div className='md:flex-[0.4]'>
                        <p className='text-sm md:text-base  text-[#161C2D] text-opacity-70 mb-6'>
                            The Gram furniture has spanned eras without ever
                            losing its modern touch. Symbolizing this ongoing
                            connection with time, this is a perfect glimpse into
                            the world of luxury.
                        </p>
                        <PurchaseItemButton data={data} />
                    </div>
                </div>
                <div className='h-[18rem] md:h-fit'>
                    <Image
                        src={furnitureImage}
                        alt='Furniture'
                        className=' md:h-[30.813rem] w-full h-full object-cover'
                        placeholder='blur'
                    />
                </div>
            </div>
        </div>
    );
}

interface ShopDetailsFeaturesProps {
    details: ShopDetailType[];
}

const ShopDetailsFeatures: React.FC<ShopDetailsFeaturesProps> = ({
    details,
}) => {
    return (
        <div className=''>
            {details.map((item, idx) => (
                <FurnitureDescription {...item} key={idx} />
            ))}
        </div>
    );
};
