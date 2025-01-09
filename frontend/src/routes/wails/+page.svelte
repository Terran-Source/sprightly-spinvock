<script lang="ts">
	import logo from '$assets/images/logo-wails.png';
	import { api } from '$lib';

	let resultText: string = 'Please enter your name below 👇';
	let name: string;

	const greet = () => {
		api.Greet(name).then((result) => (resultText = result));
	};
</script>

<main class="text-center">
	<img alt="Wails logo" id="logo" src={logo} />
	<p>Go <a href="/">Home</a></p>
	<div class="result" id="result">{resultText}</div>
	<div class="input-group input-group-divider grid-cols-[1fr_auto] w-[360px] mx-auto">
		<input autocomplete="off" bind:value={name} class="input" id="name" type="text" />
		<button type="button" class="variant-filled-tertiary" onclick={greet}>Greet</button>
	</div>
</main>

<style lang="postcss">
	#logo {
		display: block;
		width: 50%;
		height: 50%;
		margin: auto;
		padding: 10% 0 0;
		background-position: center;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		background-origin: content-box;
	}

	.result {
		height: 20px;
		line-height: 20px;
		margin: 1.5rem auto;
	}
</style>
