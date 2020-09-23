import React, { createContext } from 'react';
import ComA from "./ComA";
import UseEffect from "./UseEffect";
import Pokemon from "./Pokemon";


const FirstName = createContext();
const LastName = createContext();

const App = () => {
    return (
        <>

            <hr />
            <Pokemon />
            <hr />
            <UseEffect/>
            <hr />
            <FirstName.Provider value={"VaibhaV"}>
                <LastName.Provider value={"Arde"}>
                    < ComA />
                </LastName.Provider>
            </FirstName.Provider>
            <hr />
        </>
    )
}
export default App;
export { FirstName, LastName };