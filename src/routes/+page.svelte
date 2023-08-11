<script>
	import '../app.css';
	import { questionsEn, questionsTH } from '../stores';

	let lang = 'th';

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

<div class="w-full h-[100dvh] space-y-5 flex flex-col justify-center items-center">
	<div class="fixed top-2 right-5 flex flex-row justify-center">
		<button class="text-2xl hover:underline hover:text-MainGreen" on:click={() => (lang = 'th')}>TH</button>
		<hr class="w-[2px] h-10 m-1 bg-MainBlack" />
		<button class="text-2xl hover:underline hover:text-MainGreen" on:click={() => (lang = 'en')}>EN</button>
	</div>

	<div class="w-20 h-20 laptop:w-40 laptop:h-40">
		<svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186.69 190.5"
			><g transform="translate(1184.583 765.171)"
				><path clip-path="none" mask="none" d="M-1089.333-687.239v36.888h51.262c-2.251 11.863-9.006 21.908-19.137 28.662l30.913 23.986c18.011-16.625 28.402-41.044 28.402-70.052 0-6.754-.606-13.249-1.732-19.483z" fill="#4285f4" /><path
					clip-path="none"
					mask="none"
					d="M-1142.714-651.791l-6.972 5.337-24.679 19.223h0c15.673 31.086 47.796 52.561 85.03 52.561 25.717 0 47.278-8.486 63.038-23.033l-30.913-23.986c-8.486 5.715-19.31 9.179-32.125 9.179-24.765 0-45.806-16.712-53.34-39.226z"
					fill="#34a853"
				/><path clip-path="none" mask="none" d="M-1174.365-712.61c-6.494 12.815-10.217 27.276-10.217 42.689s3.723 29.874 10.217 42.689c0 .086 31.693-24.592 31.693-24.592-1.905-5.715-3.031-11.776-3.031-18.098s1.126-12.383 3.031-18.098z" fill="#fbbc05" /><path
					d="M-1089.333-727.244c14.028 0 26.497 4.849 36.455 14.201l27.276-27.276c-16.539-15.413-38.013-24.852-63.731-24.852-37.234 0-69.359 21.388-85.032 52.561l31.692 24.592c7.533-22.514 28.575-39.226 53.34-39.226z"
					fill="#ea4335"
					clip-path="none"
					mask="none"
				/></g
			>
		</svg>
	</div>
	<h1 class="text-2xl laptop:text-6xl">Google GDSC</h1>
	<p class="text-lg laptop:text-2xl text-green-500">Google Developer Student Clubs</p>
	<div class="w-full h-40 grid grid-rows-2 justify-items-center">
		{#if lang === 'en'}
			<h1 class="text-xl laptop:text-4xl">{questionsEn[step].question}</h1>
			<div>
				<p class="text-lg laptop:text-2xl">{questionsEn[step].answers[0]}</p>
				<p class="text-lg laptop:text-2xl">{questionsEn[step].answers[1]}</p>
				<p class="text-lg laptop:text-2xl">{questionsEn[step].answers[2]}</p>
			</div>
		{:else}
			<h1 class="text-xl laptop:text-4xl">{questionsTH[step].question}</h1>
			<div>
				<p class="text-lg laptop:text-2xl">{questionsTH[step].answers[0]}</p>
				<p class="text-lg laptop:text-2xl">{questionsTH[step].answers[1]}</p>
				<p class="text-lg laptop:text-2xl">{questionsTH[step].answers[2]}</p>
			</div>
		{/if}
	</div>
	<div>
		<button class="text-2xl laptop:text-4xl hover:underline hover:text-MainGreen" on:click={prev}>Prev</button>
		{step}
		<button class="text-2xl laptop:text-4xl hover:underline hover:text-MainGreen" on:click={next}>Next</button>
	</div>
</div>
