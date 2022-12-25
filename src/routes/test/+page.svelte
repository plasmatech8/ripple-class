<script>
	import '$lib';
</script>

<div style="position: absolute; top: 300px; left: 50px;">
	<button class="ripple custom-ripple" style="height: 600px; width: 200px">Click Me!</button>
</div>
<div
	class="ripple"
	style="overflow-y:scroll; width: 200px; height: 200px; background-color: black; color: white; margin-bottom: 300px;"
>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem amet necessitatibus facere
	dolorem a, cumque unde. Numquam doloremque voluptate assumenda eos facere omnis libero iure
	asperiores nisi officiis? Molestiae, maiores? <span style="color: red">Lorem</span> ipsum dolor sit
	amet, consectetur adipisicing elit. Illo, ducimus? Quod, placeat. Ducimus consequuntur libero ipsam
	necessitatibus aspernatur odit voluptatibus aliquid vel sed modi! Temporibus dolore maxime ratione
	repellendus harum!
</div>

<style>
	:root {
		background-color: gainsboro;
	}
	* {
		font-family: Arial, Helvetica, sans-serif;
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
</style>
