import type { Metadata } from "next"
import "@/styles/globals.sass"
import Layout from "@/containers/layout"

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
				<Layout>{children}</Layout>
			</body>
		</html>
	)
}
