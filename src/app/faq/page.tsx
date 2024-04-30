"use client";
import { FAQAccordionClose } from "@/assets/icons/faq-accordion-close";
import { FAQAccordionOpen } from "@/assets/icons/faq-accordion-open";
import { Container } from "@/common/components/skeleton/container";
import { useState } from "react";

interface FAQAccordionProps {
    title: string;
    description: string;
}

export default function FAQ() {
    return (
        <div className=''>
            <FAQBanner />
            <Container>
                <div className='py-14 flex flex-col gap-y-5 md:w-[60%] mx-auto '>
                    {ACCORDION_DATA.map((item, idx) => (
                        <FAQAccordion {...item} key={idx} />
                    ))}
                </div>
            </Container>
            <div className='bg-[#F9FAFB] h-60 md:h-72'>
                <Container className='h-full'>
                    <div className='flex flex-col gap-y-6 justify-center items-center h-full'>
                        <h2 className='font-bodoni text-2xl md:text-[2.4rem]'>
                            Still have questions ?
                        </h2>
                        <button className='bg-[#111111] text-white px-5 py-3 font-medium rounded text-sm'>
                            Contact Us
                        </button>
                    </div>
                </Container>
            </div>
        </div>
    );
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ description, title }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div
            className={`bg-[#F9FAFB] p-8 flex justify-between gap-x-6 rounded-2xl `}>
            <div className=''>
                <button onClick={() => setIsActive((prev) => !prev)}>
                    {isActive ? <FAQAccordionClose /> : <FAQAccordionOpen />}
                </button>
            </div>
            <div className='flex-1'>
                <h4 className='text-[#101828] font-medium mb-2'>{title}</h4>
                {isActive && (
                    <p className='text-[#475467] text-sm'>{description}</p>
                )}
            </div>
        </div>
    );
};

const FAQBanner = () => {
    return (
        <div className='bg-[#111] h-72 text-white'>
            <Container className='h-full'>
                <div className='flex flex-col gap-y-4 justify-center items-center h-full'>
                    <h1 className='font-bodoni  text-3xl md:text-[2.8rem]'>
                        Frequently Asked Questions
                    </h1>
                    <p className='text-gray-200 text-xs md:text-sm'>
                        Everything you need to know about the services and
                        billing.
                    </p>
                </div>
            </Container>
        </div>
    );
};

const ACCORDION_DATA = [
    {
        title: "Is there a free trial available?",
        description:
            "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
        title: "Is there a free trial available?",
        description:
            "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
        title: "Is there a free trial available?",
        description:
            "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
        title: "Is there a free trial available?",
        description:
            "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
];
