<script lang="ts">

	import {mode} from '../stores';
	export let lang = 'en' || 'th';
 	export let name = '';

</script>

<h1 class="text-xl laptop:text-5xl font-bold">Tech(perso)nality Test</h1>

<div class="w-full h-40 grid grid-rows-2 justify-items-center">
	{#if lang == 'th'}
		<h1 class="text-xl laptop:text-4xl">ถ้าคุณทำงานสายเทค คุณคือตำแหน่งใด</h1>
		<h2 class="text-lg laptop:text-3xl">อยากให้เราเรียกคุณว่าอะไร?</h2>
		<input class="border" bind:value={name} placeholder="ใส่ชื่อของคุณ" />
	{:else}
		<h1 class="text-xl laptop:text-4xl">what are your position in tech ?</h1>
		<h2 class="text-lg laptop:text-3xl">what do you want me to call you ?</h2>
		<input class="border" bind:value={name} placeholder="Enter your Name" />
	{/if}

	<button class="text-2xl laptop:text-4xl hover:underline hover:text-MainGreen" on:click={() =>$mode = 'consent'}>Next</button>
</div>
