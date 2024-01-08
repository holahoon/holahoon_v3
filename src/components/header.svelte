<script lang="ts">
	import { page } from '$app/stores'
	import { links } from '$config/route'
	import { cn } from '$lib/utils/utils'
	import ThemeToggle from './theme-toggle.svelte'

	let path = ''
	$: updatePath($page.url.pathname)

	function updatePath(currentPath: string) {
		path = currentPath
	}
</script>

<header class="flex items-center">
	<a
		href="/"
		class={cn(
			'inline-block py-4 font-bold transition-colors duration-200',
			path === '/' && 'text-violet-700'
		)}>Holahoon</a
	>

	<nav class="ml-auto flex">
		<ul class="mr-8 flex">
			{#each links as { to, title }}
				<li>
					<a
						href={to}
						class="relative inline-block p-4 transition-colors duration-200 hover:text-violet-700"
					>
						{title}
						<span
							class={cn(
								'absolute bottom-0 left-0 h-[2px] w-full origin-right scale-x-0 bg-violet-700 transition-transform duration-300',
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
