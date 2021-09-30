<script>
  export let value;
  export let arrow = false;
  export let tick = false;
  export let onClick = () => {};
  export let disabled = false;
  export let classes = "";
</script>

<button on:click={onClick} {disabled} class={classes}>
  {value}
  {#if arrow}
    <span style="float: right;">&#10132;</span>
  {/if}
  {#if tick}
    <span style="float: right;">&#10003;</span>
  {/if}
</button>

<style>
  button {
    width: 100%;
    height: 40px;
    background-color: var(--accent);
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    border: none;
    color: #fff;
    font-weight: 800;
    font-size: 18px;
    transition: all 225ms;
    padding: 10px;
  }

  button:active:not(:disabled) {
    box-shadow: inset 4px 4px 4px rgba(0, 0, 0, 0.15);
    transform: translateY(2px);
  }

  button.blur:disabled {
    filter: blur(2px);
  }

  button.green {
    background-color: var(--success);
  }
  button.red {
    background-color: var(--danger);
  }
</style>
