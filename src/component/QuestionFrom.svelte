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

	// @ts-ignore
	function chooseStep(i) {
      step = i;
    }


	
</script>

<div>
	<div class="h-10 flex justify-center">
		<div class="">
			<div class=" flex flex-rows space-x-10 justify-center items-center text-center">
			{#each Array(questionLen) as _, i}
			  <button on:click={() => chooseStep(i)} class={`${i <= step ? 'bg-MainGreen' : ''} border-2 border-MainBlue w-5 h-5 rounded-full hover:transform hover:scale-1.6 hover:opacity-60 duration-200 `}></button>
			{/each}</div>
		</div>
	</div>
	
	<div class="w-full h-40 grid grid-rows-2 justify-items-center">
		{#if lang === 'en'}
			<h1 class="text-xl laptop:text-4xl">{questionsEn[step].question}</h1>
			<div class="flex flex-col space-y-6">
				<button class="text-lg laptop:text-2xl text-start bg-MainBlue border-White border">A. {questionsEn[step].answers[0]}</button>
				<button class="text-lg laptop:text-2xl text-start bg-MainBlue border-White border">B. {questionsEn[step].answers[1]}</button>
				<button class="text-lg laptop:text-2xl text-start bg-MainBlue border- border">C. {questionsEn[step].answers[2]}</button>
			</div>
		{:else}
			<h1 class="text-xl laptop:text-4xl">{questionsTH[step].question}</h1>
			<div>
				<p class="text-lg laptop:text-2xl text-start">A. {questionsTH[step].answers[0]}</p>
				<p class="text-lg laptop:text-2xl text-start">B. {questionsTH[step].answers[1]}</p>
				<p class="text-lg laptop:text-2xl text-start">C. {questionsTH[step].answers[2]}</p>
			</div>
		{/if}
	</div>
	<div class=" mt-20">
		<button class="text-2xl laptop:text-4xl hover:underline hover:text-MainGreen" on:click={prev}>Prev</button>
		<button class="text-2xl laptop:text-4xl hover:underline hover:text-MainGreen" on:click={next}>Next</button>
	</div>
</div>
