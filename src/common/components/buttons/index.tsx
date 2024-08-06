export const Buttons: React.FC<{ title: string; className?: string }> = ({
    title,
    className,
}) => {
    return (
        <button
            className={`border cursor-pointer ${className}  border-black text-base  hover:bg-[#000] w-full md:w-[200px] text-center py-2 rounded-lg hover:text-black font-medium`}>
            {title}
        </button>
    );
};
