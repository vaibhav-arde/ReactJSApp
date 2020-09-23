import React from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";

const User = () => {
    const { name, lname } = useParams()
    const location = useLocation()
    const history = useHistory()
    console.log(history)

    return (
        <>
            <div className="container text-center">
                <h1>Welcome {name} {lname}, Hope you are doing great!!</h1>
                <h2>Your current location is {location.pathname}</h2>
                {location.pathname === `/user/Dear/Guest`
                    ? <button type="button" className="btn btn-outline-warning btn-sm" >Please Login</button>
                    : <button type="button" className="btn btn-outline-success btn-sm" onClick={() => alert("You are Awesome!!!")}>Click here</button>
                }
                <br />
                <button type="button" className="btn btn-outline-success btn-sm" onClick={() => history.push("/")}>Go to Home Page</button>
                <br />
                <button type="button" className="btn btn-outline-success btn-sm" onClick={() => history.goBack()}>Previous Page</button>
                <button type="button" className="btn btn-outline-success btn-sm" onClick={() => history.goForward()}>Next Page</button>
            </div>
        </>
    )
}
export default User;