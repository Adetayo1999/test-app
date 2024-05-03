import { SectionTypes } from "@/common/types/section.types"
import Image from "next/image"

export const SectionGenerator: React.FC<SectionTypes>= ({image,subheader,header, textColor,body,reversed}) => {
    return (
        <div className={`flex flex-col gap-8  ${reversed ? "md:flex-row-reverse md:gap-40" : "md:flex-row"}`}>
            
            <div className={`w-full md:w-1/2 ${textColor ? `text-white -mt-4` : `text-[#000] md:mt-36`}`}>
                <p className="text-[16px] md:text-2xl font-bodoni px-1">{subheader}</p>
                <p className={`text-xl md:text-6xl font-bold w-full ${textColor ? `md:w-[50vw]` : `md:w-4/5`} mt-10`}>{header}</p>

                <p className="text-[14px] md:text-xl mt-6 md:mt-14 w-full md:w-[90%]">{body}</p>

            </div>

            <div className="">
                <Image src={image} alt="images" />
            </div>

        </div>
    )
}