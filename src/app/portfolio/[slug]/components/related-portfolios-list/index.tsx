import { Container } from "@/common/components/skeleton/container";
import { portfolios } from "@/common/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

interface RelatedPortfolioListProps {
    slug: string;
}

export const RelatedPortfolioList: React.FC<RelatedPortfolioListProps> = ({
    slug,
}) => {
    return (
        <div className=''>
            <Marquee className='mt-20 mb-8 flex' autoFill pauseOnHover>
                {portfolios
                    .filter((item) => item.slug() !== slug)
                    .map((p) => (
                        <Link
                            href={`/portfolio/${p.slug()}`}
                            className='h-[15rem] w-[20rem]  block overflow-hidden mr-6 rounded-md'
                            title={p.title}
                            key={p.id}>
                            <Image
                                src={p.image}
                                alt={p.title}
                                className='w-full h-full object-cover'
                            />
                        </Link>
                    ))}
            </Marquee>
            <Container>
                <div className='flex justify-center items-center'>
                    <Link
                        href='/portfolio'
                        className='border-[#111] border text-[#111] font-gordita text-sm rounded w-full md:w-[40%] font-medium py-3 text-center block'>
                        Back To All Projects
                    </Link>
                </div>
            </Container>
        </div>
    );
};
