import Link from "next/link";
import { ShopCollectionSection } from "../shop-collection-section";
import { ProductType } from "@/app/types/products";

interface ShopCollectionProps {
    collection?: string;
    products: Omit<ProductType, "descriptions">[];
}

export const ShopCollection: React.FC<ShopCollectionProps> = ({
    collection,
    products,
}) => {
    const collectionType = collection || "all";

    return (
        <div className=''>
            <div className='w-[90%] md:w-[75%] mx-auto'>
                <div className='flex justify-between items-center py-[3rem] md:py-[6.25rem] flex-col md:flex-row gap-y-3 md:gap-y-0'>
                    <h2 className='whitespace-nowrap flex-[0.4] text-[#161C2D] md:text-4xl font-bodoni text-2xl font-semibold'>
                        Explore Our Collection
                    </h2>
                    <p className='flex-[0.4] text-xs text-center md:text-left md:text-sm text-[#161C2D] text-opacity-70'>
                        Our collection offers a wide range of prestigious,
                        high-precision timepieces, from Professional to Classic
                        models to suit any location.
                    </p>
                </div>
                <div className='pb-5'>
                    <nav>
                        <ul className='flex justify-center items-center gap-x-16'>
                            {NAVIGATION_LIST.map((item) => {
                                const isActive =
                                    item.title.toLowerCase() === collectionType;

                                return (
                                    <li key={item.id}>
                                        <Link
                                            href={`/shop?collection=${item.title.toLowerCase()}`}
                                            className={`flex gap-x-1 text-[#111111] font-medium text-xs md:text-sm ${isActive ? "text-opacity-100" : "text-opacity-40"} `}>
                                            <span>{item.title}</span>
                                            {isActive && (
                                                <span className='font-semibold'>
                                                    .
                                                </span>
                                            )}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
            <div className=''>
                {products.map((i) => (
                    <ShopCollectionSection key={i.id} {...i} />
                ))}
            </div>
        </div>
    );
};

const NAVIGATION_LIST = [
    {
        id: 1,
        title: "All",
    },
    {
        id: 2,
        title: "Classic",
    },
    {
        id: 3,
        title: "Modern",
    },
];
