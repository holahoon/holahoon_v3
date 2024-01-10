<script lang="ts">
	import Resume from '$components/resume.svelte'

	export let data
</script>

<svelte:head>
	<title>Holahoon about me</title>
</svelte:head>

<Resume {data} />
