<script lang="ts">
	import Resume from '$lib/components/resume.svelte'

	export let data
</script>

<svelte:head>
	<title>about me</title>
</svelte:head>

<h1 class="mb-6 text-4xl">Hi!👋 My name is David Kim.</h1>

<p>I'm a web developer with nearly 4 years of professional experience.</p>

<Resume {data} />
