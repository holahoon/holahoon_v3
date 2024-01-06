<script lang="ts">
	import { scale } from 'svelte/transition'
	import { theme, toggleTheme } from '$lib/stores/theme-toggle'
	import Laptop from 'lucide-svelte/icons/laptop'
	import Sun from 'lucide-svelte/icons/sun'
	import Moon from 'lucide-svelte/icons/moon'
	import ScreenReader from './screen-reader.svelte'
</script>

<button aria-label="Toggle theme" on:click={toggleTheme}>
	{#if $theme === 'light'}
		<span in:scale>
			<Sun />
		</span>
	{:else if $theme === 'dark'}
		<span in:scale>
			<Moon />
		</span>
	{:else}
		<span in:scale>
			<Laptop />
		</span>
	{/if}
	<ScreenReader>Toggle theme</ScreenReader>
</button>

<style lang="scss">
	button {
		padding: var(--size-2);
		border-radius: var(--radius-6);
		background-color: var(--surface-1);
	}
</style>
