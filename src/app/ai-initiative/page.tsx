"use client";

import aiinitiative from "@/assets/images/mainaiinitiative.png";
import Image from "next/image";
import { AIInitiativeData } from "@/common/data/aiinitiative";
import { InputField } from "@/common/components/input";
import { SetStateAction, useState } from "react";
import { Buttons } from "@/common/components/buttons";
import { SectionGenerator } from "@/common/components/section";

const AIInitiative = () => {
    const [email, setEmail] = useState("");
    const { step1, step2, step3 } = AIInitiativeData;
    return (
        <div className='py-[5.6rem]'>
            <div className='my-[6.5rem] md:mb-[4rem]'>
                <h1
                    className={`text-center font-bodoni text-3xl md:text-6xl pb-4`}>
                    Introducing Our AI Initiative
                </h1>

                <p className='text-center text-[14px] md:text-[20px] text-[#475467] w-full md:w-2/5 mt-4 m-auto'>
                    Experience effortless AI-Home transformation using our
                    professional tools that can provide recommendations tailored
                    to your needs !
                </p>

                <div className='m-auto w-[90%] md:w-1/3 flex justify-center mt-12 gap-4'>
                    <div className='w-[50rem] md:w-full'>
                        <InputField
                            placeholder={"Enter email"}
                            onChange={(e: {
                                target: { value: SetStateAction<string> };
                            }) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                    <Buttons
                        title={"Join waitlist"}
                        className='bg-[#000] text-white rounded-none hover:bg-[#fff] hover:text-black'
                    />
                </div>
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

            <div className='bg-[#F9FAFB] w-full pt-12 px-4 md:p-40 mt-20'>
                <div className=' md:w-3/5 m-auto'>
                    <h1
                        className={`text-center font-bodoni text-3xl md:text-6xl pb-4`}>
                        Ready to elevate your lifestyle with stylish decor?
                    </h1>
                </div>
                <div className='m-auto w-full md:w-1/3 flex justify-center mt-12 gap-4'>
                    <div className='w-[50rem] md:w-full'>
                        <InputField
                            placeholder={"Enter email"}
                            onChange={(e: {
                                target: { value: SetStateAction<string> };
                            }) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>

                    <Buttons
                        title={"Join waitlist"}
                        className='bg-[#000] text-white rounded-none hover:bg-[#fff] hover:text-black'
                    />
                </div>
            </div>
        </div>
    );
};

export default AIInitiative;
