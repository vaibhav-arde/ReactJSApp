import React, { useState } from "react";

const LoginFormSubmit2 = () => {

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: ''
    })
    const [fullName, setFullName] = useState()

    const updateUser = (e) => {
        const { name, value } = e.target
        setUser((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const submitForm = (e) => {
        e.preventDefault()
        setFullName(`${user.firstName} ${user.lastName}`)
        fullName && fullName !== ' ' && alert(`Form Submitted Successfully!!`)
    }

    return (
        <>
            <form onSubmit={submitForm}>
                {fullName && fullName !== ' ' && <h1>{`Your fullname is: ${fullName}`}</h1>}

                <label>{`Enter firstname: ${user.firstName}`}</label>
                <br />
                <input
                    type="text"
                    name="firstName"
                    placeholder="Enter your firstname"
                    value={user.firstName}
                    onChange={updateUser}
                />
                <br />
                <label>{`Enter lastname: ${user.lastName}`}</label>
                <br />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Enter your lastname"
                    value={user.lastName}
                    onChange={updateUser}
                />
                <br />
                <label>{`Enter Email ID: ${user.email}`}</label>
                <br />
                <input
                    type="text"
                    name="email"
                    placeholder="Enter your lastname"
                    value={user.email}
                    onChange={updateUser}
                />
                <br />
                <label>{`Enter Mobile number: ${user.mobile}`}</label>
                <br />
                <input
                    type="text"
                    name="mobile"
                    placeholder="Enter your mobile number"
                    value={user.mobile}
                    onChange={updateUser}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default LoginFormSubmit2;