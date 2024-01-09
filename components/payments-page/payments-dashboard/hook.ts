import { useState } from "react";

export const usePaymentDashboard = () => {
	const [currentDuration, setCurrentDuration] =
		useState<string>("Last Month");

	return {
		currentDuration,
	};
};
