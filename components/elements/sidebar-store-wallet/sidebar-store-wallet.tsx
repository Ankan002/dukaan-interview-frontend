import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";
import { CiWallet } from "react-icons/ci";

interface Props {
	creditAmount: number;
	customTitle?: string;
	Icon?: IconType | LucideIcon;
}

const SidebarStoreWallet = (props: Props) => {
	const { creditAmount, customTitle, Icon } = props;

	return (
		<div className="bg-secondary-blue w-full p-2 rounded-md flex items-center font-inter">
			<div className="p-1 bg-white/10 w-fit text-primary-light flex items-center justify-center rounded-md">
				{Icon ? <Icon /> : <CiWallet size={25} />}
			</div>

			<div className="flex-1 ml-3 flex flex-col h-full justify-between">
				<p className="text-grey text-xs">
					{customTitle ? customTitle : "Available Credits"}
				</p>

				<p className="text-primary-light">{creditAmount.toFixed(2)}</p>
			</div>
		</div>
	);
};

export default SidebarStoreWallet;
