<script>
	import Progress from './Progress.svelte';
	import { questionsEn, questionsTH } from '../stores';
	import { mode, step ,answers} from '../stores';
	import Ribbin from '../Assets/IMG/Ribbin.png';
	

	export let lang = 'en' || 'th';

	const questionLen = questionsEn.length;
	$step = 0;
	$answers = [];

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

	
	/**
 * Add answer to the answers array.
 * 
 * @param {string} answer 
 */
	function addAnswer(answer) {
		$answers[$step] = answer;
		// console.log($answers);
	}
	

	// $: console.log($answers);

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
	<div class="w-full h-40 grid grid-rows-2 justify-items-center ">
		<!-- <h1 class="text-4xl">{$step + 1}</h1> -->
		<div class="ml-3 mr-3">
			{#if lang === 'en'}
				<h1 class="text-xl laptop:text-4xl mb-3">{questionsEn[$step].question}</h1>
				<div class="flex flex-col space-y-4">
					<button on:click={ () =>addAnswer(questionsEn[$step].answers[0])} class="text-lg laptop:text-2xl text-start border-MainBlue border  rounded-lg p-1">A.{questionsEn[$step].answers[0]}</button>
					<button on:click={ () =>addAnswer(questionsEn[$step].answers[1])} class="text-lg laptop:text-2xl text-start border-MainBlue border rounded-lg p-1">B.{questionsEn[$step].answers[1]}</button>
					<button on:click={ () =>addAnswer(questionsEn[$step].answers[2])} class="text-lg laptop:text-2xl text-start border-MainBlue border rounded-lg p-1">C.{questionsEn[$step].answers[2]}</button>
				</div>
			{:else}
				<h1 class="text-xl laptop:text-4xl mb-3 kanit">{questionsTH[$step].question}</h1>
				<div class="flex flex-col space-y-4 kanit">
					<button on:click={ () =>addAnswer(questionsEn[$step].answers[0])} class="text-lg laptop:text-2xl text-start border-MainBlue border rounded-lg p-1">A.{questionsTH[$step].answers[0]}</button>
					<button on:click={ () =>addAnswer(questionsEn[$step].answers[1])} class="text-lg laptop:text-2xl text-start border-MainBlue border rounded-lg p-1">B.{questionsTH[$step].answers[1]}</button>
					<button on:click={ () =>addAnswer(questionsEn[$step].answers[2])} class="text-lg laptop:text-2xl text-start border-MainBlue border rounded-lg p-1">C.{questionsTH[$step].answers[2]}</button>
				</div>
			{/if}
			<div class="w-full h-28 flex flex-row justify-center items-center space-x-5">
				{#if $step == 0}
					<button class="text-2xl tablet:text-3xl py-1 px-6 tablet:py-2 tablet:px-8 border border-MainGray rounded-xl text-MainGray m-2 " on:click={() => ($mode = 'intro')}>{lang === 'en' ? 'Previous' : 'กลับ'}</button>
				{:else}
					<button class="text-2xl tablet:text-3xl py-1 px-6 tablet:py-2 tablet:px-8 border border-MainGray rounded-xl text-MainGray m-2" on:click={prev}>{lang === 'en' ? 'Previous' : 'กลับ'}</button>
				{/if}
				<button class="text-2xl tablet:text-3xl py-1 px-6 tablet:py-2 tablet:px-8 bg-MainGreen rounded-xl text-MainWhite m-2" on:click={next}>{lang === 'en' ? 'Next' : 'ถัดไป'}</button>
			</div>
		</div>
	</div>
	
</div>
