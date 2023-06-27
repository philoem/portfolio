import { component$ } from '@builder.io/qwik';

export default component$(() => {
	return (
		<nav>
			<a href='/about'>About</a>
			<a href='/experiences'>Experiences</a>
			<a href='/projects'>Projects</a>
			<a href='/contact'>Contact</a>
		</nav>
	);
});
