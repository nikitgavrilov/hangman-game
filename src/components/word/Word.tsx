import React from "react";
import styles from "./Word.module.scss";

interface WordProps {
    wordToGuess: string;
    guessedLetters: string[];
    reveal: boolean;
}

const Word: React.FC<WordProps> = ({wordToGuess, guessedLetters, reveal = false}) => {
    return (
        <div className={styles.word}>
            {wordToGuess.split("").map((letter, index) =>
                <span
                    className={styles.letter}
                    key={index}
                >
                    <span
                        style={{
                            visibility: guessedLetters.includes(letter) || reveal
                                ? "visible"
                                : "hidden",
                            color: !guessedLetters.includes(letter) && reveal
                                ? "red"
                                : "white"
                        }}
                    >
                        {letter}
                    </span>
                </span>
            )}
        </div>
    );
};

export default Word;