import axios from "axios";
import { useEffect } from "react";
import "./pokemonlist.css"
import { useState } from "react";
import Pokemons from "../Pokemons/pokemons.jsx";



const Pokemonlist=function () {

  let [isLoading,setIsloading]=useState(true)
  let [pokemonlist,setPokemonlist]=useState([])
  const link="https://pokeapi.co/api/v2/pokemon"
  async function DownloadData() {
      const result= await axios.get(link)
      const pokedata=result.data.results
      const pokemonpromise= await pokedata.map((pokdata)=> axios.get(pokdata.url))
      const pokemonsdata= await axios.all(pokemonpromise);
      const pokemons=pokemonsdata.map((a)=>{
        return{
           id: a.data.id,
           name:a.data.name,
           type:a.data.types,
           image: (a.data.sprites.other)? a.data.sprites.other.dream_world.front_default : a.data.sprites.front_shiny
        }
      })
      setPokemonlist(pokemons)
      setIsloading(false)
  }

  useEffect(()=>{
    DownloadData()
  },[])


  return(
     <div className="PokemonList_rapper">
         <p>Pokemons List</p>
         {(isLoading)?"Loading....":  
             pokemonlist.map((e)=> <Pokemons image={e.image} key={e.id} name={e.name}/>)
         }
     </div>
  )
}

export default Pokemonlist;