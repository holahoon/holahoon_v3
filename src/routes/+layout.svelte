<script lang="ts">
	import '$styles/app.css'

	import Header from '$components/header.svelte'
	import Footer from '$components/footer.svelte'
</script>

<svelte:head>
	<title>Holahoon</title>
</svelte:head>

<Header />

<main>
	<slot />
</main>

<Footer />
