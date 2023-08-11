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
;

	// @ts-ignore
	function chooseStep(i) {
      step = i;
    }


	
</script>

<div class=" ">
	<div class="h-10 ">
		<div class="">
			<div class=" flex flex-row justify-around  items-center text-center ">
			{#each Array(questionLen) as _, i}
			  <button on:click={() => chooseStep(i)} class={`${i <= step ? 'bg-MainGreen' : ''} border-2 border-MainBlue w-5 h-5 rounded-full hover:transform hover:scale-1.6 hover:opacity-60 duration-200 `}></button>
			{/each}</div>
		</div>
	</div>
	
	<div class="w-full h-40 flex flex-col ">
		{#if lang === 'en'}
			<h1 class="text-xl laptop:text-4xl mb-3">{questionsEn[step].question}</h1>
			<div class="flex flex-col space-y-5">
				<button  class="text-lg laptop:text-2xl text-start  border-MainWhite border rounded-lg h-12">A. {questionsEn[step].answers[0]}</button>
				<button class="text-lg laptop:text-2xl text-start border-MainWhite border rounded-lg h-12">B. {questionsEn[step].answers[1]}</button>
				<button class="text-lg laptop:text-2xl text-start  border-MainWhite border rounded-lg h-12">C. {questionsEn[step].answers[2]}</button>
			</div>
		{:else}
			<h1 class="text-xl laptop:text-4xl mb-3 ">{questionsTH[step].question}</h1>
			<div class="flex flex-col space-y-5 ">
				<button class="text-lg laptop:text-2xl text-start  border-MainWhite border rounded-lg">A. {questionsTH[step].answers[0]}</button>
				<button class="text-lg laptop:text-2xl text-start  border-MainWhite border rounded-lg">B. {questionsTH[step].answers[1]}</button>
				<button class="text-lg laptop:text-2xl text-start  border-MainWhite border rounded-lg">C. {questionsTH[step].answers[2]}</button>
				
			</div>
		{/if}
	</div>
	<div class=" mt-20 flex justify-center items-center space-x-5 laptop:space-x-8">
		<button class="text-sm laptop:text-4xl laptop:w-[150px] laptop:h-[50px]   bg-MainWhite border-MainWhite border w-[60px] h-[30px] rounded-md" on:click={prev}>Previous</button>
		<button class=" laptop:text-4xl laptop:w-[150px] laptop:h-[50px]  bg-MainRed text-MainWhite  w-[60px] h-[30px] text-sm rounded-md duration-300" on:click={next}>Next</button>
	</div>
</div>
