<script lang="ts">
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import '$lib';
	import { browser } from '$app/environment';

	if (browser) hljs.highlightAll();
	const installCode = hljs.highlight('bash', `*package does not exist*`).value;
	const importCode = hljs.highlight('typescript', `import "ripple-class";`).value;
	let customCssCode = hljs.highlight(
		'css',
		`.custom-ripple {
    --ripple-color: rgba(255, 0, 0, 0.8);     /* Default: rgba(255, 255, 255, 0.6) */
    --ripple-duration: 1200ms;                 /* Default: 600ms */
    --ripple-scale: 1;                                /* Default: 4 */
}`
	).value;
	const buttonCode = hljs.highlight('html', `<button class="ripple">Click Me!</button>`).value;
	const customButtonCode = hljs.highlight(
		'html',
		`<button class="ripple custom-ripple">Click Me!</button>`
	).value;
</script>

<div class="header">
	<h1>Ripple Class Demo</h1>
	<a class="github" href="https://github.com/plasmatech8/ripple-class">
		<svg width="3rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"
			><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
				d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
			/></svg
		>
		plasmatech8/ripple-class
	</a>
</div>

<h2>Setup</h2>
<p>Install the package.</p>
<pre class="ripple"><code>{@html installCode}</code></pre>
<p>Import the ripple library.</p>
<pre class="ripple"><code>{@html importCode}</code></pre>

<h2>Usage</h2>
<p>Add a ripple to a html element by adding the "ripple" class name.</p>
<pre class="ripple"><code>{@html buttonCode}</code></pre>
<button class="ripple">Click Me!</button>

<h2>Customization</h2>
<p>You can use the CSS variables to change the ripple color, duration and scale.</p>
<pre class="ripple custom-ripple"><code>{@html customCssCode}</code></pre>
<pre class="ripple custom-ripple"><code>{@html customButtonCode}</code></pre>
<button class="ripple custom-ripple">Click Me!</button>

<style>
	:root {
		background-color: gainsboro;
		padding: 0 1rem;
	}
	* {
		font-family: Arial, Helvetica, sans-serif;
	}
	pre {
		display: block;
		background-color: #161a22;
		color: #c8d1d9;
		padding: 1rem;
		border-radius: 1rem;
	}
	button {
		appearance: button;
		backface-visibility: hidden;
		background-color: #405cf5;
		border-radius: 6px;
		border-width: 0;
		box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset, rgba(50, 50, 93, 0.1) 0 2px 5px 0,
			rgba(0, 0, 0, 0.07) 0 1px 1px 0;
		box-sizing: border-box;
		color: #fff;
		cursor: pointer;
		font-family: -apple-system, system-ui, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif;
		font-size: 100%;
		height: 44px;
		line-height: 1.15;
		margin: 12px 0 0;
		outline: none;
		overflow: hidden;
		padding: 0 25px;
		position: relative;
		text-align: center;
		text-transform: none;
		transform: translateZ(0);
		transition: all 0.2s, box-shadow 0.08s ease-in;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
	}
	.custom-ripple {
		--ripple-color: rgba(255, 0, 0, 0.8);
		--ripple-duration: 1200ms;
		--ripple-scale: 1;
	}
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.github {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
</style>
