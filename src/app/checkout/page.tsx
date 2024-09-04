"use client";
import { useRouter } from "next/navigation";
import { Container } from "@/common/components/skeleton/container";
import Link from "next/link";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { CheckoutForm } from "./components/checkout-form";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { useCartStore } from "@/store/cart";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
);

export default function Checkout() {
    const [loading, setLoading] = useState(true);
    const [clientSecret, setClientSecret] = useState();
    const { cart } = useCartStore();
    const router = useRouter();

    const options: StripeElementsOptions = {
        clientSecret,
    };

    useEffect(() => {
        if (cart.length === 0 || clientSecret) return;

        (async function () {
            try {
                setLoading(true);
                const request = await fetch("/api/checkout", {
                    method: "POST",
                    body: JSON.stringify({
                        cart_items: cart.map((item) => ({
                            id: item.id,
                            quantity: item.quantity,
                        })),
                    }),
                });
                const data = await request.json();

                if (data?.data?.client_secret) {
                    setClientSecret(data.data.client_secret);
                }
            } catch (error) {
                toast.error("Something went wrong try again");
                router.push("/cart");
            } finally {
                setLoading(false);
            }
        })();
    }, [cart, clientSecret, router]);

    useEffect(() => {
        if (!loading && !clientSecret) router.push("/");
    }, [loading, clientSecret, router]);

    useEffect(() => {
        if (cart.length === 0) router.push("/");
    }, [cart.length, router]);

    if (!clientSecret || loading) {
        return (
            <Container className='pt-[2rem] flex justify-center items-center md:pt-[2.813rem] pb-20 min-h-[60vh]'>
                <div className='flex gap-y-2 items-center text-center justify-center flex-col'>
                    <div className=' h-[2.5rem] w-[2.5rem] animate-spin rounded-full  border-black border-t-transparent border-2 ' />
                    <p className='text-sm animate-pulse'>Loading checkout...</p>
                </div>
            </Container>
        );
    }

    return (
        <Elements stripe={stripePromise} options={options}>
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
        </Elements>
    );
}
