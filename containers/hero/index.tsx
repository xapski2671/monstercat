"use client"
import Navbar from "../navbar"
import s from "./hero.module.sass"
import { motion } from "framer-motion"

export default function Hero() {
	return (
		<div className={s.hero}>
			<div className={s.bg_wrp}></div>
			<Navbar />
			<div className={s.nav_wrp}>
				<div className={s.nav}>
					<div className={s.item}>
						<div className={s.indicator}>
							<motion.div
								className={s.active}
								style={{ height: "100%", background: "white" }}
								initial={{ width: 0 }}
								animate={{
									width: "100%",
								}}
								transition={{
									duration: 2,
									ease: "linear",
									repeat: Infinity,
								}}
							></motion.div>
						</div>
						<div className={s.item_info_title}>Black friday</div>
						<div className={s.item_info}>Get early access</div>
					</div>

					<div className={s.item}>
						<div className={s.indicator}></div>
						<div className={s.item_info_title}>Black friday</div>
						<div className={s.item_info}>Get early access</div>
					</div>

					<div className={s.item}>
						<div className={s.indicator}></div>
						<div className={s.item_info_title}>Black friday</div>
						<div className={s.item_info}>Get early access</div>
					</div>

					<div className={s.item}>
						<div className={s.indicator}></div>
						<div className={s.item_info_title}>Black friday</div>
						<div className={s.item_info}>Get early access</div>
					</div>

					<div className={s.item}>
						<div className={s.indicator}></div>
						<div className={s.item_info_title}>Black friday</div>
						<div className={s.item_info}>Get early access</div>
					</div>
				</div>
			</div>

			<main
				className={s.main}
				style={{
					backgroundImage: "url('images/familiar_faces.webp')",
					backgroundRepeat: "no-repeat",
					width: "100%",
					height: "300px",
				}}
			></main>
		</div>
	)
}
