import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonOptions from "./PokemonOptions";

const Pokemon = () => {
    const [pData, setPData] = useState("")
    const [res, setRes] = useState([])
    const [pid, setPid] = useState("")

    useEffect(() => {
        async function getData() {
            const pokemons = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
            setRes(pokemons.data.results)
        }
        getData()
    }, [])

    useEffect(() => {
        if (pData) {
            const data = res.filter((result) => result.name === pData)
            async function getData() {
                const pokemonData = await axios.get(`${data[0].url}`)
                setPid(pokemonData.data.id)
            }
            getData()
        }
    })

    return (
        <>
            <h1>Get Pokemon Image:</h1>
            {pData === "" && <h2>Select Pokemon</h2>}
            {pData !== "" &&
                <h2>Selected Pokemon is :
                <span style={{ color: "orange" }}>{pData.toUpperCase()}</span>
                </h2>
            }
            <select
                value={pData}
                onChange={(e) => {
                    setPData(e.target.value)
                }}>
                <PokemonOptions
                    res={res}
                />
            </select>
            <br />
            {(pid !== "") && <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pid}.png`} alt="Pokemon Name" />}
        </>
    )
}

export default Pokemon;