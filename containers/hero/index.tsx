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

			<main className={s.main}>
				<div className={s.release_wrp}>
					<div className={s.release_date}>
						<p className={s.release_date_p}>
							<i>Silk</i> — Released November 14, 2023
						</p>
					</div>
					<div className={s.release_img_wrp}>
						<img
							src="images/familiar_faces.webp"
							alt="active_release"
							className={s.release_img}
						/>
					</div>
					<div className={s.release_info}>
						<h1 className={s.release_title}>familiar faces</h1>
						<h1 className={s.release_artist}>a.m.r</h1>
						<div className={s.release_cta_btns}>
							<button className={s.view_release_btn}>View release</button>
							<button className={s.player_listen_btn}>Listen on player</button>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}
