"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { Buttons } from "../buttons";
import { InputField } from "../input";
import toast from "react-hot-toast";

export const AiInitiativeForm: React.FC<{
    containerClassName: string;
    inputContainerClassName: string;
}> = ({ containerClassName, inputContainerClassName }) => {
    const { register, handleSubmit, reset } = useForm<{ email: string }>();

    const handleAiInitiativeSubmit: SubmitHandler<{ email: string }> = async (
        data,
    ) => {
        try {
            const response = await fetch("/api/waitlist", {
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
            className={containerClassName}
            onSubmit={handleSubmit(handleAiInitiativeSubmit)}>
            <div className={inputContainerClassName}>
                <InputField
                    placeholder={"Enter email"}
                    {...register("email", { required: true })}
                />
            </div>

            <Buttons
                title={"Join waitlist"}
                className='bg-[#000] text-white rounded-none hover:bg-[#fff] hover:text-black'
            />
        </form>
    );
};
