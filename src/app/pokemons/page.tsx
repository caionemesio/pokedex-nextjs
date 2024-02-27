"use client"
import LoadPokemons from "@/components/loadPokemons/Index";
import { usePokemons } from "@/hooks/usePokemons";
import Image from "next/image";
import Link from "next/link";
import { IoMdSearch } from "react-icons/io"
import Style from "./style.module.scss"

export default function Pokemons() {
  const { dataPokemon } = usePokemons()
  function uppercaseFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  return (
    <div className="py-12">
      <header className="flex justify-between px-12">
        <Link href="/">
          <Image src={"/colorful_logo.svg"} priority={true} width={159} height={59} alt="colorful logo" />
        </Link>
        <div className="  flex justify-between  ">
          <input type="text" placeholder="Search Pokemons" className="bg-backgroundApp px-5 py-2 border-primary border-2 h-10 rounded-l-xl focus:outline-none focus:border-hoverCollorButton focus:border-2 " />
          <button className="bg-primary size-10 flex justify-center items-center rounded-r-xl hover:bg-hoverCollorButton "><IoMdSearch size={16} color="white" /></button>
        </div>
      </header>
      <main>
        <section className="my-12 max-w-max flex justify-center flex-wrap ">
          {dataPokemon.map((pokemon) => (
            <div key={pokemon.id} className={`flex w-96 mx-5 my-8 p-8 h-52  bg-pokemon${pokemon.types[0]}`}>

              <div>
                <h2 className="text-3xl mb-2">{uppercaseFirstLetter(pokemon.name)}</h2>
                <h2 className="text-grayId mb-8 text-3xl">{`#${pokemon.id}`}</h2>
                <div className="flex gap-2">
                  {pokemon.types.map((type) => (
                    <div key={type.slot} >
                      <img src={`/badges/${type.name}.jpg`} alt={type.name} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                {pokemon.image ? (
                  <Image src={pokemon.image} alt={`${pokemon.name} image`} width={0} height={0} style={{ width: "160px", height: "160px" }} />
                ) : <img src="/pokemon_images/pokemon_default.png" alt="pokemon default" />}

              </div>
            </div>
          ))}
        </section>
        <LoadPokemons />
      </main>
    </div>
  )
}