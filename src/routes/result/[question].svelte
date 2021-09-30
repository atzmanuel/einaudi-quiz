<script context="module">
  export async function preload({ params }) {
    return { questionNumber: params.question };
  }
</script>

<script>
  import Button from "../../components/Button.svelte";
  import { goto } from "@sapper/app";
  import { fade, slide } from "svelte/transition";
  import Footer from "../../components/Footer.svelte";
  import { name, questions } from "../../stores";

  import { onMount } from "svelte";

  let currentProgress = $questions.reduce(
    (a, b) => a + (b.answered ? 1 : 0),
    0
  );

  export let questionNumber = 1;

  onMount(async () => {
    if ($name == null) {
      goto("/");
      return;
    }
    if (Number(questionNumber) > $questions.length) {
      goto(`question/${currentProgress + 1}`);
      return;
    }
    if (!question.answered) {
      goto(`question-titles/${currentProgress + 1}`);
      return;
    }
    if (currentProgress > $questions.length) {
      goto("quiz-end");
      return;
    }
  });

  let question = $questions[questionNumber - 1];
</script>

<svelte:head>
  <title>Soluzione {questionNumber} - Luigi Einaudi Quiz</title>
</svelte:head>

<main in:slide={{ delay: 300, duration: 300 }} out:fade={{ duration: 300 }}>
  <h1>QUIZ!</h1>
  <h2>Domanda {questionNumber} di {$questions.length}</h2>

  {#if question && question.answered}
    <h3>{question.question}</h3>
    {#each question.answers as value, i}
      <div id="question">
        <Button
          value={value.text}
          disabled={true}
          tick={question.chosenAnswer === i}
          classes={value.valid ? "green" : "red"}
        />
      </div>
    {/each}
    <h2>Soluzione:</h2>
    <h3>{question.question}</h3>
    <Button
      value={"Avanti"}
      arrow={true}
      onClick={() => {
        if (currentProgress + 1 > $questions.length) goto("quiz-end");
        goto(`question-titles/${currentProgress + 1}`);
      }}
    />
  {/if}
</main>
<Footer />

<style>
  main {
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  h1 {
    font-weight: 900;
    font-size: 24px;
    color: var(--text);
    text-align: center;
  }

  h2 {
    font-weight: 700;
    font-size: 18px;
    color: var(--text);
    text-align: center;
  }

  #question {
    margin: 15px 0;
    width: 100%;
  }
</style>
