import { Container } from "@/common/components/skeleton/container";
import { portfolioData } from "@/common/data/portfolio";
import { PortfolioAccordion } from "./components/portfolio-accordion";
import { PortfolioImagesList } from "./components/portfolio-images-list";
import { RelatedPortfolioList } from "./components/related-portfolios-list";

interface SinglePortfolioProps {
    params: {
        slug: string;
    };
}

export default function SinglePortfolio({ params }: SinglePortfolioProps) {
    const data = portfolioData[params.slug];

    if (!data) return null;

    return (
        <div className='py-[5.6rem]'>
            <Container>
                <div className='mb-[4rem]'>
                    <h1
                        className={`text-center font-bodoni text-[1.5rem] md:text-[2.5rem] pb-4 border-b mb-4 border-[#11111133]`}>
                        {data.title}
                    </h1>
                    <PortfolioAccordion description={data.description} />
                </div>
                <div className=''>
                    <PortfolioImagesList
                        images={data.images}
                        title={data.title}
                    />
                </div>
            </Container>
            <div className=''>
                <RelatedPortfolioList slug={params.slug} />
            </div>
        </div>
    );
}
