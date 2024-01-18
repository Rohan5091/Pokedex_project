
import "./pokemonlist.css"
import Pokemons from "../Pokemons/pokemons.jsx";
import usePokemonList from "../../Hooks/usePokemonList.jsx";




const Pokemonlist=function () {

  
 const [states,setStates]=usePokemonList() 
  return(
    <>
     <div className="PokemonList_rapper">
         {(states.isLoading)?"Loading....":  
            states.pokemonlist.map((e)=> <Pokemons image={e.image} key={e.id} name={e.name} id={e.id}/>)
         }
     </div>
     <div className="Controller">
          
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