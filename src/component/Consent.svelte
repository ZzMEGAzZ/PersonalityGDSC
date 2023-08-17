<script lang="ts">
	import GdscSVG from '../Assets/SVG/gdscSVG.svelte';
	import { mode, lang } from '../stores';
	let yes = false;
</script>

<div class="relative w-full h-40 flex flex-col items-center justify-center space-y-5">
	<div class="w-20 h-20 mobile:w-60 mobile:h-40 tablet:w-80 tablet:h-60 transition-all duration-1000">
		<GdscSVG />
	</div>
	<div class="p-5 flex flex-col justify-center items-center space-y-5">
		{#if $lang == 'th'}
			<div class="w-full h-full kanit">
				<p class="text-2xl tablet:4xl text-center leading-10">แบบทดสอบนี้ไม่ได้มีผลวิจัยหรือผลวิชาการรองรับ เป็นเพียงแบบทดสอบที่จัดขึ้นเพื่อความบันเทิง และถูกใช้ในงานวันเปิดโลกกิจกรรม มหาวิทยาลัยธรรมศาสตร์ ศูนย์รังสิต ของซุ้ม Google Developer Student Club เท่านั้น ไม่อนุญาตให้นำไปใช้หรืออ้างอิงในกิจกรรมอื่นทั้งสิ้น</p>
			</div>
			<div class="flex space-x-5 justify-center items-center">
				<input class="w-7 h-7" type="checkbox" bind:checked={yes} />
				<h1 class="kanit text-2xl tablet:4xl">รับทราบ</h1>
			</div>
		{:else}<p class="text-2xl tablet:4xl text-center leading-10">This test is not supported by research or academic results. It is just a test organized for entertainment purposes. And used in the open day event Thammasat University Rangsit Center Google Developer Student Club booth only Do not allow to use or refer to other activities at all.</p>
			<div class="flex space-x-5">
				<input class="w-7 h-7" type="checkbox" bind:checked={yes} />
				<h1 class="text-2xl tablet:4xl">I understand</h1>
			</div>
		{/if}
	</div>
	<button disabled={!yes} class="kanit text-2xl tablet:text-3xl py-1 px-6 tablet:py-2 tablet:px-8 bg-MainGreen rounded-xl text-MainWhite m-2" on:click={() => ($mode = 'intro')}>{$lang === 'en' ? 'Next' : 'ถัดไป'}</button>
</div>
