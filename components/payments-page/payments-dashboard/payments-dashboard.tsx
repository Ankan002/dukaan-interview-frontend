import { PaymentsHeader } from "..";
import { HeaderStrip } from "../elements";

const PaymentsDashboard = () => {
	return (
		<>
			<PaymentsHeader />
			
			<main className="bg-primary-light w-full min-h-screen pt-20 lg:pl-64">
				<div className="lg:px-5 px-3 flex flex-col">
					<HeaderStrip title="Overview" />
				</div>
			</main>
		</>
	);
};

export default PaymentsDashboard;
