import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { CartActions, CartState } from "../types";

export const useCartStore = create<CartState & CartActions>()(
    persist(
        (set) => ({
            cart: [],
            clearCart: () => set(() => ({ cart: [] })),
            addToCart: (product) => {
                set((store) => {
                    const exisitingProduct = store.cart.find(
                        (item) => item.id === product.id,
                    );

                    if (exisitingProduct) {
                        return {
                            cart: store.cart.map((item) => {
                                if (item.id !== exisitingProduct.id)
                                    return item;

                                return { ...item, quantity: item.quantity + 1 };
                            }),
                        };
                    }

                    return {
                        cart: [...store.cart, { ...product, quantity: 1 }],
                    };
                });
            },
            removeFromCart(id) {
                set((state) => ({
                    cart: state.cart.filter((item) => item.id !== id),
                }));
            },
            descreaseQuantity(id) {
                set((store) => {
                    const product = store.cart.find((item) => item.id === id);

                    if (!product)
                        return {
                            ...store,
                        };

                    if (product.quantity === 1)
                        return {
                            cart: store.cart.filter(
                                (item) => item.id !== product.id,
                            ),
                        };

                    product.quantity = product.quantity - 1;

                    return {
                        cart: store.cart.map((item) => {
                            if (item.id === product.id) return product;
                            return item;
                        }),
                    };
                });
            },
            increaseQuantity(id, qty = 1) {
                set((store) => {
                    const product = store.cart.find((item) => item.id === id);

                    if (!product)
                        return {
                            ...store,
                        };

                    if (product.quantity + qty < 1)
                        return {
                            ...store,
                        };

                    product.quantity = product.quantity + qty;

                    return {
                        cart: store.cart.map((item) => {
                            if (item.id === product.id) return product;
                            return item;
                        }),
                    };
                });
            },
        }),
        {
            name: "cart-storage",
            storage: createJSONStorage(() => sessionStorage),
        },
    ),
);
