import { Container } from "@/common/components/skeleton/container";
import cofounder from "@/assets/images/yeni.jpeg";
import Image from "next/image";

const About = () => (
    <Container>
        <div className='pt-[3.8rem] pb-[5.6rem]  md:py-[5.6rem]'>
            <div className='flex flex-col-reverse md:flex-row gap-14 md:gap-28 md:mt-20'>
                <div className='w-full md:w-1/2  space-y-10 md:flex-[0.45] flex-shrink-0'>
                    <p className='tracking-wide leading-loose  md:px-12'>
                        A confluence of design passion and technological
                        expertise, Yeni brings her robust background in computer
                        science and years as a Data Scientist to the forefront
                        of interior decorating. Her journey began in Nigeria,
                        where she was known for her personalized decorating
                        style.
                        <br /> <br />
                        Over time, Yeni recognized the limitations of
                        traditional decorating, such as the extensive time
                        commitments and the challenges of adapting designs to
                        meet diverse client needs and spaces. Motivated to
                        transform these challenges, she spearheaded the creation
                        of Omoyeni. Here, AI technology meets creative design to
                        provide instant, customized interior solutions, ensuring
                        that interior decorations is easily accessible and
                        affordable and that every client can efficiently
                        visualize and realize their perfect space. Additionally,
                        this innovation ensures that beautiful spaces are not a
                        luxury for the few but a reality for many.
                    </p>
                </div>

                <div className='md:flex-[0.45]'>
                    <Image
                        src={cofounder}
                        className='rounded-xl'
                        alt='cofounder'
                    />
                </div>
            </div>
        </div>
    </Container>
);

export default About;
