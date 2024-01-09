"use client";

import { PaymentData } from "@/types/general";
import { ColumnDef } from "@tanstack/react-table";
import { FaCaretDown } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";

// ! Note the distorted structure of the table was intentional and can be updated. As per the requirements given the page gave the look of the distorted table.

export const columns: ColumnDef<PaymentData>[] = [
	{
		accessorKey: "id",
		header: () => (
			<div className="text-secondary-grey font-inter flex items-center justify-start py-0">
				Order ID
			</div>
		),
		cell: ({ row }) => {
			const id = row.getValue("id") as string;

			return (
				<div className="text-tertiary-blue font-inter flx items-center justify-center w-full text-start">
					{id}
				</div>
			);
		},
	},
	{
		accessorKey: "orderDate",
		header: () => (
			<div className="text-secondary-grey font-inter flex items-center justify-start py-0">
				Order date
				<FaCaretDown size={20} className="ml-1" />
			</div>
		),
		cell: ({ row }) => {
			const orderDate = row.getValue("orderDate") as string;

			return (
				<div className="text-primary-dark font-inter flx items-center justify-center py-0.5 w-full text-start">
					{orderDate}
				</div>
			);
		},
	},
	{
		accessorKey: "orderAmount",
		header: () => (
			<div className="text-secondary-grey font-inter flex items-center justify-end rounded-md py-0">
				Order Amount
			</div>
		),
		cell: ({ row }) => {
			const orderAmount = row.getValue("orderAmount") as string;

			return (
				<div className="text-primary-dark font-inter flx items-center justify-end w-full text-end">
					{orderAmount}
				</div>
			);
		},
	},
	{
		accessorKey: "transactionFees",
		header: () => (
			<div className="text-secondary-grey font-inter flex items-center justify-end rounded-md">
				Transaction Fees
				<IoIosInformationCircleOutline size={20} className="ml-1" />
			</div>
		),
		cell: ({ row }) => {
			const transactionFees = row.getValue("transactionFees") as string;

			return (
				<div className="text-primary-dark font-inter flx items-center justify-center w-full text-end">
					{transactionFees}
				</div>
			);
		},
	},
];
