<script>
  import NProgress from "nprogress";
  import { stores } from "@sapper/app";

  NProgress.configure({
    // Pass in your configuration here, below is just how I like it
    // Full list: https://github.com/rstacruz/nprogress#configuration
    minimum: 0.16,
    showSpinner: false,
  });

  const { preloading } = stores();

  $: {
    if ($preloading) {
      NProgress.start();
    }

    if (!$preloading) {
      NProgress.done();
    }
  }

  export let segment;
</script>

<main>
  <div>
    <slot />
  </div>
</main>

<style>
  main {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
    min-height: 80vh;
  }
</style>
