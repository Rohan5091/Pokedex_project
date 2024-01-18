import { useParams } from "react-router-dom";
import "./PokemonDetails.css"
import usePokemonDetails from "../../Hooks/usePokemonDetail.jsx";


function PokemonDetail({pokemonName}) {
   const { id }=useParams(); 
   let [states,setStates]=usePokemonDetails(id,pokemonName)
   return(
      <div className="Pokemon-details-wrapper">
           <div className="img">
              <img src={states.pokemons_detail.image} alt="Pokemon Image"/>
           </div>
           <div className="Pokemon_details">
              <div className="pokemon_name">{states.pokemons_detail.name}</div> 
              <div className="pokemon_height">height:{states.pokemons_detail.height}</div> 
              <div className="pokemon_weight">weight:{states.pokemons_detail.weight}</div>
           </div>
      </div>
   )
}

export default PokemonDetail;