"use client"
import s from "./hero.module.sass"
import { AnimatePresence, motion } from "framer-motion"
import releases from "@/constants/releases.json"
import { useState } from "react"
import { wrap } from "popmotion"

const variants = {
	enter: (direction: number) => {
		return {
			x: direction > 0 ? 50 : -50,
			opacity: 0,
		}
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: (direction: number) => {
		return {
			zIndex: 0,
			x: direction < 0 ? 50 : -50,
			opacity: 0,
		}
	},
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
	return Math.abs(offset) * velocity
}

export default function Hero() {
	const [[currRelease, direction], setCurrRelease] = useState([0, 0])
	const releaseIndex = wrap(0, releases.length, currRelease)

	const paginate = (newDirection: number) => {
		setCurrRelease([currRelease + newDirection, newDirection])
		console.log(currRelease)
	}

	return (
		<div className={s.hero}>
			<div className={s.bg_wrp}></div>
			<div className={s.nav_wrp}>
				<div className={s.nav}>
					{releases.map((release, idx) => {
						return (
							<div
								className={s.item}
								key={idx}
								style={{ width: `${100 / releases.length}%` }}
							>
								<div className={s.indicator}>
									{releaseIndex == idx && (
										<motion.div
											className={s.active}
											style={{ height: "100%", background: "white" }}
											initial={{ width: 0 }}
											animate={{
												width: "100%",
											}}
											transition={{
												duration: 6,
												ease: "linear",
											}}
											onAnimationComplete={() => {
												paginate(1)
											}}
										></motion.div>
									)}
								</div>
								<div className={s.item_info_title}>
									{releases[releaseIndex].title}
								</div>
								<div className={s.item_info}>
									{releases[releaseIndex].artist}
								</div>
							</div>
						)
					})}
				</div>
			</div>

			<main className={s.main}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="54"
					height="54"
					viewBox="0 0 24 24"
					className={s.chev_left}
					onClick={() => {
						paginate(-1)
					}}
				>
					<path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
				</svg>

				<AnimatePresence initial={false} custom={direction} mode="wait">
					<motion.div
						className={s.release_wrp}
						key={currRelease}
						custom={direction}
						variants={variants}
						initial="enter"
						animate="center"
						exit="exit"
						transition={{
							x: { type: "spring", stiffness: 300, damping: 30 },
							opacity: { duration: 0.2 },
						}}
						drag="x"
						dragConstraints={{ left: 0, right: 0 }}
						dragElastic={1}
						onDragEnd={(e, { offset, velocity }) => {
							const swipe = swipePower(offset.x, velocity.x)

							if (swipe < -swipeConfidenceThreshold) {
								paginate(1)
							} else if (swipe > swipeConfidenceThreshold) {
								paginate(-1)
							}
						}}
						// initial={{ x: 300, opacity: 0 }}
						// animate={{ x: 0, opacity: 1 }}
						// exit={{ x: -300, opacity: 0 }}
						// transition={{ duration: 1 }}
					>
						<div className={s.release_date}>
							<p className={s.release_date_p}>
								<i>{releases[releaseIndex].brand}</i> —{" "}
								{releases[releaseIndex].date}
							</p>
						</div>
						<div className={s.release_img_wrp}>
							<img
								src={releases[releaseIndex].image}
								alt="active_release"
								className={s.release_img}
							/>
						</div>
						<div className={s.release_info}>
							<h1 className={s.release_title}>
								{releases[releaseIndex].title}
							</h1>
							<h1 className={s.release_artist}>
								{releases[releaseIndex].artist}
							</h1>
							<div className={s.release_cta_btns}>
								<button className={s.view_release_btn}>View release</button>
								<button className={s.player_listen_btn}>
									Listen on player
								</button>
							</div>
						</div>
					</motion.div>
				</AnimatePresence>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="54"
					height="54"
					viewBox="0 0 24 24"
					className={s.chev_right}
					onClick={() => {
						paginate(1)
					}}
				>
					<path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
				</svg>
			</main>
		</div>
	)
}
