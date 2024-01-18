import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


function usePokemonList() {
 
  const [states,setStates]=useState({
    isLoading:true,
    pokemonlist:[],
    pokeapi:"https://pokeapi.co/api/v2/pokemon",
    preUrl:"",
    nextUrl:""
   })

  async function DownloadData() {

      
      setStates((state)=>({...state,isLoading:true}))

      const result= await axios.get(states.pokeapi)
    
      setStates((state)=>({...state,nextUrl:result.data.next,preUrl:result.data.previous}))

  
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
      setStates((state)=>({...state,isLoading:false,pokemonlist:pokemons}))

  }

  useEffect(()=>{
    DownloadData()
  },[states.pokeapi])

  return [states,setStates];
}

export default usePokemonList;