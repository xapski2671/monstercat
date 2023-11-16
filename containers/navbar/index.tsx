import s from "./navbar.module.sass"

export default function Navbar() {
	return (
		<div className={s.navbar}>
			<div className={s.wrp}>
				<img
					src="images/monstercat-logo.webp"
					alt="monstercat-logo"
					className={s.logo}
				/>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="36"
					height="36"
					viewBox="0 0 24 24"
					style={{ fill: "rgba(255, 255, 255, 1)" }}
				>
					<path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
				</svg>
			</div>
		</div>
	)
}
