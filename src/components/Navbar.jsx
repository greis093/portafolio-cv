
import './Navbar.scss'
import { NavLink } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.scss";
const Navbar = () => {
 
  return (
    <nav className="nav-bar">
      {/* Logo*/}
      <div className="logo">
        <span>G</span>
        <h3 className="logo-name">Greicy Agreda Pacheco</h3>
      </div>
  {/* foto*/}
      <div className="profile-img">
      <img src="/imgs/my-profile-img.webp" alt="foto" className="img-fluid rounded-circle"/>
    </div>

   {/* Social links*/}
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/greicy-agreda-pacheco-426969121/"
          className="linkedin"
        >
          <i className="bi bi-linkedin" />
        </a>
        <a
          href="https://www.instagram.com/greicy.agreda/?hl=es"
          className="instagram"
        >
          <i className="bi bi-instagram"></i>
        </a>
        <a href="https://github.com/greis093" aria-label="github">
          <i className="bi bi-github"></i>
        </a>
        <a href="https://app.netlify.com/teams/yirley093/projects?sort_by=created_at" aria-label="netlify">
          <i className="bi bi-globe"></i>
        </a>
      </div>
      <label  className="nav-bar__nav-list">
       {/* Menu*/}
          <div  >
            <ul className='nav-bar__ul_nav'>
              <li className="nav-bar__nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <i className="bi bi-house navicon "></i>
                  Inicio
                </NavLink>
              </li>
              <li className="nav-bar__nav-item">
                <NavLink
                  to="/portafolio"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <i className="bi bi-images navicon"></i>
                  Portafolio
                </NavLink>
              </li>
              <li className="nav-bar__nav-item">
                <NavLink
                  to="/servicios"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <i className="bi bi-hdd-stack navicon"></i>
                  Servicios
                </NavLink>
              </li>
              <li className="nav-bar__nav-item">
                <NavLink
                  to="/curriculum"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <i className="bi bi-person navicon"></i>
                  Curriculum
                </NavLink>
              </li>
            </ul>
          </div>
      </label>
    </nav> 
  )
}

export default Navbar
