import { StaticImageData } from "next/image";

import shopDetails1 from "@/assets/images/shop-images/shop-details/loft-luxury-living-room-with-bookshelf-and-yellow-2023-11-27-05-23-24-utc 2 (1).png";
import shopDetails2 from "@/assets/images/shop-images/shop-details/loft-luxury-living-room-with-bookshelf-and-yellow-2023-11-27-05-23-24-utc 2 (2).png";
import shopDetails3 from "@/assets/images/shop-images/shop-details/loft-luxury-living-room-with-bookshelf-and-yellow-2023-11-27-05-23-24-utc 2 (3).png";
import shopDetails4 from "@/assets/images/shop-images/shop-details/loft-luxury-living-room-with-bookshelf-and-yellow-2023-11-27-05-23-24-utc 2 (4).png";
import shopDetails5 from "@/assets/images/shop-images/shop-details/loft-luxury-living-room-with-bookshelf-and-yellow-2023-11-27-05-23-24-utc 2.png";

export interface ShopDetailType {
    title: string;
    description: string;
    image: StaticImageData | string;
    color: string;
    type: "centered" | "left_aligned";
}

export const shopDetails: ShopDetailType[] = [
    {
        title: "Indoor Use Only",
        description:
            "Experience the future of interior design as our AI creates tailored recommendations from real market options. Select from three variations of furnished and decorated spaces, with the flexibility to add additional furniture and pieces. Easily finalize your selections and have everything shipped directly to your home, simplifying the process of transforming your space.",
        type: "left_aligned",
        color: "#7D9182",
        image: shopDetails5,
    },
    {
        title: "Ships Assembled",
        description:
            "Experience the future of interior design as our AI creates tailored recommendations from real market options. Select from three variations of furnished and decorated spaces, with the flexibility to add additional furniture and pieces. Easily finalize your selections and have everything shipped directly to your home, simplifying the process of transforming your space.",
        type: "left_aligned",
        color: "#BDA0A2",
        image: shopDetails1,
    },
    {
        title: "Hand Crafted In Kenya",
        description:
            "Experience the future of interior design as our AI creates tailored recommendations from real market options. Select from three variations of furnished and decorated spaces",
        type: "centered",
        color: "#D2C28A",
        image: shopDetails2,
    },
    {
        title: "Quality Materials",
        description:
            "Experience the future of interior design as our AI creates tailored recommendations from real market options. Select from three variations of furnished and decorated spaces",
        type: "centered",
        color: "#A6C3CB",
        image: shopDetails3,
    },
    {
        title: "24/7 Support",
        description:
            "Experience the future of interior design as our AI creates tailored recommendations from real market options. Select from three variations of furnished and decorated spaces, ",
        type: "centered",
        color: "#BC7A62",
        image: shopDetails4,
    },
];
