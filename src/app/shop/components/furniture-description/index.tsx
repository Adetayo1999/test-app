import Image, { StaticImageData } from "next/image";

interface FurnitureDescriptionProps {
    title: string;
    description: string;
    image: StaticImageData | string;
    color: string;
    type: "centered" | "left_aligned";
}

export const FurnitureDescription: React.FC<FurnitureDescriptionProps> = ({
    type,
    color,
    description,
    image,
    title,
}) => {
    switch (type) {
        case "left_aligned":
            return (
                <div
                    className='md:min-h-screen flex flex-col justify-between'
                    style={{ background: color }}>
                    <div className='pt-20 pb-10 px-10 md:pt-40 md:px-40 md:pb-20 md:w-[60%]'>
                        <h1 className='text-[2.5rem] md:text-[4rem] text-white font-semibold font-gordita mb-5'>
                            {title}
                        </h1>
                        <p className='text-base md:text-xl font-normal text-white leading-loose md:leading-relaxed'>
                            {description}
                        </p>
                    </div>
                    <div className='flex justify-center'>
                        <div className='w-full md:w-[50rem] mx-10 md:h-[32.688rem] overflow-hidden'>
                            <Image
                                src={image}
                                alt='Furniture description'
                                className='w-full h-full object-cover'
                                // TODO: find perfect size for image
                                width={500}
                                height={400}
                            />
                        </div>
                    </div>
                </div>
            );

        default:
            return (
                <div className='md:min-h-screen' style={{ background: color }}>
                    <div className='flex flex-col justify-center items-center pt-20 px-10  md:pt-40 md:px-40 pb-16    mx-auto '>
                        <div className='w-full md:w-[50rem] md:h-[32.688rem]  overflow-hidden mb-8'>
                            <Image
                                src={image}
                                alt='Furniture description'
                                className='w-full h-full object-cover'
                                // TODO: find perfect size for image
                                width={500}
                                height={400}
                            />
                        </div>
                        <div className='md:w-[50rem]'>
                            <h1 className='text-[2.5rem] md:text-[4rem] text-white font-semibold  font-gordita mb-5'>
                                {title}
                            </h1>
                            <p className='text-base md:text-xl font-normal text-white leading-loose md:leading-relaxed'>
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            );
    }
};
