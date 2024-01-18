import axios from "axios"
import { useEffect, useState } from "react"


function usePokemonDetails(id,name) {
   
  
     const [states,setStates]=useState({
        isLoading:true,
        pokemons_detail:{},
        pokeapi:`https://pokeapi.co/api/v2/pokemon/${name||id}`,
       })
  
    
     // if (id) {
     //    console.log("in id");
     //    setStates((state)=>({
     //       ...state,
     //       pokeapi:`https://pokeapi.co/api/v2/pokemon/${id}`,
     //     }))
         
     // } else if(name) {
     //    setStates((state)=>({
     //       ...state,
     //       pokeapi:`https://pokeapi.co/api/v2/pokemon/${name}`,
     //     })) 
     // }else{
     //     console.log("neigther the name nor the id is found")
     // }
     
     let response;
     const Download_Pokemon= async function () {
      try {
          response= await axios.get(states.pokeapi)
      
        const data={
           name:response.data.name,
           weight:response.data.weight,
           height:response.data.height,
           image:(response.data.sprites.other)? response.data.sprites.other.dream_world.front_default : response.data.sprites.front_shiny,
           types:response.data.types.map((t)=>t.type.name
           )
        }
       
        setStates((state)=>({
           ...state,
           pokemons_detail:data
         }))
         
      } catch (error) {
         console.log(error.message);
         return
     }
     
     }
     useEffect(()=>{
      Download_Pokemon()
     },[states.pokeapi])  
   
   
  
     return [states,setStates];
  
}


export default usePokemonDetails;