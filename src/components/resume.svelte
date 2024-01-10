<script lang="ts">
	import type { Resume } from '$types/contents/types'

	export let data: Resume
</script>

<article class="prose">
	<svelte:component this={data.content} />
</article>
