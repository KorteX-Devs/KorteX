import type { Metadata } from "next";
import "./globals.css";
import { satoshi } from "@/fonts/satoshi";
import { spaceGrotesk } from "@/fonts/space-grotesk";

export const metadata: Metadata = {
	title: "Kortex Tecnologia",
	description: "Comprometida com a inovação e a excelência em tecnologia.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${satoshi.variable} ${spaceGrotesk.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}

