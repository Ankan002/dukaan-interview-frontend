import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { RecoilProvider } from "@/components/providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
	title: "Dukaan | Vogue Attire Admin",
	description: "Vogue Attire built on Dukaan...",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.variable}`}>
				<RecoilProvider>{children}</RecoilProvider>
			</body>
		</html>
	);
}
