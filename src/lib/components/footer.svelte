<script lang="ts">
	import { footerConfig } from '$lib/config/route'

	export let footerHeight: number

	const year = new Date().getFullYear()
</script>

<footer bind:clientHeight={footerHeight} class="flex justify-center py-6 text-primary/60">
	<p class="space-x-1 font-sans text-sm">
		Copyright &copy; {year}
		{footerConfig.title} <span class="text-xs">({footerConfig.author})</span>
	</p>
</footer>
