<script>
	import { mode } from '../stores';
	import Ribbin from '../Assets/IMG/Ribbin.png';
	export let lang = 'en' || 'th';
	let next = false;
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

<div class="relative w-full h-40 flex flex-col items-center justify-center space-y-5 p-5">
	{#if next == false}
		<div class="flex flex-col justify-center items-center leading-6">
			{#if lang == 'th'}
				<div class="w-full h-full kanit">
					<p class="text-2xl tablet:4xl text-center leading-10">ในช่วงปิดเทอมซัมเมอร์ <br /> คุณ ... ต้องหาที่ฝึกงานตามหลักสูตร <br />  วันหนึ่งคุณ ... ถูกบริษัท GDSC เรียกสัมภาษณ์ <br /> คุณ ... ตื่นเต้นและดีใจเป็นอย่างมาก</p>
				</div>
			{:else}
				<p class="text-2xl tablet:4xl text-center leading-10">In the summertime <br /> you ... want to find a internship,<br /> one day you been hired by GDSC company, <br /> you ... feel so excited.</p>
			{/if}
			<button class="text-2xl tablet:text-3xl py-1 px-6 tablet:py-2 tablet:px-8 bg-MainGreen rounded-xl text-MainWhite m-2" on:click={() => (next = true)}>{lang === 'en' ? 'Next' : 'ถัดไป'}</button>
		</div>
	{:else}
		{#if lang == 'th'}
			<p class="text-2xl tablet:4xl text-center leading-10 kanit">และในวันสัมภาษณ์ <br /> คุณได้สัมภาษณ์กับหัวหน้าทีมของคุณ <br /> คำถามที่เขาถามคุณคือ...</p>
		{:else}
			<p class="text-2xl tablet:4xl text-center leading-10">and in the interview day. <br /> you interview with your team leader, <br /> and the questions there ask you are...</p>
		{/if}
		<div>
		<button class="text-2xl tablet:text-3xl py-1 px-6 tablet:py-2 tablet:px-8 border border-MainGray rounded-xl text-MainGray m-2" on:click={() => (next = false)}>{lang === 'en' ? 'Previous' : 'กลับ'}</button>
		<button class="text-2xl tablet:text-3xl py-1 px-6 tablet:py-2 tablet:px-8 bg-MainGreen rounded-xl text-MainWhite m-2" on:click={() => ($mode = 'question')}>{lang === 'en' ? 'Next' : 'ถัดไป'}</button>
	</div>{/if}
</div>
