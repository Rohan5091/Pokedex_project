import axios from "axios";
import { useEffect } from "react";
import "./pokemonlist.css"
import { useState } from "react";
import Pokemons from "../Pokemons/pokemons.jsx";
import Searchresult from "../Search/search.jsx";



const Pokemonlist=function () {

  // let [isLoading,setIsloading]=useState(true)
  // let [pokemonlist,setPokemonlist]=useState([])
  // let  [pokeapi,setPokeapi]=useState("https://pokeapi.co/api/v2/pokemon")
  // let [preUrl,setPreUrl]=useState("")
  // let [nextUrl,setNextUrl]=useState("")

   const [states,setStates]=useState({
    isLoading:true,
    pokemonlist:[],
    pokeapi:"https://pokeapi.co/api/v2/pokemon",
    preUrl:"",
    nextUrl:""
   })

  async function DownloadData() {

      //setIsloading(true)
      setStates((state)=>({...state,isLoading:true}))

      const result= await axios.get(states.pokeapi)
        
        // setNextUrl(result.data.next) 
        // setPreUrl(result.data.previous) 
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
      console.log(pokemons)

      // setPokemonlist(pokemons)
      // setIsloading(false)
      setStates((state)=>({...state,isLoading:false,pokemonlist:pokemons}))

  }

  useEffect(()=>{
    DownloadData()
  },[states.pokeapi])


  return(
    <>
    <Searchresult/>
     <div className="PokemonList_rapper">
         {(states.isLoading)?"Loading....":  
            states.pokemonlist.map((e)=> <Pokemons image={e.image} key={e.id} name={e.name} id={e.id}/>)
         }
     </div>
     <div className="Controller">
          {/* <button disabled={preUrl==null} onClick={()=>setPokeapi(preUrl)}>Prev</button>
          <button disabled={nextUrl==null}  onClick={()=>setPokeapi(nextUrl)}>Next</button> */}
          
          <button disabled={states.preUrl==null}  
          onClick={()=>{
            const a=states.preUrl
            setStates((state)=>({...state,pokeapi:a}))
          }
          }>Prev</button>
          <button disabled={states.nextUrl==null}  
          onClick={()=>{
            const a=states.nextUrl
            setStates((state)=>({...state,pokeapi:a}))
          }
          }>Next</button>
      </div>
    </>
  )
}

export default Pokemonlist;