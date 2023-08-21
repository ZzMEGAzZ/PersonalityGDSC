<script>
	import bg from '../Assets/IMG/bg.png';
	import { mode, result, lang, name, response, roles } from '../stores';
	import Facebook from '../Assets/SVG/Facebook.svelte';
	import Ig from '../Assets/SVG/Ig.svelte';
	import Discord from '../Assets/SVG/Discord.svelte';
	import GdscSvg from '../Assets/SVG/gdscSVG.svelte';
</script>

<div
	style="
    background-image: url({bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    "
	class="-z-50 fixed w-full h-[100dvh] space-y-5 flex flex-col justify-center items-center"
/>

<div class="relative w-full h-full flex flex-col items-center space-y-5 py-5 px-2 my-5">
	<div class="flex flex-col items-center justify-center space-y-2">

		{#if response.result}
		<h1 class="kanit text-lg tablet:text-2xl">{$lang === 'en' ? `${result.name} are` : `คุณ ${result.name} คือ`}</h1>
		<h1 class="text-xl tablet:text-4xl font-bold">{response.result}</h1>
		{/if}

		{#each roles as role}
			{#if role.role === response.result}
				<div class="flex flex-col items-center justify-center space-y-2">
					<img src={role.detail.img} alt={role.role} class="w-[90%]" />
					<div class="w-[90%] border bg-MainWhite p-3 rounded-2xl drop-shadow-lg">
						<p class="kanit  text-xl">{$lang === 'en' ? role.detail.detailEN : role.detail.detailTH}</p>
					</div>
				</div>
			{/if}
		{/each}

		<h1 class="kanit text-xl font-bold">{$lang === 'th' ? 'หากคุณสนใจในเทคโนโลยี' : 'If you are interested in technology'}</h1>
		<h1 class="kanit text-xl font-bold">{$lang === 'th' ? 'และมีใจรักในการแบ่งปันความรู้' : 'and have a passion for sharing knowledge'}</h1>
		<h1 class="kanit p-2 bg-MainRed text-MainWhite rounded-2xl">{$lang === 'th' ? 'ไม่จำเป็นต้องเขียนโค้ดเป็นก็ได้' : 'You don’t have to code'}</h1>
		<h1 class="kanit text-4xl font-bold">{$lang === 'th' ? 'เข้ามาร่วมเป็นส่วนหนึ่งของ GDSC TU' : 'Join us at GDSC TU'}</h1>
		<button class="w-max h-max p-3 rounded-3xl border bg-MainWhite drop-shadow-xl">
			<a href="https://forms.gle/3PAXBfAuJaqgDunx5" target="_blank" class="flex items-center space-x-2">
				<div class="w-10 h-10 tablet:w-20 tablet:h-20 space-x-2"><GdscSvg /></div>

				<div class="flex flex-col items-start">
					<h1 class="text-base tablet:text-2xl font-bold">Google Developer Student Clubs</h1>
					<h1 class="text-sm tablet:text-lg font-bold">Thammasat University</h1>
				</div>
			</a>
		</button>
		<h1 class="kanit  text-2xl font-bold">{$lang === 'th' ? 'หรือติดตามเราได้ที่' : 'or follow us at'}</h1>
		<div class="flex flex-col space-y-5">
			<button class="w-full pr-1 h-max bg-[#EF9A9A] rounded-xl">
				<a href="https://www.instagram.com/gdsc.tu/" target="_blank" class="flex items-center space-x-2">
					<Ig />

					<h1>gdsc.tu</h1></a
				>
			</button>
			<button class="w-full pr-1 h-max bg-[#78B7F6] rounded-xl">
				<a href="https://facebook.com/gdsc.tu/" target="_blank" class="flex items-center space-x-2">
					<Facebook />

					<h1>Google Developer Student Club - TU</h1></a
				>
			</button>
			<button class="w-full pr-1 h-max bg-[#94A9F3] rounded-xl">
				<a href="https://discord.gg/mwCkrt9XKr" target="_blank" class="flex items-center space-x-2">
					<Discord />

					<h1>GDSC TU Community</h1></a
				>
			</button>
		</div>
		<div class="h-10" />
		<h1 class="text-4xl font-bold px-8 py-4 rounded-2xl bg-MainWhite">Thank you</h1>
		<div class="h-10" />
	</div>
</div>
