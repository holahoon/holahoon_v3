<script lang="ts">
	import ExternalLink from '../external-link.svelte'

	export let url: string
</script>

<h4 class="flex flex-col sm:flex-row sm:items-end">
	<ExternalLink {url} class="text-lg">
		<slot name="name">
			<span class="text-red-600">Missing company name</span>
		</slot>
	</ExternalLink>

	<span class="text-md text-primary/80 sm:ml-4">
		<slot name="location">
			<span class="text-red-600">Missing company location</span>
		</slot>
	</span>

	<span class="text-sm text-primary/80 sm:ml-2">
		<slot name="date">
			<span class="text-red-600">Missing date</span>
		</slot>
	</span>
</h4>
