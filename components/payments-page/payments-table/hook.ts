import { paymentData } from "@/constants/payment-data";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { columns } from "./column";

export const usePaymentsTable = () => {
	const table = useReactTable({
		data: paymentData,
		columns: columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return {
		table,
		columns,
	};
};
