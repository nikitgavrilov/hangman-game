import React from "react";
import styles from "./Drawing.module.scss";

const HEAD = (
    <div className={styles.head}/>
);
const BODY = (
    <div className={styles.body}/>
);
const LEFT_ARM = (
    <div className={styles.leftArm}/>
);
const RIGHT_ARM = (
    <div className={styles.rightArm}/>
);
const LEFT_LEG = (
    <div className={styles.leftLeg}/>
);
const RIGHT_LEG = (
    <div className={styles.rightLeg}/>
);

const BODY_PARTS = [HEAD, BODY, LEFT_ARM, RIGHT_ARM, LEFT_LEG, RIGHT_LEG];

interface DrawingProps {
    incorrectGuessesLength: number;
}

const Drawing: React.FC<DrawingProps> = ({incorrectGuessesLength}) => {
    return (
        <div className={styles.drawing}>
            {BODY_PARTS.slice(0, incorrectGuessesLength)}
            <div className={styles.hangingLine}/>
            <div className={styles.topLine}/>
            <div className={styles.middleLine}/>
            <div className={styles.bottomLine}/>
        </div>
    );
};

export default Drawing;