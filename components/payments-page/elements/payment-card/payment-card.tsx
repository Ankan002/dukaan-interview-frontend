import { twMerge } from "tailwind-merge";

interface Props {
	title: string;
	value: string;
	className?: string;
}

const PaymentCard = (props: Props) => {
	const { title, value, className } = props;

	return (
		<div
			className={twMerge(
				"flex-1 w-full px-4 py-4 flex flex-col bg-white rounded-md font-inter",
				className
			)}
		>
			<p className="text-sm text-secondary-grey/80">{title}</p>

			<p className="text-2xl text-primary-dark mt-3">{value}</p>
		</div>
	);
};

export default PaymentCard;
