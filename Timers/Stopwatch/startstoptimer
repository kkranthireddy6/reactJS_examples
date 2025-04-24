import React, { useEffect, useState } from 'react'

function Timers() {
    const [isRunning, setIsRunning] = useState(false)
    const [timer, setTimer] = useState(0)

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTimer(prevtimer => prevtimer + 1)
            }, 1000);
        }
        return ()=>clearInterval(interval)
    }, [isRunning])

    const handleStart = () => {
        setIsRunning(true)
    }

    const handleStop = () => {
        setIsRunning(false)
    }

    return (
        <div>
            <h2>Timer : {timer}</h2>
            <button onClick={handleStart} disabled={isRunning}>START</button>
            <button onClick={handleStop} disabled={!isRunning}>STOP</button>
        </div>
    )
}

export default Timersimport React, { useEffect, useState } from 'react'

function Timers() {
    const [isRunning, setIsRunning] = useState(false)
    const [timer, setTimer] = useState(0)

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTimer(prevtimer => prevtimer + 1)
            }, 1000);
        }
        return ()=>clearInterval(interval)
    }, [isRunning])

    const handleStart = () => {
        setIsRunning(true)
    }

    const handleStop = () => {
        setIsRunning(false)
    }

    return (
        <div>
            <h2>Timer : {timer}</h2>
            <button onClick={handleStart} disabled={isRunning}>START</button>
            <button onClick={handleStop} disabled={!isRunning}>STOP</button>
        </div>
    )
}

export default Timers
