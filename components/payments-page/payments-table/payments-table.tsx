"use client";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { usePaymentsTable } from "./hook";
import { flexRender } from "@tanstack/react-table";

// ! Note the distorted structure of the table was intentional and can be updated. As per the requirements given the page gave the look of the distorted table.

const PaymentsTable = () => {
	const { table, columns } = usePaymentsTable();

	return (
		<div className="w-full overflow-x-scroll mt-5">
			<Table>
				<TableHeader>
					{table.getHeaderGroups().map((headerGroup) => (
						<TableRow
							key={headerGroup.id}
							className="bg-primary-grey hover:bg-primary-grey border-none"
						>
							{headerGroup.headers.map((header, index) => (
								<TableHead
									key={header.id}
									className={`bg-primary-grey hover:bg-primary-grey ${
										index === 0 ? "rounded-l-md" : ""
									} ${
										index === headerGroup.headers.length - 1
											? "rounded-r-md"
											: ""
									} py-0.5 text-base font-normal`}
								>
									{header.isPlaceholder
										? null
										: flexRender(
												header.column.columnDef.header,
												header.getContext()
										  )}
								</TableHead>
							))}
						</TableRow>
					))}
				</TableHeader>
				<TableBody>
					{table.getRowModel().rows?.length ? (
						table.getRowModel().rows.map((row) => (
							<TableRow key={row.id}>
								{row.getVisibleCells().map((cell, index) => (
									<TableCell key={cell.id}>
										{flexRender(
											cell.column.columnDef.cell,
											cell.getContext()
										)}
									</TableCell>
								))}
							</TableRow>
						))
					) : (
						<TableRow>
							<TableCell
								colSpan={columns.length}
								className="h-24 text-center"
							>
								No results.
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
		</div>
	);
};

export default PaymentsTable;
