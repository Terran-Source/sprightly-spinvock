<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { i18n, ln, msg } from '$lib';

	const switchToLanguage = (newLanguage: ln.AvailableLanguageTag) => {
		const canonicalPath = i18n.route($page.url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
		goto(localisedPath);
		// ln.setLanguageTag(newLanguage);
	};
</script>

<a href="/">Home</a>
<h1>{msg.hello_world({ name: 'World User' })}</h1>
<div>
	{#each ln.availableLanguageTags as lang}
		<button class="btn rounded-sm" onclick={() => switchToLanguage(lang)}>{lang}</button>
	{/each}
	<!-- <button onclick={() => switchToLanguage('en')}>English</button>
	<button onclick={() => switchToLanguage('es')}>Spanish</button> -->
</div>
