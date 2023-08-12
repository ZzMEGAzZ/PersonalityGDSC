<script>
    import {step} from '../stores';
    import {answers} from '../stores';
    $step = 0;
    export let questionLen = 0;
</script>

<div>
    <div class="flex flex-row justify-around">
        {#each Array(questionLen) as _, i}
            {#if i == $step}
                <!-- Current step -->
                <button class="bg-MainBlue border-MainBlue border-2 w-5 h-5 rounded-full" on:click={() => $step = i}></button>
            {:else if $answers[i] != undefined}
                <!-- Answered step -->
                <button class="bg-MainGreen border-MainGreen border-2 w-5 h-5 rounded-full" on:click={() => $step = i}></button>
            {:else}
                <!-- Unanswered step -->
                <button class="bg-MainWhite border-MainBlack border-2 w-5 h-5 rounded-full" on:click={() => $step = i}></button>
            {/if}
        {/each}
    </div>
</div>
