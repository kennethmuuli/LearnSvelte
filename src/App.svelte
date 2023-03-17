<!-- Skriptid -->
<script>

    import ItemList from "./components/ItemList.svelte";
    import Modal from "./components/modal.svelte";

  let modalActive = false;

  let counter = 0;
  let message = 'Hello Svelte';
  let items = [
    {name:'piim', done: false},
    {name:'sai', done: true},
    {name:'viin', done: true},
    {name:'õlu', done: false},
  ]

/* Vanem ja pikem versioon */
// $: doneItems = items.filter(function(item){
//   return item.done;
// });

/* Dot notationiga */
$: doneItems = items.filter(item => item.done);
$: toDoItems = items.filter(item => !item.done);


function add(){
  items.push({name: message, done: false});
  // Svelte tarbeks tuleb lisada j'rgmine jupp
  items = items;
  message = '';
}

</script>

<button class="button" on:click={() => {modalActive=true;}}>Click me!</button>
<Modal bind:active={modalActive} on:close={() => {modalActive=false;}}></Modal>

<!-- Elemendid -->
<button class="button is-primary" on:click={() => counter++}>Value is {counter}</button>



  
  <input type="text" class="input" bind:value={message}>
  <h1>
    {message}
  </h1>

  <button class="button is-primary" on:click={add}>Add</button>

  <!--  Listid ükshaaval välja kirjutatuna -->
  <!-- <h1>All items</h1>
  <ul>
    {#each items as item}
      <li>
        {item.name}
        <input type="checkbox" bind:checked={item.done}>
      </li>
    {/each}
  </ul>
  
  <h1>Done items</h1>
  <ul>
    {#each doneItems as item}
      <li>
        {item.name}
        <input type="checkbox" bind:checked={item.done}>
      </li>
    {/each}
  </ul>

  <h1>To-do items</h1>
  <ul>
    {#each toDoItems as item}
      <li>
        {item.name}
        <input type="checkbox" bind:checked={item.done}>
      </li>
    {/each}
  </ul> -->
  
  <!-- Listid komponentidena -->
  <ItemList bind:items={items} title="All items"></ItemList>
  <ItemList bind:items={doneItems} title="Done items"></ItemList>
  <ItemList bind:items={toDoItems} title="To-Do items"></ItemList>

  



<!-- Stiilid -->
<style>

</style>