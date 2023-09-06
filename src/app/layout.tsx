import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "NextBite",
	description: "Food App using Next.js",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link
					rel="icon"
					type="image/x-icon"
					href="/logo.png"
					sizes="any"
				/>
			</head>
			<body className={inter.className}>
				{children}
				<Footer />
			</body>
		</html>
	);
}
