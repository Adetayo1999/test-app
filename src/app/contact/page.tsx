import contactImg from "@/assets/images/contact-images/contact-hero.png";
import { Input } from "@/common/components/forms/input";
import { Textarea } from "@/common/components/forms/textarea";
import { Container } from "@/common/components/skeleton/container";
import Image from "next/image";

export default function ContactPage() {
    return (
        <div className='mt-16 md:mt-24 mb-16'>
            <Container>
                <div className='flex flex-col md:flex-row justify-between gap-y-8 md:gap-y-0'>
                    <div className='h-[20rem] md:h-fit overflow-hidden  md:flex-[0.5]'>
                        <Image
                            src={contactImg}
                            alt='Omoyeni Contact Image'
                            className='h-full w-full object-cover'
                            placeholder='blur'
                        />
                    </div>
                    <div className='md:flex-[0.45] flex flex-col gap-y-8'>
                        <div className='flex flex-col gap-y-6'>
                            <h1 className='font-bodoni text-3xl md:text-[2.8rem]'>
                                Contact Us
                            </h1>
                            <p className='text-[#6B7280]'>
                                For inquiries, guidance and a touch of
                                inspiration, our doors and inboxes are always
                                open. Let&apos;s help redefine your space
                            </p>
                        </div>
                        <div className=''>
                            <form className='flex flex-col gap-y-6'>
                                <div className='grid grid-cols-1 md:grid-cols-2  gap-y-6 md:gap-y-0 gap-x-5'>
                                    <div className=''>
                                        <Input
                                            labelText='First name'
                                            placeholder='First Name'
                                        />
                                    </div>
                                    <div className=''>
                                        <Input
                                            labelText='Last name'
                                            placeholder='Last name'
                                        />
                                    </div>
                                </div>
                                <Input
                                    labelText='Email'
                                    type='email'
                                    placeholder='jondoe@gmail.com'
                                />
                                <Input
                                    labelText='Subject'
                                    placeholder='e.g Living room redesign'
                                />
                                <Textarea
                                    labelText='Message'
                                    placeholder='Leave us a message...'
                                />
                                <div className=''>
                                    <button className='border border-[#111] px-8 py-3 text-[#111] text-sm font-medium w-full md:w-fit transition duration-200 hover:bg-[#111] hover:text-gray-50'>
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
