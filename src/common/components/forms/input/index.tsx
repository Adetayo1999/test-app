import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    labelText: string;
}

export const Input: React.FC<InputProps> = ({ labelText, ...rest }) => {
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
        <div className='flex flex-col gap-y-2'>
            {renderInputLabel()}
            <input
                {...rest}
                className='border border-[#9CA3AF] px-[0.625rem] py-[0.8rem] text-sm placeholder:text-[#6B7280] outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-40 transition-all duration-200  shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]'
            />
        </div>
    );
};
