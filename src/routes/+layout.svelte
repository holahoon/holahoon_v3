<script lang="ts">
	import { fly } from 'svelte/transition'
	import '$lib/styles/app.css'
	import Header from '$lib/components/header.svelte'
	import Footer from '$lib/components/footer.svelte'

	export let data
	$: ({ pathname } = data)
</script>

<svelte:head>
	<title>Holahoon</title>
</svelte:head>

<div class="mx-auto my-0 grid h-full max-w-screen-full grid-rows-[auto_1fr_auto] px-4 md:px-12">
	<Header />

	{#key pathname}
		<main in:fly={{ x: 10, duration: 2000, delay: 3000 }} out:fly={{ x: 10, duration: 2000 }}>
			<slot />
		</main>
	{/key}

	<Footer />
</div>
