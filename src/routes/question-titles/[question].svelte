<script context="module">
  export async function preload({ params }) {
    return { questionNumber: params.question };
  }
</script>

<script>
  import { fade, slide } from "svelte/transition";
  export let questionNumber = 1;
  import { onMount } from "svelte";
  import { goto } from "@sapper/app";
  import { name, questions } from "../../stores";

  let currentProgress = $questions.reduce(
    (a, b) => a + (b.answered ? 1 : 0),
    0
  );

  onMount(async () => {
    if ($name == null) {
      goto("/");
      return;
    }
    if (currentProgress + 1 > $questions.length) {
      goto("quiz-end");
      return;
    }
    if (Number(questionNumber) + 1 > $questions.length)
      goto(`question-titles/${currentProgress + 1}`);
    if (currentProgress + 1 !== Number(questionNumber))
      goto(`question-titles/${currentProgress + 1}`);
    setTimeout(() => {
      goto(`question/${questionNumber}`);
    }, 2000);
  });
</script>

<svelte:head>
  <title>Domanda {questionNumber} - Luigi Einaudi Quiz</title>
</svelte:head>

<main in:slide={{ delay: 300, duration: 300 }} out:fade={{ duration: 300 }}>
  <h1>DOMANDA</h1>
  <h1>{questionNumber}</h1>
</main>

<style>
  h1 {
    text-align: center;
    font-size: 48px;
    color: var(--text);
    font-weight: 900;
  }
  main {
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
