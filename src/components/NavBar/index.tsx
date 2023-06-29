import { component$ } from '@builder.io/qwik';
import styles from './index.module.css';

export default component$(() => {
	return (
		<nav class={styles.navContainer}>
			<ul class={styles.ulList}>
				<li>
					<a href='/about' class={styles.aLink}>
						<p id={styles.about}>About</p>
					</a>
				</li>
				<li>
					<a href='/experiences' class={styles.aLink}>
						<p id={styles.experiences}>Experiences</p>
					</a>
				</li>
				<li>
					<a href='/projects' class={styles.aLink}>
						<p id={styles.projects}>Projects</p>
					</a>
				</li>
				<li>
					<a href='/contact' class={styles.aLink}>
						<p id={styles.contact}>Contact</p>
					</a>
				</li>
			</ul>
		</nav>
	);
});
