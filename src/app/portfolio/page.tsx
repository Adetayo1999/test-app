import { PortfolioList } from "@/common/components/portfolio-list";
import { Container } from "@/common/components/skeleton/container";

export default function Portfolio() {
    return (
        <Container>
            <div className='py-[5.6rem]'>
                <div className='mb-[2.5rem] md:mb-[4rem]'>
                    <h1
                        className={`text-center font-bodoni text-3xl md:text-[3rem] pb-4 border-b border-[#11111133]`}>
                        Design Portfolio
                    </h1>
                </div>
                <PortfolioList />
            </div>
        </Container>
    );
}
