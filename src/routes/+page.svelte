<script lang="ts">
	import '../app.css';
	import QuestionFrom from '../component/QuestionFrom.svelte';

	import Main from '../component/Main.svelte';
	import Consent from '../component/Consent.svelte';
	import Intro from '../component/Intro.svelte';
	import { mode } from '../stores';
	import { step } from '../stores';

	$step = 0;
	let lang = 'en' || 'th';
</script>

<div class="relative w-full h-[100dvh] space-y-5 flex flex-col justify-center items-center">
	<div class="fixed top-2 right-5 flex flex-row justify-center">
		<button class="text-2xl hover:underline hover:text-MainGreen" on:click={() => (lang = 'th')}>TH</button>
		<hr class="w-[2px] h-10 m-1 bg-MainBlack" />
		<button class="text-2xl hover:underline hover:text-MainGreen" on:click={() => (lang = 'en')}>EN</button>
	</div>


	{#if $mode == 'main'}
		<Main {lang} />
	{:else if $mode == 'consent'}
		<Consent {lang} />
	{:else if $mode == 'intro'}
		<Intro {lang} />
	{:else}
		<div>
			<h1 class="text-4xl font-bold">{$step + 1}</h1>
		</div>
		<QuestionFrom {lang} />
	{/if}
</div>

