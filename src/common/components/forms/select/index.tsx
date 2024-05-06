import React, { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<any> {
    labelText: string | React.ReactNode;
    options: { title?: string; value: string }[];
    hasDefaultOption?: boolean;
}

const Select: React.FC<SelectProps> = (
    { labelText, className, name, options, hasDefaultOption, ...rest },
    ref,
) => {
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
        <div>
            <div className='flex flex-col gap-y-2 '>
                {renderInputLabel()}
                <div className='relative'>
                    <select
                        className='border border-[#9CA3AF] px-[0.625rem] py-[0.8rem] text-sm placeholder:text-[#6B7280] outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-40 transition-all duration-200  shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] w-full'
                        name={name}
                        {...rest}>
                        {hasDefaultOption && (
                            <option value=''>Select an option</option>
                        )}
                        {options.map((item) => (
                            <option
                                key={item.value}
                                value={item.value}
                                className='capitalize'>
                                {item.title || item.value}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Select;
