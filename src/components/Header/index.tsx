import { component$ } from '@builder.io/qwik';
import styles from './index.module.css';

export default component$(() => {
	return (
		<div class={styles.container}>
			<h1 class={styles.name}>Philippe Chamard</h1>
			<p class={styles.description}>Web & mobile developer front-end</p>
			<p>Ceci est une citation</p>
		</div>
	);
});
