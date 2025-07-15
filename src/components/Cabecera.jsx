import './Cabecera.scss'
import SearchBar from './SearchBar'
import Navbar from './Navbar'

const Cabecera = () => {
  return (
    <header className="main-header">
    <input type="checkbox" id="menu"/>
  
    <Navbar />

   <SearchBar/>

  </header>
  )
}

export default Cabecera
