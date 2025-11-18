import { useState, useRef } from "react";
import ResultsModal from "./ResultsModal";

export default function TimerChallenge({ title, targetTime }) {
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);
    const timer = useRef();
    const dialog = useRef();
    function handleStart() {
        setTimerStarted(true);
        timer.current = setTimeout(() => { 
            setTimerExpired(true) 
            dialog.current.showModal();
        }, 
            targetTime * 1000)
    }

    function handleStop() {
        clearTimeout(timer.current);
    }
    return (
        <>
            <ResultsModal ref={dialog} results="lost" timer={targetTime} />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button className="start-challenge" onClick={timerStarted ? handleStop : handleStart}>
                        {timerStarted ? 'Stop Challenge' : 'Start Challenge'}
                    </button>
                </p>
                <p className={timerStarted ? 'active' : undefined}>
                    Time is running... /Time inactive
                </p>
            </section>
        </>
    )
}