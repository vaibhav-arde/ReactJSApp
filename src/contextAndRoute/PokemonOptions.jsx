import React from "react";

const PokemonOptions = (props) => {

    return (
        <>
            {props.res.map((result) => {
                return <option
                    value={result.name}
                    key={result.name}
                    onSelect={() => {
                        props.getPokeID(result.url)
                    }}
                >
                    {result.name}
                </option>
            })}
        </>
    )
}
export default PokemonOptions;