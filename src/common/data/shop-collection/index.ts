import { StaticImageData } from "next/image";

import collection1 from "@/assets/images/shop-images/shop-collection/collection-1.png";
import collection2 from "@/assets/images/shop-images/shop-collection/collection-2.png";
import collection3 from "@/assets/images/shop-images/shop-collection/collection-3.png";

import shopDescription1 from "@/assets/images/shop-images/shop-details/design-description-1.jpg";
import shopDescription2 from "@/assets/images/shop-images/shop-details/design-description-2.jpg";
import shopDescription3 from "@/assets/images/shop-images/shop-details/design-description-3.jpg";
import shopDescription4 from "@/assets/images/shop-images/shop-details/design-description-4.jpg";
import shopDescription5 from "@/assets/images/shop-images/shop-details/design-description-5.jpg";

interface ShopCollectionDetailsType {
    id: number;
    subtitle: string;
    title: string;
    description: string;
    banner: StaticImageData;
    images: StaticImageData[];
}

export const SHOP_COLLECTION_DATA = [
    {
        id: 1,
        title: "Gram Furniture",
        description:
            "Obtained frome the finest and rarest leather the gram dining set is a must have for your Living area.",
        image: collection1,
        slug: function () {
            return (
                this.title.toLowerCase().replace(" ", "-").trim() +
                "-" +
                this.id.toString()
            );
        },
    },
    {
        id: 2,
        title: "Steph Furniture",
        description:
            "Obtained frome the finest and rarest leather the gram dining set is a must have for your Living area.",
        image: collection2,
        slug: function () {
            return (
                this.title.toLowerCase().replace(" ", "-").trim() +
                "-" +
                this.id.toString()
            );
        },
    },
    {
        id: 3,
        title: "Gold Stands",
        description:
            "Obtained frome the finest and rarest leather the gram dining set is a must have for your Living area.",
        image: collection3,
        slug: function () {
            return (
                this.title.toLowerCase().replace(" ", "-").trim() +
                "-" +
                this.id.toString()
            );
        },
    },
];

export const SHOP_COLLECTION_DETAILS: Record<
    string,
    ShopCollectionDetailsType
> = {
    "gram-furniture-1": {
        id: 1,
        subtitle: "Limited Edition",
        title: "Gram Furniture",
        description:
            "Obtained frome the finest and rarest leather the gram dining set is a must have for your Living area.",
        banner: collection1,
        images: [
            shopDescription1,
            shopDescription2,
            shopDescription3,
            shopDescription4,
            shopDescription5,
        ],
    },
    "steph-furniture-2": {
        id: 2,
        subtitle: "Limited Edition",
        title: "Steph Furniture ",
        description:
            "Obtained frome the finest and rarest leather the gram dining set is a must have for your Living area.",
        banner: collection2,
        images: [
            shopDescription1,
            shopDescription2,
            shopDescription3,
            shopDescription4,
            shopDescription5,
        ],
    },
    "gold-stands-3": {
        id: 3,
        subtitle: "Limited Edition",
        title: "Gold Stands",
        description:
            "Obtained frome the finest and rarest leather the gram dining set is a must have for your Living area.",
        banner: collection3,
        images: [
            shopDescription1,
            shopDescription2,
            shopDescription3,
            shopDescription4,
            shopDescription5,
        ],
    },
};
