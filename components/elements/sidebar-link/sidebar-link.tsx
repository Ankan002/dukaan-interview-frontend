import { ISidebarLink } from "@/types/general";
import Link from "next/link";

interface Props {
	sidebarLink: ISidebarLink;
	isActive: boolean;
}

const SidebarLink = (props: Props) => {
	const { sidebarLink, isActive } = props;
	const { ActiveLogo, InactiveLogo, link, name } = sidebarLink;

	return (
		<Link href={link} className="flex w-full my-1">
			<div
				className={`w-full px-3 py-2 flex items-center  ${
					isActive
						? "bg-secondary-blue text-primary-light"
						: "text-grey hover:bg-white/5 hover:text-primary-light/90"
				} rounded-md`}
			>
				{isActive ? (
					<ActiveLogo size={22} className="mr-3" />
				) : (
					<InactiveLogo size={22} className="mr-3" />
				)}

				<p>{name}</p>
			</div>
		</Link>
	);
};

export default SidebarLink;
