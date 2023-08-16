<script>
	import GdscSvg from '../Assets/SVG/gdscSVG.svelte';
	import LanguageToggle from './LanguageToggle.svelte';
</script>

<div class="z-50 inset-0 p-5 tablet:p-10 w-[95%] tablet:w-[90%] h-20 flex flex-row justify-between items-center">
	<div class="flex flex-row items-center space-x-5">
		<div class="w-20 h-20">
			<GdscSvg />
		</div>
		<div class="flex flex-col text-xs tablet:text-base">
			<h1>Google Developer Student Clubs</h1>
			<h1>Thammasat University</h1>
		</div>
	</div>

	<LanguageToggle />
</div>
