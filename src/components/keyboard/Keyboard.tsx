import React from "react";
import styles from "./Keyboard.module.scss";

const KEYS = [
    "а",
    "б",
    "в",
    "г",
    "д",
    "е",
    "ё",
    "ж",
    "з",
    "и",
    "й",
    "к",
    "л",
    "м",
    "н",
    "о",
    "п",
    "р",
    "с",
    "т",
    "у",
    "ф",
    "х",
    "ц",
    "ч",
    "ш",
    "щ",
    "ъ",
    "ы",
    "ь",
    "э",
    "ю",
    "я"
];

interface KeyboardProps {
    activeLetters: string[];
    inactiveLetters: string[];
    addGuessedLetter: (letter: string) => void;
}

const Keyboard: React.FC<KeyboardProps> = ({activeLetters, inactiveLetters, addGuessedLetter}) => {
    return (
        <div className={styles.keyboard}>
            {KEYS.map(key => {
                const active = activeLetters.includes(key);
                const inactive = inactiveLetters.includes(key);
                return (
                    <button
                        onClick={() => addGuessedLetter(key)}
                        className={
                        `${styles.key} ${active ? `${styles.active}` : ""} ${inactive ? `${styles.inactive}` : ""}`
                    }
                        key={key}
                        disabled={active || inactive}
                    >
                        {key}
                    </button>
                );
            })}
        </div>
    );
};

export default Keyboard;