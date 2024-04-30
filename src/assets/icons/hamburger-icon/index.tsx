import { IconType } from "@/common/types";

export const HamburgerIcon: React.FC<IconType> = ({ scale = 1 }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={scale * 36}
            height={scale * 36}
            viewBox='0 0 36 36'
            fill='none'>
            <g clip-path='url(#clip0_538_2031)'>
                <path
                    d='M4.5 27H31.5V24H4.5V27ZM4.5 19.5H31.5V16.5H4.5V19.5ZM4.5 9V12H31.5V9H4.5Z'
                    fill='white'
                />
            </g>
            <defs>
                <clipPath id='clip0_538_2031'>
                    <rect width='36' height='36' fill='white' />
                </clipPath>
            </defs>
        </svg>
    );
};
