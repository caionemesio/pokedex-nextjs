'use client'
import { usePokemons } from "@/hooks/usePokemons";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoadPokemons() {
  const { loadMorePokemons } = usePokemons()
  const [buttonVisible, setButtonVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center  ">
      <Image src={"/pikachu.gif"} width={200} height={200} alt="pikachu gif"></Image>
      {buttonVisible ? <button onClick={loadMorePokemons} className="bg-primary px-8 py-4">
        Buscar mais pokemons
      </button> : ""}
    </div>
  )
}