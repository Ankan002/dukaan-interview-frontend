import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

export interface ISidebarLink {
	name: string;
	ActiveLogo: LucideIcon | IconType;
	InactiveLogo: LucideIcon | IconType;
	link: string;
}
