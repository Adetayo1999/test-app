

export const Buttons: React.FC<{ title: string }> = ({ title }) => {
    return (
        <button className="border-2 border-black text-[16px] hover:bg-[#000] w-full md:w-[200px] text-center py-2 rounded-lg hover:text-white">
            {title}
        </button>
    )
}