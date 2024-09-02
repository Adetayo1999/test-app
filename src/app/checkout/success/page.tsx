"use client";
import { Container } from "@/common/components/skeleton/container";
import Image from "next/image";
import checkoutSuccessImage from "@/assets/images/checkout-success.png";
import Link from "next/link";
import { useEffect } from "react";
import { useCartStore } from "@/store/cart";

export default function CheckoutSuccess() {
    const { clearCart } = useCartStore();

    useEffect(() => {
        clearCart();
    }, [clearCart]);

    return (
        <div className='mt-16 md:mt-24 mb-16 min-h-[80vh]'>
            <Container>
                <div className='flex flex-col md:flex-row  mx-auto md:w-[80%] md:rounded-md overflow-hidden'>
                    <div className='md:flex-[0.4] h-[20rem] md:h-fit flex-shrink-0 overflow-hidden rounded-md md:rounded-none'>
                        <Image
                            src={checkoutSuccessImage}
                            alt='Checkout Success'
                            className='w-full h-full object-cover object-bottom'
                        />
                    </div>
                    <div className='md:flex-[0.6] flex flex-col gap-y-8 p-6  md:p-12 '>
                        <div className=''>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='40'
                                height='40'
                                viewBox='0 0 40 40'
                                fill='none'>
                                <path
                                    fillRule='evenodd'
                                    clipRule='evenodd'
                                    d='M12.5034 10H24.3834C25.8738 10.0022 27.3024 10.5958 28.3555 11.6505C29.4086 12.7051 30.0001 14.1346 30.0001 15.625V31.25C31.3262 31.25 32.5979 30.7232 33.5356 29.7855C34.4733 28.8479 35.0001 27.5761 35.0001 26.25V10.18C35.0001 7.67167 33.1251 5.495 30.5601 5.28C30.1864 5.24965 29.8125 5.22187 29.4384 5.19667C29.0165 4.38381 28.3795 3.70244 27.5968 3.2269C26.8142 2.75136 25.9159 2.49991 25.0001 2.5H22.5001C21.5843 2.49991 20.686 2.75136 19.9033 3.2269C19.1207 3.70244 18.4836 4.38381 18.0618 5.19667C17.6868 5.22167 17.3118 5.25 16.9401 5.28C14.4368 5.49167 12.5901 7.57 12.5034 10ZM22.5001 5C21.837 5 21.2012 5.26339 20.7323 5.73223C20.2635 6.20107 20.0001 6.83696 20.0001 7.5H27.5001C27.5001 6.83696 27.2367 6.20107 26.7678 5.73223C26.299 5.26339 25.6631 5 25.0001 5H22.5001Z'
                                    fill='#10B981'
                                />
                                <path
                                    fillRule='evenodd'
                                    clipRule='evenodd'
                                    d='M5 15.625C5 13.8983 6.4 12.5 8.125 12.5H24.375C26.1017 12.5 27.5 13.9 27.5 15.625V34.375C27.5 36.1 26.1 37.5 24.375 37.5H8.125C7.2962 37.5 6.50134 37.1708 5.91529 36.5847C5.32924 35.9987 5 35.2038 5 34.375V15.625ZM20.9767 23.2817C21.184 23.0226 21.2799 22.6919 21.2433 22.3621C21.2068 22.0324 21.0407 21.7306 20.7817 21.5233C20.5226 21.316 20.1919 21.2201 19.8621 21.2567C19.5324 21.2932 19.2306 21.4593 19.0233 21.7183L14.8967 26.8783L13.3833 25.3667C13.1464 25.1459 12.833 25.0257 12.5091 25.0314C12.1853 25.0371 11.8763 25.1683 11.6473 25.3973C11.4183 25.6263 11.2871 25.9353 11.2814 26.2591C11.2757 26.583 11.3959 26.8964 11.6167 27.1333L14.1167 29.6333C14.241 29.7576 14.3901 29.8543 14.5544 29.917C14.7186 29.9798 14.8942 30.0072 15.0698 29.9974C15.2453 29.9876 15.4168 29.941 15.5731 29.8604C15.7293 29.7799 15.8669 29.6673 15.9767 29.53L20.9767 23.2817Z'
                                    fill='#10B981'
                                />
                            </svg>
                        </div>
                        <h1 className='font-bodoni font-semibold text-lg md:text-2xl text-[#101828]'>
                            Order Successful
                        </h1>
                        <p className='text-sm md:text-base mb-6 text-[#667085]'>
                            Congratulations! Your order has been successfully
                            placed. An invoice will be sent to you shortly. Rest
                            assured, your order will be processed and shipped
                            within the next 24 hours. Expect a follow-up from
                            our team shortly.
                        </p>
                        <Link
                            href='/'
                            className=' w-full px-6 rounded md:w-[40%] text-sm border-[#111111] py-3 border text-[#111111] font-medium transition duration-300 hover:bg-[#111] hover:text-gray-50 text-center '>
                            Back to Homepage
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
}
