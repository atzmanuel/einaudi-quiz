<script>
  export let placeholder;
  export let label;
  export let id;
  export let bind;
  export let validate;
  export let value = "";
  let error = false;
  let errorMessage = "";

  const onFocus = () => {
    error = false;
    errorMessage = "";
  };

  const onBlur = () => {
    const validation = validate(value);
    if (!validation[0]) {
      $bind = null;
      error = true;
      errorMessage = validation[1];
      return;
    }
    $bind = value;
  };

  const onInput = () => {
    const validation = validate(value);
    if (validation[0]) {
      $bind = value;
      error = false;
      errorMessage = null;
    }
  };
</script>

<div id="field-container">
  <label for={id}>{label}</label>
  <input
    type="text"
    {id}
    {placeholder}
    bind:value
    on:input={onInput}
    class={error ? "error" : ""}
    on:focus={onFocus}
    on:blur={onBlur}
  />
  {#if error}
    <label for={id} id="error">{errorMessage}</label>
  {/if}
</div>

<style>
  #field-container {
    margin: 15px 0;
  }

  input {
    width: 100%;
    height: 40px;
    border: 1px solid var(--text);
    box-shadow: inset 4px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    background-color: #fff;
  }

  label {
    font-weight: 500;
    font-size: 16px;
    color: var(--text);
  }

  label#error {
    font-weight: 300;
    font-size: 12px;
    color: var(--danger);
  }

  input::placeholder,
  input:-ms-input-placeholder,
  input::-ms-input-placeholder {
    color: var(--text);
    font-weight: 600;
    opacity: 1;
    padding: 0 10px;
  }

  input.error {
    border: 1px solid var(--danger);
  }
</style>
