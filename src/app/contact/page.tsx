import contactImg from "@/assets/images/contact-images/contact-hero.png";
import { ContactForm } from "@/common/components/contact-form";
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
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
