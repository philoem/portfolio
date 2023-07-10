import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import useMarkMenuItemActive from './hooks/useMarkMenuItemActive';
import styles from './index.module.css';
interface Navigation {
	id: number;
	title: string;
	url: string;
	current: boolean;
}

export default component$(() => {
	const { url } = useLocation();
	useMarkMenuItemActive();
	const navigation: Navigation[] = [
		{
			id: 1,
			title: 'About',
			url: `${url.href}#about`,
			current: false
		},
		{
			id: 2,
			title: 'Experiences',
			url: `${url.href}#experiences`,
			current: false
		},
		{
			id: 3,
			title: 'Projects',
			url: `${url.href}#projects`,
			current: false
		},
		{
			id: 4,
			title: 'Contact',
			url: `${url.href}#contact`,
			current: false
		}
	];

	return (
		<nav class={styles.navContainer}>
			<ul class={styles.ulList}>
				{navigation.map((item) => {
					return (
						<li class={styles.liNavbar} key={item.id}>
							<a href={item.url} class={styles.aLink}>
								<p class={styles.textMenu}>{item.title}</p>
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
});
