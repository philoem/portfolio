import { component$ } from '@builder.io/qwik';
import Header from '~/components/Header';
import NavBar from '~/components/NavBar';
import styles from './index.module.css';

export default component$(() => {
	return (
		<div class={styles.container}>
			<section class={styles.sectionLeft}>
				<Header />
				<NavBar />
			</section>
			<section class={styles.sectionRight}>
				<h2>About</h2>
				<h2>Experiences</h2>
				<h2>Projects</h2>
				<h2>Contact</h2>
			</section>
		</div>
	);
});
