import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import NavBar from '~/components/NavBar';

export default component$(() => {
	return (
		<>
			<NavBar />
			<h1>Hi 👋</h1>
			<p>
				Can't wait to see what you build with qwik!
				<br />
				Happy coding.
			</p>
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
