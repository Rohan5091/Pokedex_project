
import { Link } from 'react-router-dom'
import './App.css'
import Searchresult from "./Componets/Search/search.jsx"
import CustomeRoutes from './Routes/customRoutes.jsx'
function App() {
  

  return (
    <div>
       <Link to={"/"}>
       <h1 className="PokeHeading" >Pokedex</h1>
       </Link>
       <CustomeRoutes/>
    </div>
  )
}

export default App
