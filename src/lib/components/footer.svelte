<script lang="ts">
	import { footerConfig } from '$lib/config/route'

	const year = new Date().getFullYear()
</script>

<footer class="mt-6 flex justify-center py-8 text-primary/60">
	<p class="space-x-1 font-sans text-sm">
		Copyright &copy; {year}
		{footerConfig.title} <span class="text-xs">({footerConfig.author})</span>
	</p>
</footer>
