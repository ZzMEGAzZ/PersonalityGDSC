<script>
	import '../app.css';
	import QuestionFrom from '../component/QuestionFrom.svelte';
	import GdscSVG from '../Assets/SVG/gdscSVG.svelte';

	let lang = 'en' || 'th';
	
</script>

<div class="w-full h-[100dvh] space-y-5 flex flex-col justify-center items-center">
	<div class="fixed top-2 right-5 flex flex-row justify-center">
		<button class="text-2xl hover:underline hover:text-MainGreen" on:click={() => (lang = 'th')}>TH</button>
		<hr class="w-[2px] h-10 m-1 bg-MainBlack" />
		<button class="text-2xl hover:underline hover:text-MainGreen" on:click={() => (lang = 'en')}>EN</button>
	</div>

	<div class="w-20 h-20 mobile:w-40 mobile:h-40 laptop:w-60 laptop:h-60 transition-all duration-1000">
		<GdscSVG />
	</div>

	<QuestionFrom {lang}/>


</div>
