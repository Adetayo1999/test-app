import { SHOP_COLLECTION_DETAILS } from "@/common/data/shop-collection";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Container } from "@/common/components/skeleton/container";

interface ShopDetailsProps {
    params: {
        slug: string;
    };
    searchParams: {
        [key: string]: string;
    };
}

export default function ShopDetails(props: ShopDetailsProps) {
    const data = SHOP_COLLECTION_DETAILS[props.params.slug];

    if (!data) {
        return null;
    }

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
                </Container>
                <Image
                    src={data.banner}
                    alt={data.title}
                    className='z-0 top-0 left-0 w-full h-full absolute object-cover '
                />
            </div>
            <ShopDetailsFeatures images={data.images} title={data.title} />
        </div>
    );
}

interface ShopDetailsFeaturesProps {
    images: StaticImageData[];
    title: string;
}

const ShopDetailsFeatures: React.FC<ShopDetailsFeaturesProps> = ({
    images,
    title,
}) => {
    return (
        <div className=''>
            {images.map((item, idx) => (
                <div className='' key={idx}>
                    <Image src={item} alt={title} className=' object-cover ' />
                </div>
            ))}
        </div>
    );
};
