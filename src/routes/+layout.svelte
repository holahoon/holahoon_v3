<script lang="ts">
	import '$lib/styles/app.css'

	import Header from '$lib/components/header.svelte'
	import Footer from '$lib/components/footer.svelte'
</script>

<svelte:head>
	<title>Holahoon</title>
</svelte:head>

<div class="mx-auto my-0 grid h-full max-w-screen-full grid-rows-[auto_1fr_auto] px-4 md:px-12">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>
