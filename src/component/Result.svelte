<script>
	import bg from '../Assets/IMG/bg.png';
	import { mode, result, lang, name, response, roles } from '../stores';
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

<div class="relative w-full h-full flex flex-col items-center justify-center space-y-5">
	<div class="flex flex-col items-center justify-center space-y-2">
		<h1>{$lang === 'en' ? `${result.name} are` : `คุณ ${result.name} คือ`}</h1>
		<h1 class="text-3xl">{response.result}</h1>

        {#each roles as role}
            {#if role.role === response.result}
                <div class="flex flex-col items-center justify-center space-y-2">
                    <h1>{role.role}</h1>
                    <img src={role.detail.img} alt={role.role} class="w-40 h-40 tablet:w-60 tablet:h-60" />
                    <p>{$lang === 'en' ? role.detail.detailEN : role.detail.detailTH}</p>
                </div>
            {/if}
        {/each}
		
	</div>
</div>
