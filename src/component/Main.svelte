<script lang="ts">
	import GdscSVG from '../Assets/SVG/gdscSVG.svelte';
	import { mode, name, lang } from '../stores';
	import Header from './Header.svelte';
</script>

<Header />
<div class="relative w-full h-40 flex flex-col items-center justify-center space-y-5">
	
	<div class="w-20 h-20 mobile:w-60 mobile:h-40 tablet:w-80 tablet:h-60 transition-all duration-1000">
		<GdscSVG />
	</div>
	<h1 class="text-3xl tablet:text-5xl font-bold">Tech(perso)nality Test</h1>
	<div class="flex flex-col items-center justify-center space-y-2">
		{#if $lang == 'th'}
			<div class="w-full h-full kanit flex flex-col items-center justify-center space-y-2">
				<h1 class="text-xl tablet:text-4xl font-bold">ถ้าคุณทำงานสายเทค คุณคือตำแหน่งใด</h1>
				<h2 class="text-lg tablet:text-3xl">อยากให้เราเรียกคุณว่าอะไร?</h2>
				<input class="border-4 w-[90dvw] tablet:w-[50dvw] h-10 tablet:h-16 p-2 border-MainBlue rounded-xl text-lg tablet:text-2xl" bind:value={$name} placeholder="ใส่ชื่อของคุณ" />
			</div>
		{:else}
			<h1 class="text-xl tablet:text-4xl font-bold">what are your position in tech ?</h1>
			<h2 class="text-lg tablet:text-3xl">what do you want me to call you ?</h2>
			<input class="border-4 w-[90dvw] tablet:w-[50dvw] h-10 tablet:h-16 p-2 border-MainBlue rounded-xl text-lg tablet:text-2xl" bind:value={$name} placeholder="Please enter your Name" />
		{/if}
	</div>

	<button class="text-2xl tablet:text-3xl py-1 px-6 tablet:py-2 tablet:px-8 bg-MainGreen rounded-xl text-MainWhite m-2" on:click={() => ($mode = 'consent')}>{$lang === 'en' ? 'Next' : 'ถัดไป'}</button>
</div>
