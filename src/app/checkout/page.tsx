import { Container } from "@/common/components/skeleton/container";
import Link from "next/link";
import { MdKeyboardArrowLeft } from "react-icons/md";

export default function Checkout() {
    return (
        <Container className='pt-[2.813rem] pb-20'>
            <div className='mb-6'>
                <Link href='/shop' className='flex items-center gap-x-2'>
                    <span>
                        <MdKeyboardArrowLeft className='text-lg' />
                    </span>
                    <span className='text-[#1F2937] text-sm'>
                        Continue Shopping
                    </span>
                </Link>
            </div>
            <div className=''>
                <div className='text-center border-[#11111133] border-b pb-4 mb-8'>
                    <h1 className='font-semibold font-bodoni text-2xl md:text-4xl mb-2'>
                        Your Cart
                    </h1>
                    <p className='text-sm text-[#161C2D] text-opacity-70'>
                        2 items added to your cart
                    </p>
                </div>
            </div>
        </Container>
    );
}
