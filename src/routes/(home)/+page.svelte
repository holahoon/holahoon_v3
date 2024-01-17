<script lang="ts">
	import { onMount } from 'svelte'
	import anime from 'animejs'
	import { pageAnimation } from '$lib/config/animation'

	onMount(() => {
		const tl = anime.timeline({ easing: 'easeOutQuint', duration: 500, delay: pageAnimation.delay })

		tl.add({
			targets: '.greetings',
			translateY: [-60, 0],
			opacity: [0, 1]
		})
			.add(
				{
					targets: '.intro',
					translateY: [60, 0],
					opacity: [0, 1],
					duration: 800,
					delay: (_, i) => 70 * i
				},
				600
			)
			.add(
				{
					targets: '.job-title',
					translateY: [60, 0]
				},
				1000
			)

		return () => {
			tl.pause()
		}
	})
</script>

<article class="flex h-full flex-1 flex-col items-center justify-center">
	<hgroup>
		<h3 class="text-theme mb-4 overflow-hidden text-3xl font-semibold">
			<span class="greetings inline-block">Hola!</span>
		</h3>

		<h1 class="overflow-hidden text-5xl font-extrabold leading-tight">
			<span class="intro inline-block">I<span class="text-theme">'</span>m</span>
			<span class="intro inline-block">David</span>
			<span class="intro inline-block text-4xl">Myung</span>
			<span class="purple-text intro text-theme inline-block text-4xl">Hoon</span>
			<span class="intro inline-block">Kim</span><span class="intro text-theme inline-block">,</span
			>
		</h1>

		<h2 class="mt-6 overflow-hidden text-4xl font-bold">
			<span class="job-title inline-block"
				>a Frontend Web Developer<span class="text-theme">.</span></span
			>
		</h2>
	</hgroup>
</article>
