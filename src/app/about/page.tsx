import { Container } from "@/common/components/skeleton/container";
import cofounder from "@/assets/images/cofounder.png";
import Image from "next/image";

const About = () => (
    <Container>
        <div className='py-[5.6rem]'>
            <div className='flex flex-col-reverse md:flex-row gap-14 md:gap-28 md:mt-20'>
                <div className='w-full md:w-1/2 md:mt-28 space-y-10'>
                    <p className='tracking-wide leading-loose font-inter md:px-12'>
                        Yeni holds a Cultural Anthropology and African American
                        Studies degree from Stanford University, where her
                        fascination with diverse cultures and their impact on
                        lifestyle choices first took root.
                        <br className='mt-4' /> Influenced by global travels and
                        a penchant for embracing new perspectives, Yeni&apos;s
                        design philosophy centers on reimagining the way we
                        inhabit our spaces.
                    </p>
                    <p className='tracking-wide leading-loose font-inter md:px-12'>
                        After earning her Interior Design degree from FIDM in
                        Los Angeles, Yeni returned to her hometown of New York
                        City in 2002. She honed her skills at Irvine & Fleming
                        before venturing out on her own in 2007. Her talent was
                        further recognized when she won HGTV&apos;s &apos;Design
                        Star&apos; in 2012, catapulting her into the spotlight.
                        Her subsequent show, &apos;Shop This Room&apos; focused
                        on empowering homeowners to infuse their spaces with
                        personality by celebrating cherished objects and
                        heirlooms.
                    </p>
                </div>

                <div className=''>
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
