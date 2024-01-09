<script lang="ts">
	import { footerConfig } from '$config/route'

	const year = new Date().getFullYear()
</script>

<footer class="my-6 flex justify-center text-primary/60">
	<p class="space-x-1 font-sans text-sm">
		Copyright &copy; {year}
		{footerConfig.title} <span class="text-xs">({footerConfig.author})</span>
	</p>
</footer>
