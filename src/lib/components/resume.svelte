<script lang="ts">
	import type { Resume } from '$lib/types/contents/types'

	export let data: Resume
</script>

<article class="prose max-w-none dark:prose-invert">
	<svelte:component this={data.content} />
</article>
