
import './SearchBar.scss'


const SearchBar = () => {
 
  return (
    <div className="search-bar">
    <div className="menu-toogle">
      <label htmlFor="menu" className="menu-toogle__label">
        <span className="menu-toogle__top-bread"></span>
        <span className="menu-toogle__meat"></span>
        <span className="menu-toogle__bottom-bread"></span>
      </label>
      <label htmlFor="menu" className='close'>x</label>
    </div>
    
  </div> 
  )
}

export default SearchBar
