import { IconType } from "@/common/types";

export const MailIcon = ({ scale = 1 }: IconType) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width={scale * 24}
        height={scale * 25}
        viewBox='0 0 24 25'
        fill='none'>
        <path
            d='M4 4.47165C2.895 4.47165 2 5.36665 2 6.47165V18.4716C2 19.5766 2.895 20.4716 4 20.4716H20C21.105 20.4716 22 19.5766 22 18.4716V6.47165C22 5.36665 21.105 4.47165 20 4.47165H4ZM5.59766 6.47165H18.4023L12 10.4716L5.59766 6.47165ZM5 9.0986L12 13.4716L19 9.0986V18.4716H5V9.0986Z'
            fill='white'
        />
    </svg>
);
