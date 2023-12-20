import {useCallback, useState} from "react";
import words from "../components/app/wordList.json";

export function getWord() {
    return words[Math.floor(Math.random() * words.length)];
}

export const useVariables = () => {
    const [wordToGuess, setWordToGuess] = useState(getWord());
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

    const incorrectGuesses = guessedLetters.filter(letter => !wordToGuess.includes(letter));

    const activeLetters = guessedLetters.filter(letter => wordToGuess.includes(letter));
    const inactiveLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter));

    const isLoser = incorrectGuesses.length >= 6;
    const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter));

    const addGuessedLetter = useCallback((letter: string) => {
        if (guessedLetters.includes(letter) || isWinner || isLoser) return;

        setGuessedLetters(letters => [...letters, letter]);
    }, [guessedLetters, isWinner, isLoser]);

    return {wordToGuess, setWordToGuess,
        incorrectGuesses, activeLetters,
        guessedLetters, setGuessedLetters,
        inactiveLetters, isLoser, isWinner,
        addGuessedLetter}
}