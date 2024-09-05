"use client";
import { LiaTimesSolid } from "react-icons/lia";
import { Table } from "@/common/components/table";
import { TABLE_HEADER } from "@/common/data/cart-data";
import Image from "next/image";
import { useMemo } from "react";
import inputStyle from "@/assets/styles/input.module.css";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/cart";
import { formatCurrency } from "@/utils/currency";

export const CartTable = () => {
    const router = useRouter();
    const { cart, descreaseQuantity, increaseQuantity, removeFromCart } =
        useCartStore();

    const data = useMemo(
        () =>
            cart.map((item) => ({
                product: (
                    <div className='flex gap-x-3 items-center'>
                        <div className='w-[4.5rem] h-[4.5rem] rounded overflow-hidden'>
                            <Image
                                alt={item.title}
                                src={item.image}
                                width={72}
                                height={72}
                                className='w-full h-full object-cover'
                            />
                        </div>
                        <h4 className='font-medium'>{item.title}</h4>
                    </div>
                ),
                processing_time: (
                    <div className=''>
                        <p>12 Weeks</p>
                    </div>
                ),
                price: (
                    <p className='font-medium'>{formatCurrency(item.amount)}</p>
                ),
                quantity: (
                    <div className='flex gap-x-2 items-center'>
                        <button
                            className='w-7 h-7 rounded-full bg-[#E7E9ED] flex justify-center items-center text-[#161C2D] font-semibold'
                            onClick={() => descreaseQuantity(item.id)}>
                            -
                        </button>
                        <input
                            type='number'
                            name='quantity'
                            className={`${inputStyle.no_spinners} h-8 w-12 border border-[#D5D7DD] rounded p-2 outline-none`}
                            value={item.quantity}
                            disabled
                        />
                        <button
                            className='w-7 h-7 rounded-full bg-[#E7E9ED] flex justify-center items-center text-[#161C2D] font-semibold'
                            onClick={() => increaseQuantity(item.id)}>
                            +
                        </button>
                    </div>
                ),
                total: (
                    <p className='font-medium'>
                        {formatCurrency(item.amount * item.quantity)}
                    </p>
                ),
                action: (
                    <button onClick={() => removeFromCart(item.id)}>
                        <LiaTimesSolid className='text-lg text-[#81838C]' />
                    </button>
                ),
            })),

        [cart, increaseQuantity, descreaseQuantity, removeFromCart],
    );

    return (
        <div className=''>
            <div className='min-h-[20rem] flex flex-col gap-y-5'>
                <Table columns={TABLE_HEADER} data={data} />
                {cart.length > 0 ? (
                    <div className='flex justify-end items-center'>
                        <div className='w-[20%] pt-5 border-t-[#11111133] border-t'>
                            <p className='text-sm text-[#111111] flex gap-x-4 items-center'>
                                <span>TOTAL:</span>
                                <span className='  font-medium'>
                                    {formatCurrency(
                                        cart
                                            .map(
                                                (item) =>
                                                    item.quantity * item.amount,
                                            )
                                            .reduce(
                                                (prev, curr) => curr + prev,
                                            ),
                                    )}
                                </span>
                            </p>
                        </div>
                    </div>
                ) : null}
            </div>
            <div className='flex justify-center'>
                {cart.length > 0 ? (
                    <button
                        className=' w-full px-6 rounded md:w-[40%] text-sm border-[#111111] py-3 border text-[#111111] font-medium transition duration-300 hover:bg-[#111] hover:text-gray-50'
                        onClick={() => router.push("/checkout")}>
                        Proceed to checkout
                    </button>
                ) : null}
            </div>
        </div>
    );
};
