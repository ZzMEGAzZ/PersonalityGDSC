<script>
	import { lang, mode, result } from '../stores';
	import Header from './Header.svelte';
	let next = false;
</script>

<!-- <div
	style="
	background-image: url({Ribbin});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	"
	class="-z-50 fixed w-full h-[100dvh] space-y-5 flex flex-col justify-center items-center"
/> -->

<Header />
<div class="relative w-[90%] h-[85%] flex flex-col items-center justify-center space-y-5 rounded-2xl border-4 tablet:border-[12px] border-MainGreen border-opacity-40">
	{#if next == false}
		<div class="flex flex-col justify-center items-center leading-6">
			{#if $lang == 'th'}
				<div class="w-full h-full kanit">
					<p class="kanit text-2xl tablet:4xl text-center leading-10">ในช่วงปิดเทอมซัมเมอร์ <br /> คุณ {result.name} ต้องหาที่ฝึกงานตามหลักสูตร <br />  วันหนึ่งคุณ {result.name} ถูกบริษัท GDSC เรียกสัมภาษณ์ <br /> คุณ {result.name} ตื่นเต้นและดีใจเป็นอย่างมาก</p>
				</div>
			{:else}
				<p class="text-2xl tablet:4xl text-center leading-10">In the summertime <br /> {result.name} want to find a internship,<br /> one day you been hired by GDSC company, <br /> {result.name} feel so excited.</p>
			{/if}
			<button class="kanit text-2xl tablet:text-3xl py-1 px-6 tablet:py-2 tablet:px-8 bg-MainGreen rounded-xl text-MainWhite m-2" on:click={() => (next = true)}>{$lang === 'en' ? 'Next' : 'ถัดไป'}</button>
		</div>
	{:else}
		{#if $lang == 'th'}
			<p class="kanit text-2xl tablet:4xl text-center leading-10">และในวันสัมภาษณ์ <br /> คุณได้สัมภาษณ์กับหัวหน้าทีมของคุณ <br /> คำถามที่เขาถามคุณคือ...</p>
		{:else}
			<p class="text-2xl tablet:4xl text-center leading-10">and in the interview day. <br /> you interview with your team leader, <br /> and the questions there ask you are...</p>
		{/if}
		<div>
		<button class="kanit text-2xl tablet:text-3xl py-1 px-6 tablet:py-2 tablet:px-8 border border-MainGray rounded-xl text-MainGray m-2" on:click={() => (next = false)}>{$lang === 'en' ? 'Previous' : 'กลับ'}</button>
		<button class="kanit text-2xl tablet:text-3xl py-1 px-6 tablet:py-2 tablet:px-8 bg-MainGreen rounded-xl text-MainWhite m-2" on:click={() => ($mode = 'question')}>{$lang === 'en' ? 'Next' : 'ถัดไป'}</button>
	</div>{/if}
</div>
