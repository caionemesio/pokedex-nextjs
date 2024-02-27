import { ReactNode } from "react"

export interface pokemon {
  id: number,
  name: string,
  image: string | null
  types: Type[]
}

export interface Type {
  name: string,
  slot: number
}


export interface PokemonsContextData {
  dataPokemon: pokemon[]
  loadMorePokemons: () => void;
}
export interface PokemonsProviderProps {
  children: ReactNode;
}