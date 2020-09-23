import React, { useState } from "react";

const LoginFormSubmit = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [fullName, setFullName] = useState()

    const getFname = (e) => {
        console.log(e.target.value)
        setFirstName(e.target.value)
    }
    const getLname = (e) => {
        console.log(e.target.value)
        setLastName(e.target.value)
    }

    const submitForm = (e) => {
        e.preventDefault()
        setFullName(`${firstName} ${lastName}`)
        fullName && fullName !== ' ' && alert(`Form Submitted Successfully!!`)
    }

    return (
        <>
            <form onSubmit={submitForm}>
                {fullName && fullName !== ' ' && <h1>{`Your fullname is: ${fullName}`}</h1>}
                <label>{`Enter firstname: ${firstName}`}</label>
                <br />
                <input
                    type="text"
                    name="firstname"
                    placeholder="Enter your firstname"
                    value={firstName}
                    onChange={getFname}
                />
                <br />
                <label>{`Enter lastname: ${lastName}`}</label>
                <br />
                <input
                    type="text"
                    name="lastname"
                    placeholder="Enter your lastname"
                    value={lastName}
                    onChange={getLname}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default LoginFormSubmit;