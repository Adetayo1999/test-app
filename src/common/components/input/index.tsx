import { InputHTMLAttributes, forwardRef } from "react";

export const InputField: React.FC<InputHTMLAttributes<HTMLInputElement>> =
    forwardRef((props, ref) => {
        return (
            <div className='w-full'>
                <input
                    {...props}
                    className='px-4 border-[1px] border-gray text-base w-full py-2 focus:outline-none'
                    ref={ref as any}
                />
            </div>
        );
    });

InputField.displayName = "InputField";
