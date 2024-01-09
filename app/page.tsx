import { Sidebar } from "@/components/common";
import { PaymentsDashboard } from "@/components/payments-page";

export default function Home() {
	return (
		<>
			<Sidebar />
			<PaymentsDashboard />
		</>
	);
}
