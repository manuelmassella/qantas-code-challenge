import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import "./globals.css";

const roboto = Roboto({
	weight: ['400', '500', '600', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: "Search Hotels | Qantas Hotels",
	description: "Search and book hotels with Qantas Hotels",
	keywords: ["hotels", "accommodation", "Qantas Hotels"],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${roboto.className} antialiased`}>
				{children}
			</body>
		</html>
	);
}
