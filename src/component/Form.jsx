import React, { useState } from 'react';

const Form = () => {
    const [name, setName] = useState("");
    const [fullName, setFullName] = useState("")

    const getName = (e) => {
        console.log(e.target.value)
        setName(e.target.value)
    }

    const clickMe = () => {
        setFullName(name)
    }
    return (
        <>
            <h1>{`Hello : ${fullName}`}</h1>
            <h3>{`You entered : ${name}`}</h3>
            <input type="text"
                placeholder="Enter your name"
                value={name}
                onChange={getName} />
            <button onClick={clickMe}>Click Me</button>
        </>
    )
}

export default Form;