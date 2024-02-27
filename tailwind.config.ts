import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#457AF7",
        hoverCollorButton: "#4A6AE7",
        grayId: "#FFFFFFCC",
        backgroundApp: "#060b28",
        grayParagraph: "#CCCCCC",
        pokemonbug: "#76A866",
        pokemondark: "#333333",
        pokemondragon: "#7038f8",
        pokemonelectric: "#F9BE00",
        pokemonfairy: "#f469a9",
        pokemonfighting: "#c03028",
        pokemonfire: "#f08030",
        pokemonflying: "#6892B0",
        pokemonghost: "#735797",
        pokemongrass: "#48D0B0",
        pokemonground: "#f2cd5a",
        pokemonice: "#77d2f7",
        pokemonnormal: "#5c5c5c",
        pokemonpoison: "#a040a0",
        pokemonpsychic: "#f542bd",
        pokemonrock: "#BCAC66",
        pokemonsteel: "#b8b8d0",
        pokemonwater: "#457af7",
        pokemondefault: "#8A8A8A",
      },
    },
  },
  plugins: [],
};
export default config;
