
import Searchresult from "../Search/search.jsx";
import Pokemonlist from "../Pokemonlist/Pokemonlist.jsx"
import { useState } from "react";
import PokemonDetail from "../PokemonDetails/PokemonDetails.jsx";

function Pokedex() {
  const [searchTerm,setSearchTerm]=useState("")
   return(
    <div className="container">
      <Searchresult updateSearchTerm={setSearchTerm}/>
      {(searchTerm.length==0)?<Pokemonlist/>:<PokemonDetail key={searchTerm} pokemonName={searchTerm}/>}    
    </div>
   )
   
}

export default Pokedex;