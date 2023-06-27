import { component$ } from '@builder.io/qwik';

export default component$(() => {
	return (
		<nav>
			<ul>
				<li>
					<a href='/about'>About</a>
				</li>
				<li>
					<a href='/experiences'>Experiences</a>
				</li>
				<li>
					<a href='/projects'>Projects</a>
				</li>
				<li>
					<a href='/contact'>Contact</a>
				</li>
			</ul>
		</nav>
	);
});
