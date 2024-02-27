"use client"
import Header from "@/components/Header/Index"
import { pokemonsSlide } from "@/utils/pokemonsSlide";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home() {
  return (

    <main className="p-12" >
      <Header />
      <section className="flex justify-around">
        <div className="flex flex-col justify-center items-center ">
          <div className="flex ">
            <h2 className="text-white text-8xl font-bold">Pokédex</h2>
            <Image className="w-48 h-40 mt-[-20px]" src={"/blue-pokeball.svg"} width={0} height={0} alt="blue pokeball" />
          </div>
          <p className="text-grayParagraph text-xl mb-4">Explore pokémons na Pokédex</p>
          <button className="text-white bg-primary px-8 py-4 rounded-xl transition-colors duration-300 ease-in-out hover:bg-hoverCollorButton">
            <Link href={"/pokemons"}>Pesquisar Pokemons </Link>
          </button>
        </div>

        <Carousel className="max-w-[615px]" showIndicators={true} infiniteLoop={true} showArrows={false} showStatus={false} showThumbs={false} interval={2000}  >
          {pokemonsSlide.map(pokemon =>
            <div key={pokemon.id}>
              <Image src={pokemon.url} width={0} height={0} style={{ width: "455px", height: "400px" }} alt={`${pokemon.name} image`} />
            </div>)}
        </Carousel>

      </section>
    </main>
  );
}
