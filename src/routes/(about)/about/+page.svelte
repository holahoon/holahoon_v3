<script lang="ts">
	import Resume from '$lib/components/resume.svelte'

	export let data
</script>

<svelte:head>
	<title>about me</title>
</svelte:head>

<section class="my-12">
	<h1 class="mb-6 text-4xl font-extrabold">Hi!👋 It's a pleasure meeting you!</h1>

	<p>I'm a web developer with nearly 4 years of professional experience.</p>
	<p>Here's more about my skills and work experience.</p>
</section>

<Resume {data} />
