import { GoHome, GoHomeFill } from "react-icons/go";
import { FaClipboardList } from "react-icons/fa6";
import { LuClipboardList, LuMousePointer2, LuZap } from "react-icons/lu";
import { FiTruck, FiUsers } from "react-icons/fi";
import { RiTruckFill } from "react-icons/ri";
import { BsBarChartLine, BsBarChartLineFill } from "react-icons/bs";
import { BiSolidPointer, BiSolidZap } from "react-icons/bi";
import { CiDiscount1 } from "react-icons/ci";
import { PiSquaresFour, PiSquaresFourFill } from "react-icons/pi";
import { AiOutlineSound, AiFillSound } from "react-icons/ai";
import {
	MdPeopleAlt,
	MdOutlinePalette,
	MdPalette,
	MdOutlinePayment,
	MdPayments,
} from "react-icons/md";

export const sidebarLinks = [
	{
		name: "Home",
		ActiveLogo: GoHomeFill,
		InactiveLogo: GoHome,
		link: "#",
		isActive: false,
	},
	{
		name: "Orders",
		ActiveLogo: FaClipboardList,
		InactiveLogo: LuClipboardList,
		link: "#",
		isActive: false,
	},
	{
		name: "Products",
		ActiveLogo: PiSquaresFourFill,
		InactiveLogo: PiSquaresFour,
		link: "#",
		isActive: false,
	},
	{
		name: "Delivery",
		ActiveLogo: RiTruckFill,
		InactiveLogo: FiTruck,
		link: "#",
		isActive: false,
	},
	{
		name: "Marketing",
		ActiveLogo: AiFillSound,
		InactiveLogo: AiOutlineSound,
		link: "#",
		isActive: false,
	},
	{
		name: "Analytics",
		ActiveLogo: BsBarChartLineFill,
		InactiveLogo: BsBarChartLine,
		link: "#",
		isActive: false,
	},
	{
		name: "Payments",
		ActiveLogo: MdPayments,
		InactiveLogo: MdOutlinePayment,
		link: "/",
		isActive: true,
	},
	{
		name: "Tools",
		ActiveLogo: BiSolidPointer,
		InactiveLogo: LuMousePointer2,
		link: "#",
		isActive: false,
	},
	{
		name: "Discounts",
		ActiveLogo: CiDiscount1,
		InactiveLogo: CiDiscount1,
		link: "#",
		isActive: false,
	},
	{
		name: "Audience",
		ActiveLogo: MdPeopleAlt,
		InactiveLogo: FiUsers,
		link: "#",
		isActive: false,
	},
	{
		name: "Appearance",
		ActiveLogo: BiSolidZap,
		InactiveLogo: LuZap,
		link: "#",
		isActive: false,
	},
	{
		name: "Plugins",
		ActiveLogo: MdPalette,
		InactiveLogo: MdOutlinePalette,
		link: "#",
		isActive: false,
	},
];
