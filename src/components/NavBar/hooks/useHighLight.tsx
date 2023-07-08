import { useVisibleTask$ } from '@builder.io/qwik';

const useHighLight = () => {
	useVisibleTask$(() => {
		document.querySelectorAll('p').forEach((item) => {
			item.addEventListener('click', () => {
				document.querySelectorAll('p').forEach((i) => {
					i.classList.remove('active');
					i.style.borderBottom = '';
				});
				item.classList.add('active');
				item.style.borderBottom = '3px solid #D1BD89';
			});
		});
	});
};
export default useHighLight;
