"use client";

import { PaymentsHeader } from "..";
import { HeaderStrip, PaymentCard } from "../elements";
import { usePaymentDashboard } from "./hook";

const PaymentsDashboard = () => {
	const { currentDuration } = usePaymentDashboard();

	return (
		<>
			<PaymentsHeader />

			<main className="bg-primary-light w-full min-h-screen pt-20 lg:pl-64">
				<div className="lg:px-5 px-3 flex flex-col">
					<HeaderStrip title="Overview" className="md:mt-1" />

					<div className="w-full flex sm:flex-row flex-col mt-3">
						<PaymentCard
							title="Online orders"
							value="231"
							className="sm:mr-3 mr-0 my-2 shadow-sm shadow-primary-grey/80"
						/>
						<PaymentCard
							title="Amount received"
							value="₹ 23,92,312.19"
							className="sm:mr-3 mr-0 my-2 shadow-sm shadow-primary-grey/80"
						/>
					</div>

					<HeaderStrip
						title={`Transactions | ${currentDuration}`}
						className="mt-5"
					/>
				</div>
			</main>
		</>
	);
};

export default PaymentsDashboard;
