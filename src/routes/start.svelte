<script>
  import Button from "../components/Button.svelte";
  import { goto } from "@sapper/app";
  import { fade, slide } from "svelte/transition";
  import Footer from "../components/Footer.svelte";
  import { questions } from "../stores";
  import { onMount } from "svelte";

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

  <h1>QUIZ!</h1>
  <h2>Scopri se sei fatto per l’informatica!</h2>
  <Button
    value={"Inizia Quiz!"}
    arrow={true}
    onClick={() => goto(`question-titles/${currentProgress + 1}`)}
  />
  <p>I dati raccolti verranno salvati esclusivamente sul tuo dispositivo.</p>
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

  p {
    color: var(--text);
    font-weight: 300;
    font-size: 12px;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>
