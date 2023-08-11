<script lang="ts">
	import { mode } from '../stores';
	export let lang = 'en' || 'th';
	let yes = false;
</script>

<div>
	{#if lang == 'th'}
		<h2>แบบทดสอบนี้ไม่ได้มีผลวิจัยหรือผลวิชาการรองรับ เป็นเพียงแบบทดสอบที่จัดขึ้นเพื่อความบันเทิง และถูกใช้ในงานวันเปิดโลกกิจกรรม มหาวิทยาลัยธรรมศาสตร์ ศูนย์รังสิต ของซุ้ม Google Developer Student Club เท่านั้น ไม่อนุญาตให้นำไปใช้หรืออ้างอิงในกิจกรรมอื่นทั้งสิ้น</h2>
		<label>
			<input type="checkbox" bind:checked={yes} /> รับทราบแล้ว
		</label>
	{:else}
		<h2>This test is not supported by research or academic results. It is just a test organized for entertainment purposes. And used in the open day event Thammasat University Rangsit Center Google Developer Student Club booth only Do not allow to use or refer to other activities at all.</h2>
		<label>
			<input type="checkbox" bind:checked={yes} /> I understand
		</label>
	{/if}
	<button disabled={!yes} class="text-2xl laptop:text-4xl hover:underline hover:text-MainGreen" on:click={() => ($mode = 'intro')}>Next</button>
</div>
