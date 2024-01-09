"use client";

import { OutlineBtn, SearchBar } from "@/components/elements";
import { useTableSection } from "./hook";
import { ArrowUpDown, ChevronLeft, ChevronRight, Download } from "lucide-react";
import { IoSearch } from "react-icons/io5";
import { PaymentsTable } from "../payments-table";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationPrevious,
} from "@/components/ui/pagination";

const TableSection = () => {
	const { searchTerm, onSearchTermChange } = useTableSection();

	return (
		<div className="w-full p-2 bg-white shadow-sm mt-4 rounded-md flex flex-col">
			<div className="w-full flex items-center justify-between">
				<div className="xl:w-56 lg:w-48 md:flex hidden">
					<SearchBar
						title="Search by order ID..."
						onChange={onSearchTermChange}
						value={searchTerm}
						className="bg-white border text-sm placeholder:text-sm border-primary-grey"
					/>
				</div>

				<div className="md:hidden flex items-center">
					<OutlineBtn
						RightIcon={IoSearch}
						iconSize={23}
						className="p-2 ml-1"
					/>
				</div>

				<div className="flex items-center">
					<OutlineBtn
						title="Sort"
						RightIcon={ArrowUpDown}
						textClassName="mr-1.5"
						iconSize={18}
						className="py-2 mr-1"
					/>
					<OutlineBtn
						RightIcon={Download}
						iconSize={23}
						className="p-2 ml-1"
					/>
				</div>
			</div>

			<PaymentsTable />

			<div className="w-full flex items-center justify-center mt-5">
				<Pagination>
					<PaginationContent>
						<PaginationItem>
							<OutlineBtn
								LeftIcon={ChevronLeft}
								leftIconSize={20}
								title="Previous"
								textClassName="ml-2 "
								className="px-1.5 py-1"
							/>
						</PaginationItem>

						<PaginationItem>
							<div className="px-1 py-1 mx-1">1</div>
						</PaginationItem>

						<PaginationItem>
							<div className="px-1 py-1 mx-1">...</div>
						</PaginationItem>

						<PaginationItem>
							<div className="px-2 py-1 mx-1 bg-tertiary-blue rounded-md text-white border border-primary-dark">
								10
							</div>
						</PaginationItem>

						<PaginationItem>
							<div className="px-1 py-1 mx-1">11</div>
						</PaginationItem>

						<PaginationItem>
							<OutlineBtn
								RightIcon={ChevronRight}
								iconSize={20}
								title="Next"
								textClassName="mr-1"
								className="px-1.5 py-1"
							/>
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			</div>
		</div>
	);
};

export default TableSection;
