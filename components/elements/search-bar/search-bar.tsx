"use client";

import { CiSearch } from "react-icons/ci";

interface Props {
	title: string;
	className?: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = (props: Props) => {
	const { title, className, value, onChange } = props;

	return (
		<div className="w-full relative flex items-center justify-center text-primary-dark font-light">
			<input
				className="w-full pl-10 pr-3 py-2 bg-primary-grey outline-none rounded-md placeholder:font-inter placeholder:text-base placeholder:font-light placeholder:text-primary-dark/60 text-base flex items-center"
				placeholder={title}
			/>
			<CiSearch size={21} className="absolute left-3" />
		</div>
	);
};

export default SearchBar;
