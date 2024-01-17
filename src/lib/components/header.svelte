<script lang="ts">
	import { page } from '$app/stores'
	import { headerConfig } from '$lib/config/route'
	import { cn } from '$lib/utils/utils'
	import ThemeToggle from './theme-toggle.svelte'

	export let headerHeight: number

	let path = ''
	$: updatePath($page.url.pathname)

	function updatePath(currentPath: string) {
		path = currentPath
	}
</script>

<header
	bind:clientHeight={headerHeight}
	class="sticky left-0 right-0 top-0 z-50 mx-auto flex w-full max-w-screen-full items-center bg-background px-4 md:px-12"
>
	<a
		href="/"
		class={cn(
			'inline-block py-3 text-xl font-bold transition-colors duration-200',
			path === '/' && 'text-theme'
		)}>{headerConfig.title}</a
	>

	<nav class="ml-auto flex">
		<ul class="mr-8 flex">
			{#each headerConfig.links as { to, title }}
				<li>
					<a
						href={to}
						class="hover:text-theme relative inline-block p-4 transition-colors duration-200"
					>
						{title}
						<span
							class={cn(
								'bg-theme absolute bottom-0 left-0 h-[2px] w-full origin-right scale-x-0 transition-transform duration-300',
								path === to && 'scale-x-1 origin-left'
							)}
						/>
					</a>
				</li>
			{/each}
		</ul>

		<ThemeToggle />
	</nav>
</header>
