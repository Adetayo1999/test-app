import { routes } from "@/common/routes";
import Link from "next/link";
import { LiaTimesSolid } from "react-icons/lia";
import logo from "@/assets/images/white_logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface ModalNavbarProps {
    status: boolean;
    handleClose: VoidFunction;
}

export const MobileNavbar: React.FC<ModalNavbarProps> = ({
    handleClose,
    status,
}) => {
    const pathname = usePathname();

    return (
        <div
            className={` block md:hidden fixed top-0 left-0 w-full h-screen z-20 bg-black bg-opacity-40 ${
                status
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
            } transition duration-500`}
            onClick={handleClose}>
            <nav
                className={`w-[65%] transition delay-100 duration-500 bg-slate-50 h-full    ${
                    status ? "translate-x-0" : "-translate-x-[100%]"
                }`}
                onClick={(e) => e.stopPropagation()}>
                <div className='bg-[#111111] min-h-[6rem] flex justify-between items-center  mb-8 py-6 px-6'>
                    <Link
                        href='/'
                        className='flex items-center'
                        onClick={handleClose}>
                        <Image
                            src={logo}
                            alt='visacompanion'
                            className='w-20'
                        />
                    </Link>
                    <button
                        className='bg-gray-50 rounded-full p-2 text-[#111] font-semibold text-base'
                        onClick={handleClose}>
                        <LiaTimesSolid />
                    </button>
                </div>
                <ul className='flex flex-col gap-y-4  py-6 px-6'>
                    {routes.map(({ path, title, id, icon }) => {
                        if (title.toLowerCase() === "contact") {
                            return (
                                <li key={id} className='mt-8'>
                                    <Link
                                        href={path}
                                        onClick={handleClose}
                                        className='text-xs px-8 py-3 border rounded border-[#111] text-[#111] border-opacity-50  flex justify-center items-center gap-x-3 transition duration-200 hover:text-gray-50 hover:bg-[#111111] font-medium'>
                                        <span className='text-lg'>{icon}</span>
                                        <span>{title}</span>
                                    </Link>
                                </li>
                            );
                        }

                        return (
                            <li
                                className={`w-full flex items-center transition duration-200 text-[#111] hover:rounded-md   h font-medium rounded hover:text-gray-50 hover:bg-[#111111] ${pathname === path ? "text-gray-50 bg-[#111111]" : ""}`}
                                key={id}>
                                <Link
                                    className={`flex py-2 px-4 rounded-md cursor-pointer w-full h-14  items-center ${
                                        pathname === path ? " text-gray-50" : ""
                                    }`}
                                    onClick={handleClose}
                                    href={path}>
                                    <div className='flex text-xs items-center gap-x-4'>
                                        <span className='text-lg'>{icon}</span>
                                        <span className=''>{title}</span>
                                    </div>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
};
