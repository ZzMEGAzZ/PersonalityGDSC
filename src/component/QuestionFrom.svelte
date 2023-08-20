<script>
	import Progress from './Progress.svelte';
	import { questionsEn, questionsTH } from '../stores';
	import { mode, step, answers, result, lang, response } from '../stores';
	import Header from './Header.svelte';
	import { json } from '@sveltejs/kit';

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

	/**
	 * Add answer to the answers array.
	 *
	 * @param {string} answer
	 */
	function addAnswer(answer) {
		$answers[$step] = answer;
		switch ($step) {
			case 0: {
				result.ans_1 = answer;
				break;
			}
			case 1: {
				result.ans_2 = answer;
				break;
			}
			case 2: {
				result.ans_3 = answer;
				break;
			}
			case 3: {
				result.ans_4 = answer;
				break;
			}
			case 4: {
				result.ans_5 = answer;
				break;
			}
			case 5: {
				result.ans_6 = answer;
				break;
			}
			case 6: {
				result.ans_7 = answer;
				break;
			}
			case 7: {
				result.ans_8 = answer;
				break;
			}
			case 8: {
				result.ans_9 = answer;
				break;
			}
			case 9: {
				result.ans_10 = answer;
				break;
			}
		}
	}

	async function submit() {
		//post to backend
		console.log(result);
		try {
			const res = await fetch('http://171.6.161.183:3000/add-user', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(result)
			});
			if (res.status === 200) {
				console.log(res);
				const json = await res.json();
				response.message = json.message;
				response.result = json.result;
				$mode = 'result';
			} else {
				console.log(res);
			}
		} catch (error) {
			console.log(error);
		}
	}
</script>

<Header />
<div class="relative w-[90%] h-[85dvh] flex flex-col items-center justify-center space-y-5 rounded-2xl border-4 tablet:border-[12px] border-MainGreen border-opacity-40">
	<h1 class="text-4xl font-bold my-5">{$step + 1}</h1>
	<div class="h-10 mx-auto w-[80dvw]">
		<Progress {questionLen} />
	</div>
	<div class="w-full h-full flex justify-center">
		<div class="ml-3 mr-3 w-[80dvw]">
			{#if $lang === 'en'}
				<h1 class="text-xl laptop:text-4xl font-bold mb-3 text-center">{questionsEn[$step].question}</h1>
				<div class="flex flex-col space-y-4">
					<button on:click={() => addAnswer('A')} class={`${$answers[$step] == 'A' && 'bg-MainGreen text-MainWhite ring-2 ring-offset-4 ring-MainYellow'} text-lg laptop:text-2xl text-center border-MainBlue border rounded-lg p-2 transition-all duration-500`}>A.{questionsEn[$step].answers[0]}</button>
					<button on:click={() => addAnswer('B')} class={`${$answers[$step] == 'B' && 'bg-MainGreen text-MainWhite ring-2 ring-offset-4 ring-MainYellow'} text-lg laptop:text-2xl text-center border-MainBlue border rounded-lg p-2 transition-all duration-500`}>B.{questionsEn[$step].answers[1]}</button>
					<button on:click={() => addAnswer('C')} class={`${$answers[$step] == 'C' && 'bg-MainGreen text-MainWhite ring-2 ring-offset-4 ring-MainYellow'} text-lg laptop:text-2xl text-center border-MainBlue border rounded-lg p-2 transition-all duration-500`}>C.{questionsEn[$step].answers[2]}</button>
				</div>
			{:else}
				<h1 class="kanit text-xl laptop:text-4xl font-bold mb-3 text-center">{questionsTH[$step].question}</h1>
				<div class="kanit flex flex-col space-y-4">
					<button on:click={() => addAnswer('A')} class={`${$answers[$step] == 'A' && 'bg-MainGreen text-MainWhite ring-2 ring-offset-4 ring-MainYellow'} text-lg laptop:text-2xl text-center border-MainBlue border rounded-lg p-2 transition-all duration-500`}>A.{questionsTH[$step].answers[0]}</button>
					<button on:click={() => addAnswer('B')} class={`${$answers[$step] == 'B' && 'bg-MainGreen text-MainWhite ring-2 ring-offset-4 ring-MainYellow'} text-lg laptop:text-2xl text-center border-MainBlue border rounded-lg p-2 transition-all duration-500`}>B.{questionsTH[$step].answers[1]}</button>
					<button on:click={() => addAnswer('C')} class={`${$answers[$step] == 'C' && 'bg-MainGreen text-MainWhite ring-2 ring-offset-4 ring-MainYellow'} text-lg laptop:text-2xl text-center border-MainBlue border rounded-lg p-2 transition-all duration-500`}>C.{questionsTH[$step].answers[2]}</button>
				</div>
			{/if}

			<div class="absolute bottom-0 left-0 w-full h-28 flex flex-row justify-center items-center space-x-5">
				{#if $step == 0}
					<button class="kanit text-2xl tablet:text-3xl py-1 px-6 tablet:py-2 tablet:px-8 bg-MainWhite border border-MainGray rounded-xl text-MainGray m-2" on:click={() => ($mode = 'intro')}>{$lang === 'en' ? 'Previous' : 'กลับ'}</button>
				{:else}
					<button class="kanit text-2xl tablet:text-3xl py-1 px-6 tablet:py-2 tablet:px-8 bg-MainWhite border border-MainGray rounded-xl text-MainGray m-2" on:click={prev}>{$lang === 'en' ? 'Previous' : 'กลับ'}</button>
				{/if}
				{#if $step === questionLen - 1}
					{#if $answers.includes(undefined) || $answers.length !== 10}
						<p class="text-xl font-bold text-MainRed">โปรดเลือกคำตอบให้ครบ</p>
					{:else}
						<button class={`bg-MainGreen kanit text-2xl tablet:text-3xl py-1 px-6 tablet:py-2 tablet:px-8  rounded-xl text-MainWhite m-2`} on:click={() => submit()} disabled={$answers.length !== 10}>{$lang === 'en' ? 'Submit' : 'ส่งคำตอบ'}</button>
					{/if}
				{:else}
					<button class="kanit text-2xl tablet:text-3xl py-1 px-6 tablet:py-2 tablet:px-8 bg-MainGreen rounded-xl text-MainWhite m-2" on:click={next}>{$lang === 'en' ? 'Next' : 'ถัดไป'}</button>
				{/if}
			</div>
		</div>
	</div>
</div>
