"use client";

import {
	SidebarLink,
	SidebarStoreButton,
	SidebarStoreWallet,
} from "@/components/elements";
import { sidebarLinks } from "@/constants/sidebar-links";
import { storeDetails } from "@/constants/store-details";
import { storeWallet } from "@/constants/store-wallet-details";

const Sidebar = () => {
	// ! Note: this can be converted into a client component for dynamic data to reduce the cost of server side rendering.
	const { image, storeLink, storeTitle } = storeDetails;
	const { availableCredits } = storeWallet;

	return (
		<div className="lg:w-64 w-56 lg:flex lg:flex-col hidden h-screen bg-primary-blue fixed top-0 left-0 py-4 z-30">
			<SidebarStoreButton
				image={image}
				storeLink={storeLink}
				storeTitle={storeTitle}
			/>

			<div className="flex-1 flex flex-col px-2 overflow-y-auto">
				{sidebarLinks.map((sidebarLink, index) => (
					<SidebarLink
						key={index}
						sidebarLink={{
							ActiveLogo: sidebarLink.ActiveLogo,
							InactiveLogo: sidebarLink.InactiveLogo,
							link: sidebarLink.link,
							name: sidebarLink.name,
						}}
						isActive={sidebarLink.isActive}
					/>
				))}
			</div>

			<div className="pt-5 px-3">
				<SidebarStoreWallet creditAmount={availableCredits} />
			</div>
		</div>
	);
};

export default Sidebar;
