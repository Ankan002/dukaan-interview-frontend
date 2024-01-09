"use client";

import { AiOutlineQuestionCircle } from "react-icons/ai";
import { usePaymentsHeader } from "./hook";
import { SearchBar } from "@/components/elements";

const PaymentsHeader = () => {
	const { searchTerm, onSearchTermChange } = usePaymentsHeader();

	return (
		<div className="w-full flex items-center lg:pl-64 fixed top-0 left-0 z-20 font-inter">
			<nav className="w-full flex justify-between items-center py-2.5 md:px-5 px-2 border border-grey bg-white">
				<div className="flex text-primary-dark items-center">
					<h1 className="">Payments</h1>
					<button
						className="rounded-full ml-2"
						aria-label="Help button"
					>
						<AiOutlineQuestionCircle />
					</button>
					<p className="text-sm text-secondary-grey md:flex hidden ml-1">
						How it works
					</p>
				</div>

				<div className="xl:w-96 lg:w-72 md:w-60 md:flex hidden">
					<SearchBar
						value={searchTerm}
						onChange={onSearchTermChange}
						title="Search features, tutorials, etc."
					/>
				</div>

				<div></div>
			</nav>
		</div>
	);
};

export default PaymentsHeader;
