import { StaticImageData } from "next/image";

// Portfolio images
import portfolioImage1 from "@/assets/images/portfolio-images/portfolio_1.png";
import portfolioImage2 from "@/assets/images/portfolio-images/portfolio_2.png";
import portfolioImage3 from "@/assets/images/portfolio-images/portfolio_3.png";
import portfolioImage4 from "@/assets/images/portfolio-images/portfolio_4.png";
import portfolioImage5 from "@/assets/images/portfolio-images/portfolio_5.png";

// single portfolio images
import singlePortfolioImage1 from "@/assets/images/portfolio-images/single-portfolio/1.png";
import singlePortfolioImage2 from "@/assets/images/portfolio-images/single-portfolio/2.png";
import singlePortfolioImage3 from "@/assets/images/portfolio-images/single-portfolio/3.png";
import singlePortfolioImage4 from "@/assets/images/portfolio-images/single-portfolio/4.png";
import singlePortfolioImage5 from "@/assets/images/portfolio-images/single-portfolio/5.png";
import singlePortfolioImage6 from "@/assets/images/portfolio-images/single-portfolio/6.png";

export interface PortfolioType {
    id: number;
    title: string;
    category: string;
    slug: () => string;
    image: StaticImageData | string;
}

interface PortfolioDataType {
    [key: string]: {
        id: number;
        title: string;
        category: string;
        description: string;
        images: (StaticImageData | string)[];
    };
}

export const portfolios: PortfolioType[] = [
    {
        id: 1,
        title: "Gram Mercy Park",
        category: "Furniture Redesign",
        image: portfolioImage1,
        slug: function () {
            return `${this.title.toLowerCase().split(" ").join("-")}-${this.id.toString()}`;
        },
    },
    {
        id: 2,
        title: "Gram Mercy Park",
        category: "Furniture Redesign",
        image: portfolioImage2,
        slug: function () {
            return `${this.title.toLowerCase().split(" ").join("-")}-${this.id.toString()}`;
        },
    },
    {
        id: 3,
        title: "Gram Mercy Park",
        category: "Furniture Redesign",
        image: portfolioImage3,
        slug: function () {
            return `${this.title.toLowerCase().split(" ").join("-")}-${this.id.toString()}`;
        },
    },
    {
        id: 4,
        title: "Gram Mercy Park",
        category: "Furniture Redesign",
        image: portfolioImage4,
        slug: function () {
            return `${this.title.toLowerCase().split(" ").join("-")}-${this.id.toString()}`;
        },
    },
    {
        id: 5,
        title: "Gram Mercy Park",
        category: "Furniture Redesign",
        image: portfolioImage5,
        slug: function () {
            return `${this.title.toLowerCase().split(" ").join("-")}-${this.id.toString()}`;
        },
    },
];

