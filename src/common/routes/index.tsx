import { FaHome } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { FaBagShopping } from "react-icons/fa6";
import { LuContact } from "react-icons/lu";
import { MdPeople } from "react-icons/md";

export const routes = [
    {
        id: 1,
        title: "Home",
        path: "/",
        icon: <FaHome />,
    },
    {
        id: 2,
        title: "About",
        path: "/about",
        icon: <MdPeople />,
    },
    {
        id: 3,
        title: "Portfolio",
        path: "/portfolio",
        icon: <FaBriefcase />,
    },
    {
        id: 4,
        title: "Services",
        path: "/services",
        icon: <GrServices />,
    },
    {
        id: 5,
        title: "Shop",
        path: "/shop",
        icon: <FaBagShopping />,
    },
    {
        id: 6,
        title: "Contact",
        path: "/contact",
        icon: <LuContact />,
    },
];
