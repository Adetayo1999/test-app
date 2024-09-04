import { ProductType } from "../types/products";
import { ShopBanner } from "./components/shop-banner";
import { ShopCollection } from "./components/shop-collection";

interface ShopPageProps {
    searchParams: {
        [key: string]: string;
    };
}

export default async function Shop(params: ShopPageProps) {
    let products: Omit<ProductType, "descriptions">[] = [];
    try {
        const productsResponse = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL!}/api/products`,
        );
        const productsData = await productsResponse.json();
        products = productsData.data.products || [];
    } catch (e) {
        console.log(e);
        products = [];
    }

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
