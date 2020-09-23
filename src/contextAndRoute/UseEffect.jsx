import React, { useState, useEffect } from 'react';

const UseEffect = () => {
    const [cNum, setCNum] = useState(0);
    const [hNum, setHNum] = useState(0);

    useEffect(() => {
        document.title = `${cNum} Clicks`
        alert("You Just Clicked!! and now count is "+ cNum)
    }, [cNum])

    useEffect(() => {
        alert("You Just Hovered!! and now count is "+ hNum)
    }, [hNum])

    const handleCount = () => {
        setCNum(cNum + 1)
    }

    const handleHover = () => {
        setHNum(hNum + 1)
    }
    return <button
        value={cNum}
        onClick={handleCount}
        onMouseLeave={handleHover}
>Click Count:{cNum} Hover Count:{hNum}</button>
}
export default UseEffect;