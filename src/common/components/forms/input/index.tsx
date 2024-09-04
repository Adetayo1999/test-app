import { InputHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    labelText: string;
    error?: FieldError;
}

export const Input: React.FC<InputProps> = forwardRef(
    ({ labelText, error, ...rest }, ref) => {
        const renderInputLabel = () => {
            if (typeof labelText === "string")
                return (
                    <label className={`text-sm text-[#111] font-medium`}>
                        {labelText}
                    </label>
                );
            return labelText;
        };

        return (
            <div className=''>
                <div className='flex flex-col gap-y-2'>
                    {renderInputLabel()}
                    <input
                        {...rest}
                        className='border border-[#9CA3AF] px-[0.625rem] py-[0.8rem] text-sm placeholder:text-[#6B7280] outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-40 transition-all duration-200  shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]'
                        ref={ref as any}
                    />
                </div>
                <div className='h-4'>
                    {error && (
                        <span className='text-xs text-red-500 '>
                            {error.message || "field required"}
                        </span>
                    )}
                </div>
            </div>
        );
    },
);

Input.displayName = "Input";
