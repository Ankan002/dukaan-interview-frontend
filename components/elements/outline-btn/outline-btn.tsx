"use client";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface Props {
	title?: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	RightIcon?: IconType | LucideIcon;
	LeftIcon?: IconType | LucideIcon;
	className?: string;
	iconSize?: number;
	leftIconSize?: number;
	textClassName?: string;
}

const OutlineBtn = (props: Props) => {
	const {
		title,
		onClick,
		RightIcon,
		className,
		iconSize,
		textClassName,
		LeftIcon,
		leftIconSize,
	} = props;

	return (
		<button
			className={twMerge(
				"px-2.5 py-1.5 border border-secondary-grey/30 rounded-md flex items-center justify-center bg-white text-secondary-grey font-inter",
				className
			)}
			aria-label={title}
			onClick={onClick}
		>
			{LeftIcon && <LeftIcon size={leftIconSize ?? 22} />}

			{title && (
				<p className={twMerge("text-base font-light", textClassName)}>
					{title}
				</p>
			)}

			{RightIcon && <RightIcon size={iconSize ?? 22} />}
		</button>
	);
};

export default OutlineBtn;
