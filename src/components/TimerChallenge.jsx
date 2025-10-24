import { useState , useRef} from "react";
export default function TimerChallenge({ title , targetTime}) {
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);
    const timer = useRef();
    function handleStart(){
        setTimerStarted(true);
        timer.current = setTimeout(() => {setTimerExpired(true)}, targetTime * 1000)
    }

    function handleStop(){
        clearTimeout(timer.current);
    }
    return <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>You lost</p>}
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
}