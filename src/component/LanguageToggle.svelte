<script>
	import EngFlag from '../Assets/SVG/EngFlag.svelte';
	import ThaiFlag from '../Assets/SVG/ThaiFlag.svelte';
	import { lang } from '../stores';

	let currentLanguage = $lang; // Default language

	function toggleLanguage() {
		currentLanguage = currentLanguage === 'th' ? 'en' : 'th';
		$lang = currentLanguage;
	}

	$: sliderPosition = currentLanguage === 'th' ? 'translate-x-9' : 'translate-x-[3px]';
</script>

<button class={`${$lang === 'en' ? 'bg-MainYellow bg-opacity-50' : 'bg-MainBlue bg-opacity-50'} flex items-center h-8 w-16 border  rounded-full transition-all duration-700`} on:click={toggleLanguage}>
	<div class={`${sliderPosition} z-10 h-6 w-6 rounded-full transition-all duration-700`}>
		{#if $lang === 'en'}
			<EngFlag />
		{:else}
			<ThaiFlag />
		{/if}
	</div>
</button>
