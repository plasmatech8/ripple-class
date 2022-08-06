<script lang="ts">
	import { browser } from '$app/env';
	if (browser) import('$lib');
</script>

<h1>Ripple Class Demo</h1>

<h2>Setup</h2>
TODO: package
<strike>
	<p>Import the ripple library.</p>
	<pre>{`import "ripple-class";`}</pre>
</strike>

<h2>Default</h2>
<p>You can change the defaut color by setting the <code>--ripple-color</code> CSS variable.</p>
<p>The default ripple color is set to <code>--ripple-light</code>.</p>
<div class="example">
	<pre>{`<button class="ripple">Click Me!</button>`}</pre>
	<div class="center"><button class="ripple">Click Me!</button></div>
</div>

<h2>Light</h2>
<p>Uses <code>--ripple-light</code></p>
<div class="example">
	<pre>{`<button class="ripple ripple-light">Click Me!</button>`}</pre>
	<div class="center"><button class="ripple">Click Me!</button></div>
</div>

<h2>Dark</h2>
<p>Uses <code>--ripple-dark</code></p>
<div class="example">
	<pre>{`<button class="ripple ripple-dark">Click Me!</button>`}</pre>
	<div class="center">
		<button class="ripple ripple-dark">Click Me!</button>
	</div>
</div>

<h2>Custom</h2>
<p>Make a custom ripple color by changing the <code>--ripple-color</code> CSS variable.</p>
<p>Below is a red ripple that starts with 50% transparency.</p>
<div class="example">
	<pre>{`<button class="ripple" style="--ripple-color: rgba(255, 0, 0, 0.8);">Click Me!</button>`}</pre>
	<div class="center">
		<button class="ripple" style="--ripple-color: rgba(255, 0, 0, 0.8);">Click Me!</button>
	</div>
</div>
<p>You can also modify the CSS directly. e.g.</p>
<pre>{`.ripple > .ripple-object {
    background-color: red;
}
.ripple-light > .ripple-object {
    background-color: blue;
}
.ripple-dark > .ripple-object {
    background-color: green;
}`}</pre>

<style>
	/* Heading */
	* {
		font-family: Arial, Helvetica, sans-serif;
	}

	/* Code Snippet */
	pre {
		background: #f4f4f4;
		border: 1px solid #ddd;
		border-left: 3px solid #f36d33;
		color: #666;
		page-break-inside: avoid;
		font-family: monospace;
		font-size: 15px;
		line-height: 1.6;
		margin-bottom: 1.6em;
		max-width: 100%;
		overflow: auto;
		padding: 1em 1.5em;
		display: block;
		word-wrap: break-word;
	}
	code {
		background: #f4f4f4;
		border: 1px solid #ddd;
		color: #666;
		page-break-inside: avoid;
		font-family: monospace;
		font-size: 15px;
	}

	/* Buttons */
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

	/* Example Area */
	.example {
		display: grid;
		gap: 1rem;
		grid-template-columns: 65% 35%;
	}
	.example > * {
		flex: 1;
	}
	.center {
		display: grid;
		place-items: center;
	}
</style>
