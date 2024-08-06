import { StaticImageData } from "next/image";

import collection1 from "@/assets/images/shop-images/shop-collection/collection-1.png";
import collection2 from "@/assets/images/shop-images/shop-collection/collection-2.png";
import collection3 from "@/assets/images/shop-images/shop-collection/collection-3.png";

import { shopDetails, ShopDetailType } from "../shop-details";

interface ShopCollectionDetailsType {
    id: number;
    subtitle: string;
    title: string;
    description: string;
    banner: StaticImageData;
    details: ShopDetailType[];
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
        details: shopDetails,
    },
    "steph-furniture-2": {
        id: 2,
        subtitle: "Limited Edition",
        title: "Steph Furniture ",
        description:
            "Obtained frome the finest and rarest leather the gram dining set is a must have for your Living area.",
        banner: collection2,
        details: shopDetails,
    },
    "gold-stands-3": {
        id: 3,
        subtitle: "Limited Edition",
        title: "Gold Stands",
        description:
            "Obtained frome the finest and rarest leather the gram dining set is a must have for your Living area.",
        banner: collection3,
        details: shopDetails,
    },
};
