import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface Props {
	title: string;
	Icon: IconType | LucideIcon;
	className?: string;
	iconSize?: number;
}

const IconBtn = (props: Props) => {
	const { title, Icon, className, iconSize } = props;

	return (
		<button
			className={twMerge(
				"lg:p-2 md:p-1.5 p-1 rounded-full bg-primary-grey text-secondary-grey flex items-center justify-center",
				className
			)}
			aria-label={title}
		>
			<Icon size={iconSize ?? 20} />
		</button>
	);
};

export default IconBtn;
