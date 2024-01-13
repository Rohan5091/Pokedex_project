import axios from "axios";
import { useEffect } from "react";
import "./pokemonlist.css"
import { useState } from "react";
import Pokemons from "../Pokemons/pokemons.jsx";



const Pokemonlist=function () {

  let [isLoading,setIsloading]=useState(true)
  let [pokemonlist,setPokemonlist]=useState([])
  let  [pokeapi,setPokeapi]=useState("https://pokeapi.co/api/v2/pokemon")
  let [preUrl,setPreUrl]=useState("")
  let [nextUrl,setNextUrl]=useState("")

  async function DownloadData() {
      setIsloading(true)
      const result= await axios.get(pokeapi)
        
        setNextUrl(result.data.next) 
        setPreUrl(result.data.previous) 
  
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
  },[pokeapi])


  return(
    <>
     <div className="PokemonList_rapper">
         {(isLoading)?"Loading....":  
             pokemonlist.map((e)=> <Pokemons image={e.image} key={e.id} name={e.name}/>)
         }
     </div>
     <div className="Controller">
          <button disabled={preUrl==null} onClick={()=>setPokeapi(preUrl)}>Prev</button>
          <button disabled={nextUrl==null}  onClick={()=>setPokeapi(nextUrl)}>Next</button>
      </div>
    </>
  )
}

export default Pokemonlist;