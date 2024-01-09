import { useState } from "react";

export const usePaymentsHeader = () => {
	const [searchTerm, setSearchTerm] = useState<string>("");

	const handleTextInput =
		(setState: React.Dispatch<React.SetStateAction<string>>) =>
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setState(e.target.value);
		};

	return {
		searchTerm,
		onSearchTermChange: handleTextInput(setSearchTerm),
	};
};
