<script lang="ts">
	import { onMount } from 'svelte'
	import anime from 'animejs'

	onMount(() => {
		const tl = anime.timeline({ easing: 'easeOutQuint', duration: 500 })

		tl.add({
			targets: '.greetings',
			translateY: [60, 0]
		})
			.add(
				{
					targets: '.intro',
					translateY: [60, 0],
					opacity: [0, 1],
					duration: 800,
					delay: (_, i) => 50 * i
				},
				600
			)
			.add(
				{
					targets: '.job-title',
					translateY: [60, 0]
				},
				1300
			)
	})
</script>

<article class="flex h-full flex-col items-center justify-center">
	<hgroup>
		<h3 class="mb-4 overflow-hidden text-3xl font-semibold text-violet-700">
			<span class="greetings inline-block">Hola!</span>
		</h3>

		<h1 class="overflow-hidden text-5xl font-extrabold leading-tight">
			<span class="intro inline-block">I<span class="text-violet-700">'</span>m</span>
			<span class="intro inline-block">David</span>
			<span class="intro inline-block text-4xl">Myung</span>
			<span class="purple-text intro inline-block text-4xl text-violet-700">Hoon</span>
			<span class="intro inline-block">Kim</span><span class="intro inline-block text-violet-700"
				>,</span
			>
		</h1>

		<h2 class="mt-6 overflow-hidden text-4xl font-bold">
			<span class="job-title inline-block"
				>a Web Developer<span class="text-violet-700">.</span></span
			>
		</h2>
	</hgroup>
</article>
