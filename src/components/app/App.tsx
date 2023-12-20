import React, {useCallback, useEffect, useState} from "react";
import styles from "./App.module.scss";
import Drawing from "../drawing/Drawing";
import Word from "../word/Word";
import Keyboard from "../keyboard/Keyboard";
import {getWord, useVariables} from "../../hooks/useVariables";

const App = () => {

    const {wordToGuess, setWordToGuess,
        guessedLetters, setGuessedLetters,
        incorrectGuesses, inactiveLetters,
        addGuessedLetter, activeLetters,
        isLoser, isWinner} = useVariables()

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key;

            if (!key.match(/^[а-я]$/)) return;

            e.preventDefault();
            addGuessedLetter(key);
        };

        document.addEventListener("keypress", handler);

        return () => document.removeEventListener("keypress", handler);
    }, [guessedLetters]);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key;

            if (key !== "Enter") return;

            e.preventDefault();
            setGuessedLetters([]);
            setWordToGuess(getWord());
        };

        document.addEventListener("keypress", handler);

        return () => document.removeEventListener("keypress", handler);
    }, []);

    return (
        <div className="container">
            <div className={styles.app}>
                <div className={styles.results}>
                    {isWinner && "Победа! Нажми Enter и попробуй еще раз!"}
                    {isLoser && "Ты проиграл. Нажми Enter и попробуй еще раз!"}
                </div>
                <Drawing
                    incorrectGuessesLength={incorrectGuesses.length}
                />
                <Word
                    wordToGuess={wordToGuess}
                    guessedLetters={guessedLetters}
                    reveal={isWinner || isLoser}
                />
                <div style={{alignSelf: "stretch"}}>
                    <Keyboard
                        activeLetters={activeLetters}
                        inactiveLetters={inactiveLetters}
                        addGuessedLetter={addGuessedLetter}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;