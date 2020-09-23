import React from "react";

const SearchImg = (props) => {
    const img = `https://source.unsplash.com/600x400/?${props.name}`
    // const pexelImg =`https://api.pexels.com/v1/search/?${props.img}`
    return (
        <>
            <div>
                <img src={img} alt="unsplashSearch" />
                {/* <img src={pexelImg} alt="pexelSearch" />
                <img src={pexelImg} alt="pexelSearch1" sizes="600*400" srcset=""/> */}
            </div>
        </>
    )
}

export default SearchImg