<script>
    import {step } from '../stores';
    $step = 0;
    export let questionLen = 0;

</script>

<div>
    <div class="flex flex-row justify-around">
    {#each Array(questionLen) as _, i}
        <button class={`${i <= $step ? 'bg-MainGreen' : ''} border-2 border-MainBlue w-5 h-5 rounded-full`}
        on:click={ () => $step = i}>
        </button>
    {/each}</div>
</div>