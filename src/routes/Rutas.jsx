import { useRoutes } from "react-router"
import Inicio from '../pages/Inicio'
import NoEncontrado from "../pages/NoEncontrado"
import Portafolio from "../pages/Portafolio"
import Servicios from "../pages/Servicios"
import Curriculum from "../pages/Curriculum"



const Rutas = () => {
    const hookRutas =useRoutes(
        [
            {
                path: "/",
                element: <Inicio/>
            },
            {
                path: "/portafolio",
                element: <Portafolio/>
            },
            {
                path: "/servicios",
                element: <Servicios/>
            },
            {
                path: "/curriculum",
                element: <Curriculum/>
            },
            {
                path: '/*',
                element: <NoEncontrado/>
            },
        ]
    )
  return hookRutas
}

export default Rutas
