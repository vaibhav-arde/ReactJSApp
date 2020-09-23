import React, { useState } from "react";

const Contact = () => {
    const [custDeatils, setCustDeatils] = useState({
        fullName: "",
        telephone: "",
        email: "",
        msg: ""
    })

    const inputEvent = (e) => {
        const { name, value } = e.target;
        setCustDeatils((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const submitForm = (e) => {
        e.preventDefault()
        alert(`Customer details are: 
            Name : ${custDeatils.fullName}
            Phone : ${custDeatils.telephone}
            Email : ${custDeatils.email}
            Message : ${custDeatils.msg}`)
        setCustDeatils((prevState) => {
            return {
                ...prevState,
                fullName: "",
                telephone: "",
                email: "",
                msg: ""
            }
        })
    }
    return (
        <>
            <div className="container">
                <div className="my-5">
                    <h1 className="text-center">What you want to Devlope today? Contact Us!!</h1>
                </div>
                <div className="container contact_div">
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto">
                            <form onSubmit={submitForm}>
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Your Name : </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        name="fullName"
                                        value={custDeatils.fullName}
                                        onChange={inputEvent}
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Contact Number : </label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        name="telephone"
                                        value={custDeatils.telephone}
                                        onChange={inputEvent}
                                        placeholder="Enter your contact Number"
                                        // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Email address : </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        name="email"
                                        value={custDeatils.email}
                                        onChange={inputEvent}
                                        placeholder="name@example.com"
                                        required
                                    />
                                </div>
                                {/* <div className="form-group">
                                <label for="exampleFormControlSelect2">What help you need?</label>
                                <select multiple className="form-control" id="exampleFormControlSelect2">
                                    <option>Web Application Devlopment</option>
                                    <option>Mobile Application Devlopment</option>
                                    <option>Software Devlopment</option>
                                    <option>Test Automation</option>
                                    <option>Digital Marketing</option>
                                    <option>Analytics</option>
                                </select>
                            </div> */}
                                <div className="form-group">
                                    <label for="exampleFormControlTextarea1">Enter your requirements in detail : </label>
                                    <textarea
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                        name="msg"
                                        value={custDeatils.msg}
                                        onChange={inputEvent}
                                        required
                                    ></textarea>
                                </div>
                                <br />
                                <div className="col-12">
                                    <button className="btn btn-outline-primary" type="submit">Submit form</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </>
    )
}
export default Contact;