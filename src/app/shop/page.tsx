import { ShopBanner } from "./components/shop-banner";
import { ShopCollection } from "./components/shop-collection";

interface ShopPageProps {
    searchParams: {
        [key: string]: string;
    };
}

export default function Shop(params: ShopPageProps) {
    return (
        <div className=''>
            <ShopBanner />
            <ShopCollection collection={params.searchParams.collection} />
        </div>
    );
}
