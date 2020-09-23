import React from "react";
import { useHistory } from "react-router-dom";

const Error = () => {
    const history = useHistory()
    return (
        <>
            <h1>404 Error: Page not found :(</h1>
            <p>Sorry, This page does't exist</p>
            <button onClick={() => history.push("/")}>Go to Home Page</button>
        </>
    )
}
export default Error;