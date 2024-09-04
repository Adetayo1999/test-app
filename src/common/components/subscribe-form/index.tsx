"use client";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

export const SubscribeForm = () => {
    const { register, handleSubmit, reset } = useForm<{ email: string }>();
    const [loading, setLoading] = useState(false);

    const handleSubscribeSubmit: SubmitHandler<{ email: string }> = async (
        data,
    ) => {
        try {
            setLoading(true);
            const response = await fetch("/api/subscribe", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const responseData = await response.json();

            if (response.status !== 200) {
                toast.error(responseData?.message || "Something went wrong");
                return;
            }

            toast.success(responseData.message);
            reset();
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message);
            } else toast.error("something went wrong try again");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            className='flex flex-col gap-y-2 md:gap-y-0 md:flex-row gap-x-3 items-center'
            onSubmit={handleSubmit(handleSubscribeSubmit)}>
            <input
                type='email'
                placeholder='Enter your email'
                className='md:flex-[0.7] px-2 py-2 text-sm w-full md:w-fit '
                {...register("email", { required: true })}
            />
            <button
                className='w-full md:w-fit md:flex-[0.3] text-sm py-2 border border-white border-opacity-50 rounded font-medium flex justify-center items-center gap-x-2 transition duration-300 hover:bg-gray-50 hover:text-[#111] disabled:opacity-40 disabled:cursor-not-allowed'
                disabled={loading}>
                {loading && (
                    <span className='h-[0.8rem] w-[0.8rem] rounded-full animate-spin border border-white border-t-transparent' />
                )}
                <span> Subscribe</span>
            </button>
        </form>
    );
};
