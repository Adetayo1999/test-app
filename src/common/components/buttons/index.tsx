

export const Buttons: React.FC<{ title: string, className?: string }> = ({ title, className }) => {
    return (
        <button className={`border-2 cursor-pointer ${className}  border-black text-[16px]  hover:bg-[#000] w-full md:w-[200px] text-center py-2 rounded-lg hover:text-black`}>
            {title}
        </button>
    )
}