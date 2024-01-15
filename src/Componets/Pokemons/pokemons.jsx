import { Link } from "react-router-dom";
import "./pokemons.css"

const Pokemons=function ({image,name,id}) {
    return (
        <>
        <Link className="pokemons" to={`/pokemon/${id}`}>           
              <h2>{name}</h2>
              <img src={image}></img>
        </Link>
        </>
    )
  
}

export default Pokemons;