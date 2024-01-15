<script lang="ts">
	export let url: string
</script>

<a href={url} target="_blank" class={$$props.class}>
	<slot />
</a>
