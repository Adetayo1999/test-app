import { useCartStore } from "@/store/cart";
import {
    useStripe,
    useElements,
    PaymentElement,
    AddressElement,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import toast from "react-hot-toast";

export const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [, setError] = useState<string>();
    const { clearCart } = useCartStore();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js hasn't yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        try {
            setLoading(true);
            const { error } = await stripe.confirmPayment({
                //`Elements` instance that was used to create the Payment Element
                elements,
                confirmParams: {
                    return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/checkout/payment-verification`,
                },
            });

            if (error) {
                toast.error(error.message || "Something went wrong, try again");
                setError(error.message);
            } else {
                clearCart();
            }
        } catch (err) {
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            className='w-full md:w-[50%] mx-auto flex flex-col gap-y-8'
            onSubmit={handleSubmit}>
            <div className=''>
                <div className='mb-6'>
                    <h3 className='font-bodoni text-[#161C2D] font-semibold text-xl md:text-2xl'>
                        Billing Details
                    </h3>
                </div>
            </div>
            <AddressElement
                options={{
                    mode: "shipping",
                    fields: {
                        phone: "always",
                    },
                }}
            />
            <PaymentElement />
            <div className='flex justify-center'>
                <button
                    className=' w-full px-6 rounded md:w-[40%] text-sm border-[#111111] py-3 border text-[#111111] font-medium flex justify-center gap-x-3 items-center transition duration-300 hover:bg-[#111] hover:text-gray-50 disabled:opacity-40 disabled:cursor-not-allowed '
                    disabled={loading}>
                    {loading && (
                        <span className='h-[0.8rem] w-[0.8rem] rounded-full animate-spin border border-black border-t-transparent' />
                    )}
                    <span>Pay Now</span>
                </button>
            </div>
        </form>
    );
};
