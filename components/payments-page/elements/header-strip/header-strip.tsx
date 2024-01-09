import { OutlineBtn } from "@/components/elements";
import {
	DropdownMenu,
	DropdownMenuItem,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { LuChevronDown } from "react-icons/lu";
import { twMerge } from "tailwind-merge";

type Props =
	| {
			title: string;
			className?: string;
			dropdown?: false;
	  }
	| {
			title: string;
			className?: string;
			dropdown: true;
			currentDuration: string;
	  };

const HeaderStrip = (props: Props) => {
	const { title, className, dropdown } = props;

	return (
		<div
			className={twMerge(
				"w-full flex justify-between font-inter mt-1",
				className
			)}
		>
			<div className="flex items-center">
				<p className="xl:text-xl text-lg">{title}</p>
			</div>

			{/* TODO: Build the dropdown if possible at end. */}

			{dropdown && (
				<OutlineBtn
					title={props.currentDuration}
					RightIcon={LuChevronDown}
				/>
			)}
		</div>
	);
};

export default HeaderStrip;
