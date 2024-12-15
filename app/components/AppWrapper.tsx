interface HeaderProps {
	children: React.ReactNode;
}
export default function AppWrapper(props: HeaderProps) {
	const { children } = props;
	return (
		<div
			className="min-h-screen flex flex-col items-center justify-center p-4"
			style={{ backgroundColor: "white" }} // 背景色を直接指定
		>
			{children}
		</div>
	);
}
