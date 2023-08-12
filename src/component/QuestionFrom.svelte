<script>
	import Progress from './Progress.svelte';
	import { questionsEn, questionsTH } from '../stores';
	import { mode, step } from '../stores';
	import Ribbin from '../Assets/IMG/Ribbin.png';

	export let lang = 'en' || 'th';

	const questionLen = questionsEn.length;
	$step = 0;

	function next() {
		if ($step < questionsEn.length - 1) {
			$step += 1;
		}
	}
	function prev() {
		if ($step > 0) {
			$step -= 1;
		} else {
			$step = 0;
		}
	}
</script>

<div
	style="
	background-image: url({Ribbin});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	"
	class="-z-50 fixed w-full h-[100dvh] space-y-5 flex flex-col justify-center items-center"
/>
<div class="relative w-full space-y-5">
	<div class="h-10">
		<Progress {questionLen} />
	</div>
	<div class="w-full h-40 grid grid-rows-2 justify-items-center">
		<h1 class="text-4xl">{$step + 1}</h1>
		<div>
			{#if lang === 'en'}
				<h1 class="text-xl laptop:text-4xl">{questionsEn[$step].question}</h1>
				<div class="flex flex-col">
					<button class="text-lg laptop:text-2xl text-start">{questionsEn[$step].answers[0]}</button>
					<button class="text-lg laptop:text-2xl text-start">{questionsEn[$step].answers[1]}</button>
					<button class="text-lg laptop:text-2xl text-start">{questionsEn[$step].answers[2]}</button>
				</div>
			{:else}
				<h1 class="text-xl laptop:text-4xl">{questionsTH[$step].question}</h1>
				<div>
					<p class="text-lg laptop:text-2xl text-start">{questionsTH[$step].answers[0]}</p>
					<p class="text-lg laptop:text-2xl text-start">{questionsTH[$step].answers[1]}</p>
					<p class="text-lg laptop:text-2xl text-start">{questionsTH[$step].answers[2]}</p>
				</div>
			{/if}
		</div>
	</div>
	<div class="w-full h-28 flex flex-row justify-center items-center space-x-5">
		{#if $step == 0}
			<button class="text-2xl tablet:text-3xl py-1 px-6 tablet:py-2 tablet:px-8 border border-MainGray rounded-xl text-MainGray m-2" on:click={() => ($mode = 'intro')}>{lang === 'en' ? 'Prev' : 'กลับ'}</button>
		{:else}
			<button class="text-2xl tablet:text-3xl py-1 px-6 tablet:py-2 tablet:px-8 border border-MainGray rounded-xl text-MainGray m-2" on:click={prev}>{lang === 'en' ? 'Prev' : 'กลับ'}</button>
		{/if}
		<button class="text-2xl tablet:text-3xl py-1 px-6 tablet:py-2 tablet:px-8 bg-MainGreen rounded-xl text-MainWhite m-2" on:click={next}>{lang === 'en' ? 'Next' : 'ถัดไป'}</button>
	</div>
</div>
