"use client";
import { useState } from "react";

interface PortfolioAccordionType {
    description: string;
}

export const PortfolioAccordion: React.FC<PortfolioAccordionType> = ({
    description,
}) => {
    const [isActive, setActive] = useState(false);

    return (
        <div className='border-b border-[#11111133] pb-4'>
            <div className='flex justify-between items-center'>
                <h4 className='flex-1 text-center text-sm md:text-base text-opacity-70 text-[#161C2D]'>
                    Project Details
                </h4>
                <button
                    onClick={() => setActive((prev) => !prev)}
                    className={`transition duration-300 ${isActive ? "rotate-180" : "rotate-0"} `}>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='25'
                        height='10'
                        viewBox='0 0 34 19'
                        fill='none'>
                        <path
                            d='M0.999998 17.5L17 1.5L33 17.5'
                            stroke='black'
                            stroke-opacity='0.7'
                            stroke-width='1.5'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                        />
                    </svg>
                </button>
            </div>
            <div
                className={`${!isActive ? "h-0 overflow-hidden" : "my-4 h-fit"}  transition-all duration-500 `}>
                <p
                    className={`text-sm text-[#161C2D] text-opacity-70 text-center transition delay-100 ${isActive ? "opacity-100" : "opacity-0"} ease-out leading-7`}>
                    {description}
                </p>
            </div>
        </div>
    );
};
