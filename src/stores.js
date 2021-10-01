import { writable } from 'svelte-local-storage-store';

export const name = writable('name', null);

export const questions = writable('questions', [
    {
        question: "Quale tra le seguenti NON é una periferica?",
        answered: false,
        correct: false,
        chosenAnswer: -1,
        solution: "Una periferica, nell'informatica, indica un qualsiasi dispositivo fisico collegato ad un dispositivo.",
        answers: [
            {
                text: "A — Mouse",
                valid: false,
                
            },
            {
                text: "B — Monitor",
                valid: false,
            },
            {
                text: "C — Sedia",
                valid: true,
                
            }
        ]
    },
    {
        question: "In quale formato vengono salvate le canzoni?",
        answered: false,
        correct: false,
        chosenAnswer: -1,
        solution: "Il formato più famoso per i file musicali é l'MP3 ma non é l'unico!",
        answers: [
            {
                text: "A — MP3",
                valid: true,
                
            },
            {
                text: "B — PNG",
                valid: false,
            },
            {
                text: "C — TXT",
                valid: false,
                
            }
        ]
    },
    {
        question: "Quale tra le seguenti applicazioni ti permette di creare un documento di testo?",
        answered: false,
        correct: false,
        chosenAnswer: -1,
        solution: "Microsoft Word é un'applicazione che ti permette di creare documenti di testo. Excel ti permette invece di creare fogli di calcolo.",
        answers: [
            {
                text: "A — Word",
                valid: true,
                
            },
            {
                text: "B — Excel",
                valid: false,
            },
            {
                text: "C — Calcolatrice",
                valid: false,
                
            }
        ]
    },
    {
        question: "Seleziona l'unità di misura della memoria di un dispositivo",
        answered: false,
        correct: false,
        chosenAnswer: -1,
        solution: "Il byte è l'unità di misura usata per esprimere la quantità di spazio che un file o un dato occupa.",
        answers: [
            {
                text: "A — Chilogrammo",
                valid: false,
                
            },
            {
                text: "B — Byte",
                valid: true,
            },
            {
                text: "C — Litro",
                valid: false,
                
            }
        ]
    },
    {
        question: "Quali tra i seguenti é un social network?",
        answered: false,
        correct: false,
        chosenAnswer: -1,
        solution: "TikTok  è un social network cinese.",
        answers: [
            {
                text: "A — Netflix",
                valid: false,
                
            },
            {
                text: "B — Sky",
                valid: false,
            },
            {
                text: "C — TikTok",
                valid: true,
                
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
        to: 4000,
        message: "Messaggio 2"
    }
])