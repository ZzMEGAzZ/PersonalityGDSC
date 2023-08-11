<script>
	import { mode } from '../stores';
	export let lang = 'en' || 'th';
	let next = false;
</script>

{#if (next == false)}
	{#if lang == 'th'}
		<h2>ในช่วงปิดเทอมซัมเมอร์ คุณ ... ต้องหาที่ฝึกงานตามหลักสูตร วันหนึ่งคุณ ... ถูกบริษัท GDSC เรียกสัมภาษณ์ คุณ ... ตื่นเต้นและดีใจเป็นอย่างมาก</h2>
	{:else}
		<h2>In the summertime you ... want to find a internship, one day you been hired by GDSC company, you ... feel so excited.</h2>
	{/if}
	<button class="text-2xl laptop:text-4xl hover:underline hover:text-MainGreen" on:click={() => (next = true)}>Next</button>
{:else}
	{#if lang == 'th'}
		<h2>และในวันสัมภาษณ์ คุณได้สัมภาษณ์กับหัวหน้าทีมของคุณ คำถามที่เขาถามคุณคือ...</h2>
	{:else}
		<h2>and in the interview day. you interview with your team leader, and the questions there ask you are...</h2>
	{/if}
	<button class="text-2xl laptop:text-4xl hover:underline hover:text-MainGreen" on:click={()=> next = false}>Prev</button>
	<button class="text-2xl laptop:text-4xl hover:underline hover:text-MainGreen" on:click={() => ($mode = 'question')}>Next</button>
{/if}
