import { Container } from "@/common/components/skeleton/container";
import Link from "next/link";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { CheckoutForm } from "./components/checkout-form";

export default function Checkout() {
    return (
        <Container className='pt-[2rem] md:pt-[2.813rem] pb-20'>
            <div className='mb-6'>
                <Link href='/shop' className='flex items-center gap-x-2'>
                    <span>
                        <MdKeyboardArrowLeft className='text-lg' />
                    </span>
                    <span className='text-[#1F2937] text-xs  md:text-sm'>
                        Continue Shopping
                    </span>
                </Link>
            </div>
            <div className='flex flex-col gap-y-6 md:gap-y-14'>
                <div className='text-center border-[#11111133] border-b pb-4 mb-8'>
                    <h1 className='font-semibold font-bodoni text-2xl md:text-4xl mb-2'>
                        Check Out
                    </h1>
                    <p className='text-sm text-[#161C2D] text-opacity-70'>
                        Provide billing details
                    </p>
                </div>
                <CheckoutForm />
            </div>
        </Container>
    );
}
