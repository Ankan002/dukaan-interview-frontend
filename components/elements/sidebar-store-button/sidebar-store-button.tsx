import { ChevronDown } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface Props {
	image: StaticImageData | string;
	storeTitle: string;
	storeLink: string;
}

const SidebarStoreButton = (props: Props) => {
	const { image, storeTitle, storeLink } = props;

	return (
		<div className="w-full flex px-2 font-inter items-center pb-3">
			<Image
				src={image}
				alt={storeTitle}
				className="w-12 h-12 rounded-md"
			/>

			<div className="flex-grow h-12 flex flex-col ml-3 mr-1.5 justify-between">
				<h1 className="text-base text-primary-light pt-0">
					{storeTitle}
				</h1>

				<a
					className="pb-0 text-xs text-grey underline cursor-pointer"
					href={storeLink}
					target="_blank"
				>
					Visit Store
				</a>
			</div>

			<button
				className="text-primary-light hover:cursor-pointer"
				aria-label="More Options"
			>
				<ChevronDown size={25} />
			</button>
		</div>
	);
};

export default SidebarStoreButton;
