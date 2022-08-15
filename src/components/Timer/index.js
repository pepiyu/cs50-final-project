import { useEffect, useState } from 'react';
const Timer = () => {

    const [counter, setCounter] = useState(1200)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [countdown, setCountdown] = useState(false)

    useEffect(() => {

        countdown && counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
        setMinutes(Math.floor(counter / 60))
        setSeconds(counter % 60)

    } , [countdown, counter]);

    const twoDigits = (n) => {
        return n < 10 ? '0' + n : n;
    }

    
    return (
        <div className="timer box">
            <div className="timer-content">
                <div className="timer-title">
                    <h2>Timer</h2>
                </div>
                <div className="timer-body">
                    <span className="timer-countdown">{twoDigits(minutes)}:{twoDigits(seconds)}</span>
                </div>
                <button onClick={() => setCountdown(!countdown)} 
                style={countdown ? 
                {backgroundColor: '#fff', color: '#000'} : 
                {backgroundColor: '#000', color: '#fff'}}>{countdown ? 'Stop' : 'Start'}</button>
            </div>
        </div>
    )
}

export default Timer;