<script lang="ts">
	import { onMount } from 'svelte'
	import anime from 'animejs'
	import Resume from '$lib/components/resume.svelte'
	import { pageAnimation } from '$lib/config/animation.js'

	export let data

	onMount(() => {
		const tl = anime.timeline({
			easing: 'easeOutQuint',
			duration: 1000,
			delay: pageAnimation.delay
		})

		tl.add({
			targets: '.heading-wrapper',
			translateY: [-20, 0],
			opacity: [0, 1]
		}).add(
			{
				targets: '.description-wrapper *',
				opacity: [0, 1],
				delay: (_, i) => 50 * i
			},
			600
		)
	})
</script>

<svelte:head>
	<title>About Holahoon</title>
</svelte:head>

<section class="my-12">
	<h1 class="heading-wrapper mb-8 text-4xl font-extrabold">
		Hey there,
		<br />
		<span class="text-theme">Delighted</span> to meet you<span class="text-theme">!</span>
	</h1>

	<div class="description-wrapper space-y-2 text-lg">
		<p class="inline-block">
			My name is <strong class="text-theme">David Kim</strong>, residing in Atlanta, Georgia, USA.
			<span class="decoration-theme underline decoration-2">Myung Hoon</span> is my Korean name btw!
		</p>
		<p class="inline-block">
			I'm a <span class="decoration-theme underline decoration-2">frontend web developer</span> with
			a passion for crafting immersive user interfaces and delivering a friendly user experience that
			captivates and engages.
		</p>
		<p class="inline-block">
			I love dedicating my time to learn and constantly challenge myself to enhance my skills and
			expertise in a variety of fields.
		</p>
		<a href="/contact" class="text-theme"
			>I am currently exploring new career opportunities. <span
				class="decoration-theme underline decoration-2">Feel free to get in touch!</span
			></a
		>
	</div>
</section>

<Resume {data} />
