import parse from 'parse-duration';

/**
 * Add a material ripple onto a HTML element.
 * Modified from https://codepen.io/vituja1/pen/oNWzNwq.
 * @param event MouseEvent object for click on a ripple target.
 */
export function rippleEffect(event: MouseEvent) {
	const btn = event.currentTarget as HTMLElement;

	const circle = document.createElement('span');
	const diameter = Math.max(btn.clientWidth, btn.clientHeight);
	const radius = diameter / 2;

	circle.style.width = circle.style.height = `${diameter}px`;
	const clientRect = btn.getBoundingClientRect();
	circle.style.left = `${event.clientX - clientRect.left + btn.scrollLeft - radius}px`;
	circle.style.top = `${event.clientY - clientRect.top + btn.scrollTop - radius}px`;
	circle.classList.add('ripple-object');
	btn.appendChild(circle);

	const duration = getComputedStyle(circle).getPropertyValue('--ripple-duration');
	setTimeout(() => circle.remove(), parse(duration));
}

// Add ripples
if (typeof document !== 'undefined') {
	const btns = document.querySelectorAll('.ripple');
	btns.forEach((b) => b.addEventListener('click', (event) => rippleEffect(event as MouseEvent)));
}
