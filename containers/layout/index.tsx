"use client"
import Script from "next/script"
import { ReactNode } from "react"
import s from "./layout.module.sass"

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<Script src="scripts/grained.min.js" />
			<Script id="monstercat-grain" strategy="lazyOnload">
				{`var options = {
					animate: true,
					patternWidth: 100,
					patternHeight: 100,
					grainOpacity: 0.02,
					grainDensity: 0.6,
					grainWidth: 1,
					grainHeight: 1,
				};
				grained('#monstercat', options);`}
			</Script>

			<div id="monstercat" className={s.monstercat}>
				{children}
			</div>
		</>
	)
}
