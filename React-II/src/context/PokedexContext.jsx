import { createContext, useState } from "react"

export const PokedexContext = createContext()

const PokedexProvider = ({children}) => {
    const [pokemon, setPokemon] = useState([])
    return (
        <PokedexContext.Provider value={{pokemon, setPokemon}}>
            {children}
        </PokedexContext.Provider>
    )
}

export default PokedexProvider