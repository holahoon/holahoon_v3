<script lang="ts">
	import { fade } from 'svelte/transition'
	import { cubicOut, cubicIn } from 'svelte/easing'
	import Header from '$lib/components/header.svelte'
	import Footer from '$lib/components/footer.svelte'
	import { pageAnimation } from '$lib/config/animation'
	import '$lib/styles/app.css'

	export let data
	$: ({ pathname } = data)

	let headerHeight: number = 0
	let footerHeight: number = 0
</script>

<svelte:head>
	<title>Holahoon</title>
</svelte:head>

<Header bind:headerHeight />

{#key pathname}
	<main
		in:fade={{ duration: pageAnimation.duration, easing: cubicOut, delay: pageAnimation.delay }}
		out:fade={{ duration: pageAnimation.duration, easing: cubicIn }}
		class="main-height mx-auto flex w-full max-w-screen-full flex-col px-4 md:px-12"
		style={`--header-height: ${headerHeight}px; --footer-height: ${footerHeight}px`}
	>
		<slot />
	</main>
{/key}

<Footer bind:footerHeight />

<style>
	.main-height {
		min-height: calc(100% - (var(--header-height) + var(--footer-height)));
	}
</style>
