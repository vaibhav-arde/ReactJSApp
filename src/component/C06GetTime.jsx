import React, { useState } from 'react'

const C06GetTime = () => {
    const getTime = new Date().toLocaleTimeString()
    const getDate = new Date().toLocaleDateString()

    const [time, setTime] = useState(getTime)
    const [date, setDate] = useState(getDate)
    const [digiClock, setDigiClock] = useState(getTime)

    const currTime = () => {
        const currentTime = new Date().toLocaleTimeString()
        setTime(currentTime)
        const currentDate = new Date().toLocaleDateString()
        setDate(currentDate)
    }
    setInterval(() => { 
        const currentTime = new Date().toLocaleTimeString()
        setDigiClock(currentTime) 
    }, 500)

    return (
        <>
            <h1>{`${time} ${date}`}</h1>
            <button type="button" onClick={currTime}>Get Current Time</button>
            <h1>{`Digital Clock : ${digiClock}`}</h1>
        </>
    )
}

export default C06GetTime;