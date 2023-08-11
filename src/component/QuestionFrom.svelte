<script>

	import { questionsEn, questionsTH } from '../stores';
	
	

	export let lang = 'en' || 'th'

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

	function chooseStep(i) {
      step = i;
    }


	
</script>

<div>
	<div class="h-10">
		<div>
			<div class="flex flex-row justify-around">
			{#each Array(questionLen) as _, i}
			  <button on:click={() => chooseStep(i)} class={`${i <= step ? 'bg-MainGreen' : ''} border-2 border-MainBlue w-5 h-5 rounded-full`}></button>
			{/each}</div>
	  </div>
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
				<p class="text-lg laptop:text-2xl text-start">{questionsTH[step].answers[0]}</p>
				<p class="text-lg laptop:text-2xl text-start">{questionsTH[step].answers[1]}</p>
				<p class="text-lg laptop:text-2xl text-start">{questionsTH[step].answers[2]}</p>
			</div>
		{/if}
	</div>
	<div>
		<button class="text-2xl laptop:text-4xl hover:underline hover:text-MainGreen" on:click={prev}>Prev</button>
		{step}
		<button class="text-2xl laptop:text-4xl hover:underline hover:text-MainGreen" on:click={next}>Next</button>
	</div>
</div>
