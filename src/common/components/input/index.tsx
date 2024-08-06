import { InputHTMLAttributes } from "react";

export const InputField: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
    title,
    placeholder,
    onChange,
    value,
}) => {
    return (
        <div className='w-full'>
            <input
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                title={title}
                className='px-4 border-[1px] border-gray text-base w-full py-2 focus:outline-none'
            />
        </div>
    );
};
