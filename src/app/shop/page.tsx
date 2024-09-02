import { ProductType } from "../types/products";
import { ShopBanner } from "./components/shop-banner";
import { ShopCollection } from "./components/shop-collection";

interface ShopPageProps {
    searchParams: {
        [key: string]: string;
    };
}

export default async function Shop(params: ShopPageProps) {
    const productsResponse = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL!}/api/products`,
    );
    const productsData = await productsResponse.json();
    const products: Omit<ProductType, "descriptions">[] =
        productsData.data.products;

    return (
        <div className=''>
            <ShopBanner />
            <ShopCollection
                products={products}
                collection={params.searchParams.collection}
            />
        </div>
    );
}
