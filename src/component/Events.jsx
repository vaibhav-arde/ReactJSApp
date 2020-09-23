import React, { useState } from "react";

const Events = () => {

    const [bg, setBg] = useState("Orange")
    const [btnName, setBtnName] = useState("Come Here")

    const mouseEnter = () => {
        setBg("Red")
        setBtnName("Leave me")
    }
    
    const mouseLeave = () => {
        setBg("Orange")
        setBtnName("Come Here")
    }

    return (
        <>
            <div>
                <button style={{ background: bg, cursor: "pointer" }}
                    onMouseEnter={mouseEnter}
                    onMouseLeave = {mouseLeave}
                    
                >{btnName}</button>
            </div>
        </>
    )
}

export default Events;