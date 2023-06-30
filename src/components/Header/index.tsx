import { component$ } from '@builder.io/qwik';
import styles from './index.module.css';

export default component$(() => {
	return (
		<div class={styles.container}>
			<h1 class={styles.name}>
				<a href='https://github.com/philoem' target='_blank' class={styles.aLink} rel='noreferrer'>
					Philippe Chamard
				</a>
			</h1>
			<p class={styles.description}>Web & mobile developer front-end</p>
			<p class={styles.citation}>Ceci est une citation</p>
		</div>
	);
});
