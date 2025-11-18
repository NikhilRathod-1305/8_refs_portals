export default function ResultsModal({ ref,  results , timer}){
    return (
    <dialog ref={ref} className="result-modal">
        <h2>You {results}</h2>
        <p>Time taken: <strong>{timer} seconds</strong></p>
        <p>You stopped the timer <strong>with X seconds left</strong></p>
        <form method="dialog">
            <button>
                close
            </button>
        </form>
    </dialog>
    )
}