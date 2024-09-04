import { StaticImageData } from "next/image";

export type ProductType = {
    id: number;
    title: string;
    image: StaticImageData | string;
    amount: number;
};

export type CartItemType = {
    quantity: number;
} & ProductType;

export type CartState = {
    cart: CartItemType[];
};

export type CartActions = {
    addToCart: (product: ProductType) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
    increaseQuantity: (id: number, qty?: number) => void;
    descreaseQuantity: (id: number) => void;
};
