<script>
  import Button from "../components/Button.svelte";
  import { goto } from "@sapper/app";
  import { fade, slide } from "svelte/transition";
  import Footer from "../components/Footer.svelte";

  import { onMount } from "svelte";
  import { questions } from "../stores";

  let currentProgress = $questions.reduce(
    (a, b) => a + (b.answered ? 1 : 0),
    0
  );

  onMount(async () => {
    if (currentProgress !== 0) goto(`question-titles/${currentProgress + 1}`);
  });
</script>

<svelte:head>
  <title>Luigi Einaudi Quiz</title>
</svelte:head>

<main in:slide={{ delay: 300, duration: 300 }} out:fade={{ duration: 300 }}>
  <figure>
    <img alt="Luigi mascot" src="mascot.png" />
  </figure>

  <h1>Benvenuto!</h1>
  <h2>Mi presento, sono Luigi.</h2>
  <Button
    value={"Presentati"}
    arrow={true}
    onClick={() => goto("presentati")}
  />
</main>
<Footer />

<style>
  h1 {
    text-align: center;
    font-weight: 900;
    font-size: 24px;
  }

  h2 {
    text-align: center;
    font-weight: 700;
    font-size: 18px;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>
