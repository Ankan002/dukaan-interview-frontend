"use client";

import { AiOutlineQuestionCircle } from "react-icons/ai";
import { usePaymentsHeader } from "./hook";
import { IconBtn, SearchBar } from "@/components/elements";
import { FaCaretDown } from "react-icons/fa6";
import { RiMessage2Fill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";

const PaymentsHeader = () => {
	const { searchTerm, onSearchTermChange } = usePaymentsHeader();

	return (
		<div className="w-full flex items-center lg:pl-64 fixed top-0 left-0 z-20 font-inter">
			<nav className="w-full flex justify-between items-center py-2.5 md:px-5 px-2 border-b border-grey bg-white">
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

				<div className="xl:w-96 lg:w-80 md:w-72 md:flex hidden">
					<SearchBar
						value={searchTerm}
						onChange={onSearchTermChange}
						title="Search features, tutorials, etc."
					/>
				</div>

				<div className="flex items-center">
					<IconBtn
						title="Search"
						Icon={IoSearch}
						className="md:hidden flex"
					/>
					<IconBtn
						title="Message"
						Icon={RiMessage2Fill}
						className="mx-2 md:mr-2 md:ml-0"
					/>
					<IconBtn title="Dropdown" Icon={FaCaretDown} />
				</div>
			</nav>
		</div>
	);
};

export default PaymentsHeader;
