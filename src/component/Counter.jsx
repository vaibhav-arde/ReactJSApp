import React, { useState } from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';
import RemoveIcon from '@material-ui/icons/Remove';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const Counter = () => {
    const [count, setCount] = useState(0)

    const incCount = () => {
        setCount(count + 1)
    }

    const decCount = () => {
        (count > 0)
            ? setCount(count - 1)
            : alert(`Count has reached minimum value i.e. 'Zero'`)
    }
    const resCount = () => {
        setCount(0)
    }

    return (
        <>
            <h1>{`Current Count is : ${count}`}</h1>
            <Tooltip title="Add">
                <Button type="button" onClick={incCount} > < AddBoxIcon /> </Button>
            </Tooltip>
            <Tooltip title="Subtract">
                <Button type="button" onClick={decCount} > < RemoveIcon /> </Button>
            </Tooltip>
            <Tooltip title="Reset">
                <Button type="button" onClick={resCount} > < RotateLeftIcon /> </Button>
            </Tooltip>
        </>
    )
}

export default Counter;