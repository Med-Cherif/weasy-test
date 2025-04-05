import pathnames from "@/constants/pathnames";
import { IconType } from "react-icons";
import { LuLayoutDashboard, LuShoppingCart } from "react-icons/lu";

export interface NavLink {
  id: number;
  label: string;
  href: string;
  Icon: IconType;
}

const navLinks: NavLink[] = [
  {
    id: 1,
    label: "Dashboard",
    href: pathnames.DASHBOARD,
    Icon: LuLayoutDashboard,
  },
  {
    id: 2,
    label: "Products",
    href: pathnames.PRODUCTS,
    Icon: LuShoppingCart,
  },
];

export default navLinks;
