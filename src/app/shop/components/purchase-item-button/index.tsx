"use client";
import { ProductType } from "@/app/types/products";
import { useCartStore } from "@/store/cart";
import clsx from "clsx";
import toast from "react-hot-toast";

export const PurchaseItemButton: React.FC<{
    data: ProductType;
    variant?: boolean;
}> = ({ data, variant }) => {
    const { addToCart } = useCartStore();

    const handleAddToCart = () => {
        if (!data) return;

        addToCart({
            amount: 100,
            id: data.id,
            title: data.title,
            image: data.banner,
        });

        toast.success("Product added to cart");
    };

    return (
        <button
            onClick={handleAddToCart}
            className={clsx({
                "border px-10 py-3   text-sm font-medium  md:w-fit transition duration-200 ":
                    true,
                " border-[#111]  text-[#111]   hover:bg-[#111] hover:text-gray-50":
                    !variant,
                "border-white border-opacity-50 text-white hover:bg-white hover:text-[#111111]":
                    variant,
            })}>
            Purchase Item
        </button>
    );
};
