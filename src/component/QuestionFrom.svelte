<script>
	import Progress from './Progress.svelte';
	import { questionsEn, questionsTH } from '../stores';
	import { mode } from '../stores';

	export let lang = 'en' || 'th';

	const questionLen = questionsEn.length;
	let step = 0;

	function next() {
		if (step < questionsEn.length - 1) {
			step += 1;
		}
	}
	function prev() {
		if (step > 0) {
			step -= 1;
		} else {
			step = 0;
		}
	}
</script>

<div>
	<div class="h-10">
		<Progress {questionLen} {step} />
	</div>
	<div class="w-full h-40 grid grid-rows-2 justify-items-center">
		{#if lang === 'en'}
			<h1 class="text-xl laptop:text-4xl">{questionsEn[step].question}</h1>
			<div class="flex flex-col">
				<button class="text-lg laptop:text-2xl text-start">{questionsEn[step].answers[0]}</button>
				<button class="text-lg laptop:text-2xl text-start">{questionsEn[step].answers[1]}</button>
				<button class="text-lg laptop:text-2xl text-start">{questionsEn[step].answers[2]}</button>
			</div>
		{:else}
			<h1 class="text-xl laptop:text-4xl">{questionsTH[step].question}</h1>
			<div>
				<!-- test -->
				<p class="text-lg laptop:text-2xl text-start">{questionsTH[step].answers[0]}</p>
				<p class="text-lg laptop:text-2xl text-start">{questionsTH[step].answers[1]}</p>
				<p class="text-lg laptop:text-2xl text-start">{questionsTH[step].answers[2]}</p>
			</div>
		{/if}
	</div>
	<div>
		{#if step == 0}
			<button class="text-2xl laptop:text-4xl hover:underline hover:text-MainGreen" on:click={() => ($mode = 'intro')}>Prev</button>
		{:else}
			<button class="text-2xl laptop:text-4xl hover:underline hover:text-MainGreen" on:click={prev}>Prev</button>
		{/if}
		{step}
		<button class="text-2xl laptop:text-4xl hover:underline hover:text-MainGreen" on:click={next}>Next</button>
	</div>
</div>
