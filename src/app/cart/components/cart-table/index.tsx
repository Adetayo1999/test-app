import { LiaTimesSolid } from "react-icons/lia";
import { Table } from "@/common/components/table";
import { TABLE_DATA, TABLE_HEADER } from "@/common/data/cart-data";
import Image from "next/image";
import { useMemo } from "react";
import inputStyle from "@/assets/styles/input.module.css";

export const CartTable = () => {
    const data = useMemo(
        () =>
            TABLE_DATA.map((item) => ({
                product: (
                    <div className='flex gap-x-3 items-center'>
                        <div className='w-[4.5rem] h-[4.5rem] rounded overflow-hidden'>
                            <Image
                                alt={item.title}
                                src={item.image}
                                className='w-full h-full object-cover'
                            />
                        </div>
                        <h4 className='font-medium'>{item.title}</h4>
                    </div>
                ),
                processing_time: (
                    <div className=''>
                        <p>{item.processing_time}</p>
                    </div>
                ),
                price: <p className='font-medium'>${item.price}</p>,
                quantity: (
                    <div className='flex gap-x-2 items-center'>
                        <button className='w-7 h-7 rounded-full bg-[#E7E9ED] flex justify-center items-center text-[#161C2D] font-semibold '>
                            -
                        </button>
                        <input
                            type='number'
                            name='quantity'
                            className={`${inputStyle.no_spinners} h-8 w-12 border border-[#D5D7DD] rounded p-2 outline-none`}
                        />
                        <button className='w-7 h-7 rounded-full bg-[#E7E9ED] flex justify-center items-center text-[#161C2D] font-semibold '>
                            +
                        </button>
                    </div>
                ),
                total: (
                    <p className='font-medium'>${item.price * item.quantity}</p>
                ),
                action: (
                    <button>
                        <LiaTimesSolid className='text-lg text-[#81838C]' />
                    </button>
                ),
            })),

        [],
    );

    return (
        <div className=''>
            <div className=''>
                <Table columns={TABLE_HEADER} data={data} />
            </div>
            <div className='flex justify-center'>
                <button className=' w-full px-6 rounded md:w-[40%] text-sm border-[#111111] py-3 border text-[#111111] font-medium'>
                    Proceed to checkout
                </button>
            </div>
        </div>
    );
};
