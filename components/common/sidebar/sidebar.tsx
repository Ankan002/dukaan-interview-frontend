"use client";

import { SidebarStoreButton } from "@/components/elements";
import { storeDetails } from "@/constants/store-details";

const Sidebar = () => {
	// ! Note: this can be converted into a client component for dynamic data to reduce the cost of server side rendering.
	const { image, storeLink, storeTitle } = storeDetails;

	return (
		<div className="lg:w-64 w-56 lg:flex lg:flex-col hidden h-screen bg-primary-blue fixed top-0 left-0 py-4">
			<SidebarStoreButton
				image={image}
				storeLink={storeLink}
				storeTitle={storeTitle}
			/>

			{/* <div className="flex-1"></div> */}
		</div>
	);
};

export default Sidebar;