export const Buttons: React.FC<{
    title: string;
    className?: string;
    loading?: boolean;
}> = ({ title, className, loading }) => {
    return (
        <button
            className={`border cursor-pointer ${className}  border-black text-base  hover:bg-[#000] w-full md:w-[14rem] text-center py-2 rounded-lg hover:text-black font-medium flex justify-center gap-x-3 items-center disabled:opacity-40 disabled:cursor-not-allowed`}
            disabled={loading}>
            {loading && (
                <span className='h-[0.8rem] w-[0.8rem] rounded-full animate-spin border border-white border-t-transparent' />
            )}
            <span>{title}</span>
        </button>
    );
};
