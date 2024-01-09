interface Props {
	title: string;
}

const HeaderStrip = (props: Props) => {
	const { title } = props;

	return (
		<div className="w-full flex justify-between font-inter md:mt-1">
			<p className="xl:text-xl text-lg">{title}</p>
		</div>
	);
};

export default HeaderStrip;