export const portfolioData: PortfolioDataType = {
    "gram-mercy-park-1": {
        id: 1,
        title: "Gram Mercy Park",
        category: "Furniture Redesign",
        images: [
            singlePortfolioImage1,
            singlePortfolioImage2,
            singlePortfolioImage3,
            singlePortfolioImage4,
            singlePortfolioImage5,
            singlePortfolioImage6,
        ],
        description:
            "This charming 5,000+ square foot home is set in Snohomish, a small town known for its farmlands about 30 miles northeast of Seattle. When our clients first came to us at the end of 2019, they had just purchased this home and the 5 acres of land it sits on. The stunning views of the Cascades and Snohomish Valley were undeniable. This home was full of possibilities, and our clients were ready to make this their forever home for their family of six.\nThe main level of this home had a good overall layout, but it needed some updates to accommodate our client's needs better. We primarily solved this with space planning by eliminating some spaces to create others. Our clients wanted a mudroom, so we removed an unused hall closet and converted the large full bathroom to a powder room. This allowed for a nice landing space off the garage entrance. We also decided to close off the formal dining room and convert it into a hidden butler's pantry. Since there was already enough space between the family room and kitchen to have a substantial dining table, it made sense to have the unused dining room be used more functionally to accommodate the needs of this on-the-go family. After re-envisioning their main floor, we helped our clients select the perfect furnishings for their new space, balancing comfort with durability.\nThe second level needed minimal space planning, but we had so much fun creating dream-worthy bedrooms for each of them. Wainscot wall treatments and wallpaper transformed much of the upstairs spaces, giving each bedroom its own distinct personality and style. Rustic wood shiplap and deep navy tones were used to define the boys' rooms, while soft pinks, peaches, and purples were used to make an idyllic little girls' room. The primary bedroom was transformed into a relaxing oasis through the use of a neutral grasscloth wallpaper that adds texture, warmth, and a bit of sophistication to the space.\nThe basement was essentially unfinished, so we started from scratch and completely re-envisioned the downstairs area. We added a large entertainment area complete with a show-stopping wet bar, a large plush sectional, and beautifully painted built-ins. This room opens up to the backyard with sweeping views of the Cascades, so we added a folding door system to connect the indoors and outdoors for seamless entertaining. We also managed to squeeze in an additional bedroom and a full bathroom to create the perfect retreat for overnight guests.",
    },
    "gram-mercy-park-2": {
        id: 2,
        title: "Gram Mercy Park",
        category: "Furniture Redesign",
        images: [
            singlePortfolioImage1,
            singlePortfolioImage2,
            singlePortfolioImage3,
            singlePortfolioImage4,
            singlePortfolioImage5,
            singlePortfolioImage6,
        ],
        description:
            "This charming 5,000+ square foot home is set in Snohomish, a small town known for its farmlands about 30 miles northeast of Seattle. When our clients first came to us at the end of 2019, they had just purchased this home and the 5 acres of land it sits on. The stunning views of the Cascades and Snohomish Valley were undeniable. This home was full of possibilities, and our clients were ready to make this their forever home for their family of six.\nThe main level of this home had a good overall layout, but it needed some updates to accommodate our client's needs better. We primarily solved this with space planning by eliminating some spaces to create others. Our clients wanted a mudroom, so we removed an unused hall closet and converted the large full bathroom to a powder room. This allowed for a nice landing space off the garage entrance. We also decided to close off the formal dining room and convert it into a hidden butler's pantry. Since there was already enough space between the family room and kitchen to have a substantial dining table, it made sense to have the unused dining room be used more functionally to accommodate the needs of this on-the-go family. After re-envisioning their main floor, we helped our clients select the perfect furnishings for their new space, balancing comfort with durability.\nThe second level needed minimal space planning, but we had so much fun creating dream-worthy bedrooms for each of them. Wainscot wall treatments and wallpaper transformed much of the upstairs spaces, giving each bedroom its own distinct personality and style. Rustic wood shiplap and deep navy tones were used to define the boys' rooms, while soft pinks, peaches, and purples were used to make an idyllic little girls' room. The primary bedroom was transformed into a relaxing oasis through the use of a neutral grasscloth wallpaper that adds texture, warmth, and a bit of sophistication to the space.\nThe basement was essentially unfinished, so we started from scratch and completely re-envisioned the downstairs area. We added a large entertainment area complete with a show-stopping wet bar, a large plush sectional, and beautifully painted built-ins. This room opens up to the backyard with sweeping views of the Cascades, so we added a folding door system to connect the indoors and outdoors for seamless entertaining. We also managed to squeeze in an additional bedroom and a full bathroom to create the perfect retreat for overnight guests.",
    },
    "gram-mercy-park-3": {
        id: 3,
        title: "Gram Mercy Park",
        category: "Furniture Redesign",
        images: [
            singlePortfolioImage1,
            singlePortfolioImage2,
            singlePortfolioImage3,
            singlePortfolioImage4,
            singlePortfolioImage5,
            singlePortfolioImage6,
        ],
        description:
            "This charming 5,000+ square foot home is set in Snohomish, a small town known for its farmlands about 30 miles northeast of Seattle. When our clients first came to us at the end of 2019, they had just purchased this home and the 5 acres of land it sits on. The stunning views of the Cascades and Snohomish Valley were undeniable. This home was full of possibilities, and our clients were ready to make this their forever home for their family of six.\nThe main level of this home had a good overall layout, but it needed some updates to accommodate our client's needs better. We primarily solved this with space planning by eliminating some spaces to create others. Our clients wanted a mudroom, so we removed an unused hall closet and converted the large full bathroom to a powder room. This allowed for a nice landing space off the garage entrance. We also decided to close off the formal dining room and convert it into a hidden butler's pantry. Since there was already enough space between the family room and kitchen to have a substantial dining table, it made sense to have the unused dining room be used more functionally to accommodate the needs of this on-the-go family. After re-envisioning their main floor, we helped our clients select the perfect furnishings for their new space, balancing comfort with durability.\nThe second level needed minimal space planning, but we had so much fun creating dream-worthy bedrooms for each of them. Wainscot wall treatments and wallpaper transformed much of the upstairs spaces, giving each bedroom its own distinct personality and style. Rustic wood shiplap and deep navy tones were used to define the boys' rooms, while soft pinks, peaches, and purples were used to make an idyllic little girls' room. The primary bedroom was transformed into a relaxing oasis through the use of a neutral grasscloth wallpaper that adds texture, warmth, and a bit of sophistication to the space.\nThe basement was essentially unfinished, so we started from scratch and completely re-envisioned the downstairs area. We added a large entertainment area complete with a show-stopping wet bar, a large plush sectional, and beautifully painted built-ins. This room opens up to the backyard with sweeping views of the Cascades, so we added a folding door system to connect the indoors and outdoors for seamless entertaining. We also managed to squeeze in an additional bedroom and a full bathroom to create the perfect retreat for overnight guests.",
    },
    "gram-mercy-park-4": {
        id: 4,
        title: "Gram Mercy Park",
        category: "Furniture Redesign",
        images: [
            singlePortfolioImage1,
            singlePortfolioImage2,
            singlePortfolioImage3,
            singlePortfolioImage4,
            singlePortfolioImage5,
            singlePortfolioImage6,
        ],
        description:
            "This charming 5,000+ square foot home is set in Snohomish, a small town known for its farmlands about 30 miles northeast of Seattle. When our clients first came to us at the end of 2019, they had just purchased this home and the 5 acres of land it sits on. The stunning views of the Cascades and Snohomish Valley were undeniable. This home was full of possibilities, and our clients were ready to make this their forever home for their family of six.\nThe main level of this home had a good overall layout, but it needed some updates to accommodate our client's needs better. We primarily solved this with space planning by eliminating some spaces to create others. Our clients wanted a mudroom, so we removed an unused hall closet and converted the large full bathroom to a powder room. This allowed for a nice landing space off the garage entrance. We also decided to close off the formal dining room and convert it into a hidden butler's pantry. Since there was already enough space between the family room and kitchen to have a substantial dining table, it made sense to have the unused dining room be used more functionally to accommodate the needs of this on-the-go family. After re-envisioning their main floor, we helped our clients select the perfect furnishings for their new space, balancing comfort with durability.\nThe second level needed minimal space planning, but we had so much fun creating dream-worthy bedrooms for each of them. Wainscot wall treatments and wallpaper transformed much of the upstairs spaces, giving each bedroom its own distinct personality and style. Rustic wood shiplap and deep navy tones were used to define the boys' rooms, while soft pinks, peaches, and purples were used to make an idyllic little girls' room. The primary bedroom was transformed into a relaxing oasis through the use of a neutral grasscloth wallpaper that adds texture, warmth, and a bit of sophistication to the space.\nThe basement was essentially unfinished, so we started from scratch and completely re-envisioned the downstairs area. We added a large entertainment area complete with a show-stopping wet bar, a large plush sectional, and beautifully painted built-ins. This room opens up to the backyard with sweeping views of the Cascades, so we added a folding door system to connect the indoors and outdoors for seamless entertaining. We also managed to squeeze in an additional bedroom and a full bathroom to create the perfect retreat for overnight guests.",
    },
    "gram-mercy-park-5": {
        id: 5,
        title: "Gram Mercy Park",
        category: "Furniture Redesign",
        images: [
            singlePortfolioImage1,
            singlePortfolioImage2,
            singlePortfolioImage3,
            singlePortfolioImage4,
            singlePortfolioImage5,
            singlePortfolioImage6,
        ],
        description:
            "This charming 5,000+ square foot home is set in Snohomish, a small town known for its farmlands about 30 miles northeast of Seattle. When our clients first came to us at the end of 2019, they had just purchased this home and the 5 acres of land it sits on. The stunning views of the Cascades and Snohomish Valley were undeniable. This home was full of possibilities, and our clients were ready to make this their forever home for their family of six.\nThe main level of this home had a good overall layout, but it needed some updates to accommodate our client's needs better. We primarily solved this with space planning by eliminating some spaces to create others. Our clients wanted a mudroom, so we removed an unused hall closet and converted the large full bathroom to a powder room. This allowed for a nice landing space off the garage entrance. We also decided to close off the formal dining room and convert it into a hidden butler's pantry. Since there was already enough space between the family room and kitchen to have a substantial dining table, it made sense to have the unused dining room be used more functionally to accommodate the needs of this on-the-go family. After re-envisioning their main floor, we helped our clients select the perfect furnishings for their new space, balancing comfort with durability.\nThe second level needed minimal space planning, but we had so much fun creating dream-worthy bedrooms for each of them. Wainscot wall treatments and wallpaper transformed much of the upstairs spaces, giving each bedroom its own distinct personality and style. Rustic wood shiplap and deep navy tones were used to define the boys' rooms, while soft pinks, peaches, and purples were used to make an idyllic little girls' room. The primary bedroom was transformed into a relaxing oasis through the use of a neutral grasscloth wallpaper that adds texture, warmth, and a bit of sophistication to the space.\nThe basement was essentially unfinished, so we started from scratch and completely re-envisioned the downstairs area. We added a large entertainment area complete with a show-stopping wet bar, a large plush sectional, and beautifully painted built-ins. This room opens up to the backyard with sweeping views of the Cascades, so we added a folding door system to connect the indoors and outdoors for seamless entertaining. We also managed to squeeze in an additional bedroom and a full bathroom to create the perfect retreat for overnight guests.",
    },
    "gram-mercy-park-6": {
        id: 6,
        title: "Gram Mercy Park",
        category: "Furniture Redesign",
        images: [
            singlePortfolioImage1,
            singlePortfolioImage2,
            singlePortfolioImage3,
            singlePortfolioImage4,
            singlePortfolioImage5,
            singlePortfolioImage6,
        ],
        description:
            "This charming 5,000+ square foot home is set in Snohomish, a small town known for its farmlands about 30 miles northeast of Seattle. When our clients first came to us at the end of 2019, they had just purchased this home and the 5 acres of land it sits on. The stunning views of the Cascades and Snohomish Valley were undeniable. This home was full of possibilities, and our clients were ready to make this their forever home for their family of six.\nThe main level of this home had a good overall layout, but it needed some updates to accommodate our client's needs better. We primarily solved this with space planning by eliminating some spaces to create others. Our clients wanted a mudroom, so we removed an unused hall closet and converted the large full bathroom to a powder room. This allowed for a nice landing space off the garage entrance. We also decided to close off the formal dining room and convert it into a hidden butler's pantry. Since there was already enough space between the family room and kitchen to have a substantial dining table, it made sense to have the unused dining room be used more functionally to accommodate the needs of this on-the-go family. After re-envisioning their main floor, we helped our clients select the perfect furnishings for their new space, balancing comfort with durability.\nThe second level needed minimal space planning, but we had so much fun creating dream-worthy bedrooms for each of them. Wainscot wall treatments and wallpaper transformed much of the upstairs spaces, giving each bedroom its own distinct personality and style. Rustic wood shiplap and deep navy tones were used to define the boys' rooms, while soft pinks, peaches, and purples were used to make an idyllic little girls' room. The primary bedroom was transformed into a relaxing oasis through the use of a neutral grasscloth wallpaper that adds texture, warmth, and a bit of sophistication to the space.\nThe basement was essentially unfinished, so we started from scratch and completely re-envisioned the downstairs area. We added a large entertainment area complete with a show-stopping wet bar, a large plush sectional, and beautifully painted built-ins. This room opens up to the backyard with sweeping views of the Cascades, so we added a folding door system to connect the indoors and outdoors for seamless entertaining. We also managed to squeeze in an additional bedroom and a full bathroom to create the perfect retreat for overnight guests.",
    },
};
