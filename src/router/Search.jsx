import React, { useState } from "react";
import SearchImg from "./SearchImg";

const Search = () => {
    const [img, setImg] = useState("")
    const handleSearch = (event) => {
        const data = event.target.value;
        console.log(data)
        setImg(data)
    };

    return (
        <>
            <div className="searchbar container text-center">
                <h2>Enter any word in below input box, to get respective image.</h2>
                <input
                    type="text"
                    placeholder="Search Anything..."
                    value={img}
                    onChange={handleSearch}
                />
                {img === ""? <SearchImg name="namaste"/>: <SearchImg name={img}/>}
            </div>
        </>
    )
}
export default Search;