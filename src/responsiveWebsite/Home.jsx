import React from "react";
import Common from "./Common";
import web from "../images/Rocket2.jpg"

const Home = () => {
    return (
        <>
            <Common 
                heading = "Grow your bussiness with"
                imgsrc = {web}
                visit = "/service"
                btnText = "Get Started"
            />
        </>
    )
}
export default Home;