import { portfolios } from "@/common/data/portfolio";
import { PortfolioCard } from "./portfolio-card";

export const PortfolioList = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-12 place-content-center'>
            {portfolios.map((p) => (
                <PortfolioCard {...p} key={p.id} />
            ))}
        </div>
    );
};
