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
                className={`w-full transition delay-100 duration-500  h-fit py-6 bg-[#000000]  px-6   ${
                    status ? "translate-y-0" : "-translate-y-[100%]"
                }`}
                onClick={(e) => e.stopPropagation()}>
                <div className='flex justify-end mb-3'>
                    <button className='' onClick={handleClose}>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='16'
                            viewBox='0 0 18 18'
                            fill='none'>
                            <path
                                d='M18 1.81286L16.1871 0L9 7.18714L1.81286 0L0 1.81286L7.18714 9L0 16.1871L1.81286 18L9 10.8129L16.1871 18L18 16.1871L10.8129 9L18 1.81286Z'
                                fill='white'
                            />
                        </svg>
                    </button>
                </div>
                <ul className='flex items-center flex-col gap-y-2  py-6 px-6'>
                    {routes
                        .filter((item) => item.id !== 6)
                        .map(({ path, title, id }) => {
                            return (
                                <li
                                    className={`flex items-center transition duration-200 text-[#FFFFFF] hover:rounded-md   h font-gordita rounded ${pathname === path ? "underline" : ""}`}
                                    key={id}>
                                    <Link
                                        className={`flex text-sm py-2 px-4 rounded-md font-medium cursor-pointer w-full hover:underline   items-center ${
                                            pathname === path
                                                ? " text-gray-50"
                                                : ""
                                        }`}
                                        onClick={handleClose}
                                        href={path}>
                                        {title}
                                    </Link>
                                </li>
                            );
                        })}
                </ul>
            </nav>
        </div>
    );
};

//  <svg
// xmlns='http://www.w3.org/2000/svg'
// width='18'
// height='18'
// viewBox='0 0 18 18'
// fill='none'>
// <path
//     d='M18 1.81286L16.1871 0L9 7.18714L1.81286 0L0 1.81286L7.18714 9L0 16.1871L1.81286 18L9 10.8129L16.1871 18L18 16.1871L10.8129 9L18 1.81286Z'
//     fill='white'
// />
