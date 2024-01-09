import { twMerge } from "tailwind-merge";

interface Props {
	title: string;
	className?: string;
}

const HeaderStrip = (props: Props) => {
	const { title, className } = props;

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
		</div>
	);
};

export default HeaderStrip;
