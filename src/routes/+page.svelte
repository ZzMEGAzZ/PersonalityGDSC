<script lang="ts">
	import '../app.css';
	import QuestionFrom from '../component/QuestionFrom.svelte';

	import Main from '../component/Main.svelte';
	import Consent from '../component/Consent.svelte';
	import Intro from '../component/Intro.svelte';
	import { mode } from '../stores';
	import { step } from '../stores';

	$step = 0;

</script>

<div class="relative w-full h-[100dvh] space-y-5 flex flex-col justify-center items-center">
	{#if $mode == 'main'}
		<Main />
	{:else if $mode == 'consent'}
		<Consent />
	{:else if $mode == 'intro'}
		<Intro />
	{:else}
		<QuestionFrom />
	{/if}
</div>
