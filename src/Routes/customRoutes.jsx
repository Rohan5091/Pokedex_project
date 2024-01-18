

import { Routes,Route } from "react-router-dom";
import PokemonDetail from "../Componets/PokemonDetails/PokemonDetails.jsx";
import Pokedex from "../Componets/pokedex/pokedex.jsx";


const CustomeRoutes=function () {
  return(
     <Routes>
         <Route path="/" element={<Pokedex/>}/>
         <Route path="/pokemon/:id" element={<PokemonDetail/>}/>
     </Routes>

  )
}

export default CustomeRoutes;