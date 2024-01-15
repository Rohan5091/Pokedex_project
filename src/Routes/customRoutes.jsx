

import { Routes,Route } from "react-router-dom";
import Pokemonlist from "../Componets/Pokemonlist/Pokemonlist.jsx";
import PokemonDetail from "../Componets/PokemonDetails/PokemonDetails.jsx";


const CustomeRoutes=function () {
  return(
     <Routes>
         <Route path="/" element={<Pokemonlist/>}/>
         <Route path="/pokemon/:id" element={<PokemonDetail/>}/>
     </Routes>

  )
}

export default CustomeRoutes;