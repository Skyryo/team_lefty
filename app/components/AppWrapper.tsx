interface HeaderProps {
	children: React.ReactNode;
}
export default function AppWrapper(props: HeaderProps) {
	const { children } = props;
	return (
		<div
			className="min-h-screen flex flex-col items-center justify-center p-4"
			style={{ backgroundColor: "rgb(41, 76, 122)" }} // 背景色を直接指定
		>
			<h1 className="text-4xl font-bold mb-8 text-white">商店街の森</h1>
			{children}
		</div>
	);
}
