import type { Metadata } from "next"
import "@/styles/globals.sass"
import Layout from "@/containers/layout"
import Navbar from "@/containers/navbar"

export const metadata: Metadata = {
	title: "Monstercat",
	description: "Monstercat Music.",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<Layout>
					<Navbar />
					{children}
				</Layout>
			</body>
		</html>
	)
}
