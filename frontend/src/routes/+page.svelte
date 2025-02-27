<script lang="ts">
	import { ln, msg } from '$lib';
	import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<h1>Welcome to SvelteKit {msg.lang()}: ({ln.languageTag()})</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<LightSwitch />
<p>Test the <a href="/lang">Language</a> pack</p>
<p>Test the <a href="/wails">Wails</a> demo</p>
