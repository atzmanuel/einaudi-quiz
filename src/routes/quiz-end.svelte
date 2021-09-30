<script>
  import Button from "../components/Button.svelte";
  import { goto } from "@sapper/app";
  import { fade, slide } from "svelte/transition";
  import Footer from "../components/Footer.svelte";

  import { onMount } from "svelte";
  import { name, questions, endPhrases } from "../stores";

  let currentProgress = $questions.reduce(
    (a, b) => a + (b.answered ? 1 : 0),
    0
  );

  let points =
    $questions.reduce((a, b) => a + (b.correct ? 1 : 0), 0) * 100 + 100;

  let finalPhrase = $endPhrases.find(
    (obj) => points >= obj.from && points <= obj.to
  ).message;

  onMount(async () => {
    if (currentProgress + 1 <= $questions.length) {
      goto(`question-titles/${currentProgress + 1}`);
      return;
    }
  });
</script>

<svelte:head>
  <title>Risultati - Luigi Einaudi Quiz</title>
</svelte:head>

<main in:slide={{ delay: 300, duration: 300 }} out:fade={{ duration: 300 }}>
  <figure>
    <img alt="Luigi mascot" src="mascot.png" />
  </figure>

  <h1>Congratulazioni {$name}!</h1>
  <h2>Hai totalizzato {points} punti!</h2>
  <h3>{finalPhrase}</h3>
  <Button
    value={"Reset"}
    arrow={true}
    onClick={() => {
      $name = null;
      $questions = $questions.map((obj) => {
        return { ...obj, answered: false, correct: false, chosenAnswer: -1 };
      });
      goto("/");
    }}
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

  main {
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
