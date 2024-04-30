import Image, { StaticImageData } from "next/image";

interface PortfolioImagesListProps {
    images: (string | StaticImageData)[];
    title: string;
}

export const PortfolioImagesList: React.FC<PortfolioImagesListProps> = ({
    images,
    title,
}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-10  '>
            {images.map((image, idx) => (
                <div
                    className='cursor-pointer h-[20rem] md:h-fit overflow-hidden rounded-md'
                    key={idx}>
                    <Image
                        src={image}
                        alt={title}
                        className='w-full h-full object-cover'
                    />
                </div>
            ))}
        </div>
    );
};
