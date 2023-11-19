import s from "./mini_about.module.sass"
export default function MiniAbout() {
	return (
		<section className={s.mini_about}>
			<h2>Leading the movement towards artist sustainability</h2>
			<p>
				At Monstercat, we strive to create artist sustainability through novel
				partnerships, career flexibility and a global community
			</p>
			<button>Learn more {">"}</button>
		</section>
	)
}
