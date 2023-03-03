<!-- Skriptid -->
<script>
    import { each } from "svelte/internal";


  let counter = 0;
  let message = 'Hello Svelte';
  let items = ['piim','sai','viin']

function add(){
  items.push(message);
  // Svelte tarbeks tuleb lisada j'rgmine jupp
  items = items;
  message = '';
}

</script>

<!-- Elemendid -->
<button class="button is-primary" on:click={() => counter++}>Value is {counter}</button>

<div class="content">
  
  <input type="text" class="input" bind:value={message}>
  <h1>
    {message}
  </h1>

  <button class="button is-primary" on:click={add}>Add</button>

  <ul>
    {#each items as item}
      <li>{item}</li>
    {/each}
  </ul>
  

</div>

<!-- Stiilid -->
<style>

</style>