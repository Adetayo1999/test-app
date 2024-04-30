import { PortfolioType } from "@/common/data/portfolio";
import Image from "next/image";
import Link from "next/link";

export const PortfolioCard: React.FC<PortfolioType> = (props) => {
    return (
        <div>
            <div className='group relative cursor-pointer overflow-hidden mb-4 md:mb-0 h-[18rem]  md:w-fit md:h-fit'>
                <Image
                    src={props.image}
                    alt={props.title}
                    className='h-full w-full object-cover transition duration-500 scale-100 md:scale-105 md:group-hover:scale-100'
                />
                <div className='hidden  top-0 left-0 w-full h-full absolute bg-opacity-65 bg-black text-white md:group-hover:flex flex-col justify-center gap-y-4 items-center transition-colors duration-500'>
                    <h1 className='font-bodoni text-3xl'>{props.title}</h1>
                    <p className='text-sm font-gordita tracking-wide'>
                        {props.category}
                    </p>
                    <Link
                        href={`/portfolio/${props.slug()}`}
                        className='border border-white py-3 text-center min-w-[8rem] rounded-md text-white text-xs'>
                        View More
                    </Link>
                </div>
            </div>
            <div className='flex flex-col items-center gap-y-3 md:hidden'>
                <h1 className='font-bodoni text-2xl md:text-3xl'>
                    {props.title}
                </h1>
                <p className='text-xs md:text-sm font-gordita tracking-wide'>
                    {props.category}
                </p>
                <Link
                    href={`/portfolio/${props.slug()}`}
                    className='border border-[#111] py-3 text-center w-fit rounded-md text-[#111] font-medium text-xs px-6'>
                    View More
                </Link>
            </div>
        </div>
    );
};
