import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Rutas from './routes/Rutas'
import Footer from './components/Footer'
import Cabecera from './components/Cabecera'
import DatosProyectos from './components/DatosProyecto'
import DatosEstructurados from './components/DatosEstructurados'
import DatosCurriculum from './components/DatosCurriculum'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <DatosEstructurados/>
    <Cabecera/>
    <DatosProyectos/>
    <DatosCurriculum/>
      <Rutas/>
      <Footer/>
    </BrowserRouter>
    </>
    
  )
}

export default App
