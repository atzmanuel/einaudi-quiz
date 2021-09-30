import { writable } from 'svelte-local-storage-store';

export const name = writable('name', null);

export const questions = writable('questions', [
    {
        question: "Domanda lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        answered: false,
        correct: false,
        chosenAnswer: -1,
        solution: "Domanda lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        answers: [
            {
                text: "A — RISPOSTA 1",
                valid: true,
                
            },
            {
                text: "B — RISPOSTA 2",
                valid: false,
            },
            {
                text: "C — RISPOSTA 3",
                valid: false,
                
            },
            {
                text: "D — RISPOSTA 4",
                valid: false,
            }
        ]
    },
    {
        question: "Domanda lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        answered: false,
        correct: false,
        chosenAnswer: -1,
        solution: "Domanda lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        answers: [
            {
                text: "A — RISPOSTA 1",
                valid: true,
                
            },
            {
                text: "B — RISPOSTA 2",
                valid: false,
            },
            {
                text: "C — RISPOSTA 3",
                valid: false,
                
            },
            {
                text: "D — RISPOSTA 4",
                valid: false,
            }
        ]
    },
])

export const endPhrases = writable('phrases', [
    {
        from: 100,
        to: 250,
        message: "Messaggio 1"
    },
    {
        from: 251,
        to: 300,
        message: "Messaggio 2"
    }
])