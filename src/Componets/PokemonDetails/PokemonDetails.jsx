import { useParams } from "react-router-dom";
import "./PokemonDetails.css"
import axios from "axios";
import { useEffect, useState } from "react";

function PokemonDetail() {

   const { id }=useParams();
   const [pokemons_detail,setPokemons_detail]=useState({})

 
   const Download_Pokemon= async function () {
       const response= await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
       console.log(response)
       setPokemons_detail({
          name:response.data.name,
          weight:response.data.weight,
          height:response.data.height,
          image:(response.data.sprites.other)? response.data.sprites.other.dream_world.front_default : response.data.sprites.front_shiny,
          types:response.data.types.map((t)=>t.type.name
          )
       })
       
   }

   useEffect(()=>{
    Download_Pokemon()
   },[])

   return(
      <div className="Pokemon-details-wrapper">
           <div className="img">
           <img src={pokemons_detail.image} alt="Pokemon Image"  />
           </div>
           <div className="Pokemon_details">
           <div className="pokemon_name">{pokemons_detail.name}</div> 
           <div className="pokemon_height">height:{pokemons_detail.height}</div> 
           <div className="pokemon_weight">weight:{pokemons_detail.weight}</div>
           </div>
      </div>
   )
}

export default PokemonDetail;