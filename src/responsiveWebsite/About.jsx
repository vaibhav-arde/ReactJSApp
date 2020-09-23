import React from "react";
import Common from "./Common";
import web from "../images/deskSetup.jpg"

const About = () => {
    return (
        <>
            <Common 
                heading = "Welcome to "
                imgsrc = {web}
                visit = "/contact"
                btnText = "Contact Us"
            />
        </>
    )
}
export default About;