import { useEffect, useState } from 'react';
import { FaMinus } from 'react-icons/fa'

const Timer = ({timerVisible, setTimerVisible }) => {

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

    const handleMinus = () => {
        setTimerVisible(!timerVisible);
    }

    
    return (
        <div className="timer box" style={{display: timerVisible === true ? 'flex' : 'none'}}>
            <div className="box-title">
                <h2>Timer</h2>
                <FaMinus onClick={handleMinus}/>
            </div>
            <div className="timer-content">
                <div className="timer-body">
                    <span className="timer-countdown">{twoDigits(minutes)}:{twoDigits(seconds)}</span>
                </div>
            </div>
            <button onClick={() => setCountdown(!countdown)} 
                style={countdown ? 
                {backgroundColor: '#fff', color: '#525252'} : 
                {backgroundColor: '#525252', color: '#fff'}}>{countdown ? 'Pause' : 'Start'}
            </button>
        </div>
    )
}

export default Timer;