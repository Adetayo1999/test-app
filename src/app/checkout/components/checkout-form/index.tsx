"use client";

import { Input } from "@/common/components/forms/input";
import Select from "@/common/components/forms/select";
import { formatCreditCardNumber, formatExpirationDate } from "@/utils/card";
import { useState } from "react";

export const CheckoutForm = () => {
    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        city: "",
        zip_code: "",
        card_name: "",
        card_number: "",
        card_cvv: "",
        card_expiry: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        let formValue = value;

        if (name === "card_number") {
            formValue = formatCreditCardNumber(value);
        }

        if (name === "card_expiry") {
            formValue = formatExpirationDate(value);
        }

        setData((prev) => ({ ...prev, [name]: formValue }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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
                <div className='flex flex-col gap-y-4'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-0 md:gap-x-4 '>
                        <Input
                            labelText='First name'
                            placeholder='First name'
                            onChange={handleInputChange}
                            name='first_name'
                            value={data.first_name}
                            required
                        />
                        <Input
                            labelText='Last name'
                            placeholder='Last name'
                            onChange={handleInputChange}
                            name='last_name'
                            value={data.last_name}
                            required
                        />
                    </div>
                    <Input
                        labelText='Email (Invoice will be sent to this address)'
                        placeholder='jondoe@gmail.com'
                        onChange={handleInputChange}
                        name='email'
                        value={data.email}
                        required
                    />
                    <Select options={[]} labelText='Country' hasDefaultOption />
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-0 md:gap-x-4 '>
                        <Input labelText='City/State' placeholder='City' />
                        <Input
                            labelText='Zip/Postal Code'
                            placeholder='Zip Code'
                            onChange={handleInputChange}
                            name='zip_code'
                            value={data.zip_code}
                            required
                        />
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='mb-6'>
                    <h3 className='font-bodoni text-[#161C2D] font-semibold text-xl md:text-2xl'>
                        Card details
                    </h3>
                </div>
                <div className='flex flex-col gap-y-4'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-0 md:gap-x-4 '>
                        <Input
                            labelText='Name on card'
                            placeholder='John Doe'
                            onChange={handleInputChange}
                            name='card_name'
                            value={data.card_name}
                            required
                        />
                        <Input
                            labelText='Expiry'
                            placeholder='06/2024'
                            onChange={handleInputChange}
                            name='card_expiry'
                            value={data.card_expiry}
                            required
                        />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-0 md:gap-x-4 '>
                        <Input
                            labelText='Card Number'
                            placeholder='11154 5665 6464 565'
                            onChange={handleInputChange}
                            name='card_number'
                            value={data.card_number}
                            required
                        />
                        <Input
                            labelText='CVV'
                            placeholder='234'
                            onChange={handleInputChange}
                            name='card_cvv'
                            value={data.card_cvv}
                            required
                        />
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <button className=' w-full px-6 rounded md:w-[40%] text-sm border-[#111111] py-3 border text-[#111111] font-medium'>
                    Pay Now
                </button>
            </div>
        </form>
    );
};
