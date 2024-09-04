"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../forms/input";
import { Textarea } from "../forms/textarea";
import toast from "react-hot-toast";

interface ContactFormType {
    first_name: string;
    last_name: string;
    email: string;
    subject: string;
    message: string;
}

export const ContactForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
        reset,
    } = useForm<ContactFormType>();

    const handleContactFormSubmit: SubmitHandler<ContactFormType> = async (
        data,
    ) => {
        try {
            const response = await fetch("/api/contact", {
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
        }
    };

    return (
        <form
            className='flex flex-col gap-y-6'
            onSubmit={handleSubmit(handleContactFormSubmit)}>
            <div className='grid grid-cols-1 md:grid-cols-2  gap-y-6 md:gap-y-0 gap-x-5'>
                <div className=''>
                    <Input
                        labelText='First name'
                        placeholder='First Name'
                        {...register("first_name", { required: true })}
                        error={errors.first_name}
                    />
                </div>
                <div className=''>
                    <Input
                        labelText='Last name'
                        placeholder='Last name'
                        {...register("last_name", { required: true })}
                        error={errors.last_name}
                    />
                </div>
            </div>
            <Input
                labelText='Email'
                type='email'
                placeholder='jondoe@gmail.com'
                {...register("email", { required: true })}
                error={errors.email}
            />
            <Input
                labelText='Subject'
                placeholder='e.g Living room redesign'
                {...register("subject", { required: true })}
                error={errors.subject}
            />
            <Textarea
                labelText='Message'
                placeholder='Leave us a message...'
                {...register("message", { required: true })}
                error={errors.message}
            />
            <div className=''>
                <button className='border border-[#111] px-8 py-3 text-[#111] text-sm font-medium w-full md:w-fit transition duration-200 hover:bg-[#111] hover:text-gray-50'>
                    Submit
                </button>
            </div>
        </form>
    );
};
