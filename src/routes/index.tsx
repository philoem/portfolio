import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Home from '~/pages/Home';

export default component$(() => {
	return (
		<>
			<Home />
		</>
	);
});

export const head: DocumentHead = {
	title: "Philoem's portfolio",
	meta: [
		{
			name: "It's my Qwik-designed portfolio",
			content: 'Portfolio built with Qwik'
		}
	],
	links: [
		{
			rel: 'canonical',
			href: 'https://github.com/philoem'
		}
	]
};
