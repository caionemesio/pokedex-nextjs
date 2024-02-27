'use client'
import { PokemonsContextData, PokemonsProviderProps, Type, pokemon } from "@/interfaces/pokemonInterface"
import { createContext, useContext, useEffect, useRef, useState } from "react"

const pokemonsContext = createContext<PokemonsContextData>({} as PokemonsContextData)

export function usePokemons() {
  const context = useContext(pokemonsContext)
  if (!context) {
    throw new Error('usePokemons must be used within a PokemonsProvider')
  }
  return context
}


export function PokemonsProvider({ children }: PokemonsProviderProps) {
  const [dataPokemon, setDataPokemon] = useState<pokemon[]>([])
  const [count, setCount] = useState<number>(0)
  const isInitialMount = useRef(true);
  const loadMorePokemons = () => {
    try {
      setCount((prevCount) => prevCount + 50);
      loadPokemons()
    } catch (error) {
      console.log("erro ao tentar carregar mais pokemons")
    }
  }

  const loadPokemons = async () => {
    try {
      const responseList = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${count}&limit=50`).then(res => res.json())
      const pokemonList = responseList.results

      const pokemonsPropertyPromises = pokemonList.map(async (pok: any) => {
        const pokemonResponse = await fetch(pok.url).then(res => res.json())
        const types = pokemonResponse.types.map((type: any) => ({ name: type.type.name, slot: type.slot }))
        return {
          name: pokemonResponse.name,
          id: pokemonResponse.id,
          image: pokemonResponse.sprites.other.dream_world.front_default,
          types: types
        }
      })
      const pokemonsProperty = await Promise.all(pokemonsPropertyPromises)
      setDataPokemon(prevData => [...prevData, ...pokemonsProperty])

    } catch (error) {
      console.log("erro ao fazer requisição na própria api", error)
    }
  }



  useEffect(() => {

    if (isInitialMount.current) {
      loadPokemons()
      setCount((prevCount) => prevCount + 50);
      isInitialMount.current = false
    }
  }, [])

  const value: PokemonsContextData = {
    dataPokemon,
    loadMorePokemons
  }

  return (
    <pokemonsContext.Provider value={value} >
      {children}
    </pokemonsContext.Provider>
  )
}

