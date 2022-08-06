/**
 * Logic to add material ripple to a HTML element.
 * Copied from https://codepen.io/vituja1/pen/oNWzNwq.
 * @param event Event object for click.
 */
export function rippleEffect(event: MouseEvent) {
	const btn = event.currentTarget as HTMLElement;

	const circle = document.createElement('span');
	const diameter = Math.max(btn.clientWidth, btn.clientHeight);
	const radius = diameter / 2;

	circle.style.width = circle.style.height = `${diameter}px`;
	circle.style.left = `${event.clientX - (btn.offsetLeft + radius)}px`;
	circle.style.top = `${event.clientY - (btn.offsetTop + radius)}px`;
	circle.classList.add('ripple-object');

	const ripple = btn.getElementsByClassName('ripple-object')[0];
	if (ripple) {
		ripple.remove();
	}
	btn.appendChild(circle);
}

// Add ripples
const btns = document.querySelectorAll('.ripple');
btns.forEach((b) => {
	b.addEventListener('click', (event) => rippleEffect(event as MouseEvent));
});
