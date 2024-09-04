import aiinitiative from "@/assets/images/mainaiinitiative.png";
import Image from "next/image";
import { AIInitiativeData } from "@/common/data/aiinitiative";
import { SectionGenerator } from "@/common/components/aiinitiative-section";
import { AiInitiativeForm } from "@/common/components/ai-initiative-form";

const AIInitiative = () => {
    const { step1, step2, step3 } = AIInitiativeData;
    return (
        <div className='py-[5.6rem]'>
            <div className='my-[6.5rem] md:mb-[4rem] px-10 md:px-0'>
                <h1
                    className={`text-center font-bodoni text-3xl md:text-6xl pb-4`}>
                    Introducing Our AI Initiative
                </h1>

                <p className='text-center text-sm md:text-xl text-[#475467] w-full md:w-2/5 mt-4 m-auto'>
                    Experience effortless AI-Home transformation using our
                    professional tools that can provide recommendations tailored
                    to your needs !
                </p>
                <AiInitiativeForm
                    containerClassName='m-auto w-[90%] md:w-1/3 flex justify-center mt-12 gap-4'
                    inputContainerClassName='w-[50rem] md:w-full'
                />
            </div>

            <Image src={aiinitiative} alt='images' className=' w-full' />

            <div className='w-full md:w-[90%] px-6 m-auto mb-10 md:mb-0 pt-20'>
                <SectionGenerator
                    header={step1.title}
                    subheader={step1.step}
                    body={step1.body}
                    image={step1.image}
                    reversed={false}
                    textColor={false}
                />
            </div>

            <div className='bg-[#000] pt-28'>
                <div className='w-full md:w-[90%] px-6 md:m-auto'>
                    <SectionGenerator
                        header={step2.title}
                        subheader={step2.step}
                        body={step2.body}
                        image={step2.image}
                        reversed={false}
                        textColor={true}
                    />
                </div>
            </div>

            <div className='w-full md:w-[90%] px-6 md:m-auto pt-20'>
                <SectionGenerator
                    header={step3.title}
                    subheader={step3.step}
                    body={step3.body}
                    image={step3.image}
                    reversed={true}
                    textColor={false}
                />
            </div>

            <div className='bg-[#F9FAFB] w-full pt-12 px-8 md:p-40 mt-20'>
                <div className=' md:w-3/5 m-auto'>
                    <h1
                        className={`text-center font-bodoni text-3xl md:text-6xl pb-4`}>
                        Ready to elevate your lifestyle with stylish decor?
                    </h1>
                </div>
                <AiInitiativeForm
                    containerClassName='m-auto w-full md:w-1/3 flex flex-col md:flex-row justify-center mt-10 md:mt-12 gap-4'
                    inputContainerClassName='md:w-full'
                />
            </div>
        </div>
    );
};

export default AIInitiative;
