import { InputType } from "@/common/types/input.types"

export const InputField : React.FC<InputType>= ({title, placeholder, onChange, value}) => {
    return (
        <div className="w-full">
            <input
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                title={title}
                className="px-4 border-[1px] border-gray text-[16px] w-full py-2 focus:outline-none"
            
            />
        </div>
    )
}