import React from 'react'
import "./Datos_portafolio.scss"

const Datos_portafolio = () => {
  return (
    <div className="portafolio">
            <div className="portafolio__values"> 
               <div className="portafolio__values__foto">  
                <img src="/imgs/floreria.webp" alt="foto" className='portafolio__img'/>
              </div> 
              <div className="portafolio__values__text">
                <h3 className="portafolio__values__text__h3">Proyecto floreria</h3>
                <p className="portafolio__values__text__sub">Aplicación Web Full Stack : React + Node.js + MongoDB</p>
                <ul className="portafolio__values__text__lista">
                <li>Frontend responsive en React / Netlify</li> 
                <li>Backend en Node.js + Express + MongoDB Atlas (deploy en Render)</li>
                <li>CRUD completo, API RESTful y consumo desde frontend</li>
                <li>Desarrollo en repos independientes con Git + GitHub</li>
                </ul>
                   {/* Social links*/}
              <div className="social-links-portafolio">
                <a href="https://github.com/greis093/integrador-3-backend" aria-label="github">
                  <i className="bi bi-github"></i>
                </a>
                <a href="https://integrador3backend.netlify.app/" aria-label="netlify">
                  <i className="bi bi-globe"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="portafolio__values">
            <div className="portafolio__values__foto">
              <img src="/imgs/pasteleria-wordpress.webp" alt="foto" className='portafolio__img'/>
            </div>
            <div className="portafolio__values__text">
               <h3 className="portafolio__values__text__h3">Proyecto pasteleria</h3>
                <p className="portafolio__values__text__sub">Aplicación Web wordpress : integrado con mercado pago</p>
                <ul className="portafolio__values__text__lista">
                <li>Optimización SEO (estructura, metadatos, velocidad)</li> 
                <li>Integración de pagos online con Mercado Pago</li>
                <li>Configuración completa de una tienda virtual funcional</li>
                <li>Creación del diseño visual del sitio adaptado vista pc y mobil</li>
                </ul>
                   {/* Social links*/}
              <div className="social-links-portafolio">
                <a href="https://drive.google.com/drive/folders/1RupqWJgTMseeWFptBoNfvTPccA86z6sb?usp=drive_link" aria-label="github">
                  <i className="bi bi-card-image"></i>
                </a>
              </div>
            </div>
        </div>
        <div className="portafolio__values">
          <div className="portafolio__values__foto">
             <img src="/imgs/floreria.webp" alt="foto" className='portafolio__img'/>
          </div>
        <div className="portafolio__values__text">
          <h3>Horario</h3>
          <p>Lunes a Sábado de 9:00 am – 6:00 pm. Domingos y feriados de 10am a 2pm.</p>
        </div>
      </div>

  </div>
  )
}

export default Datos_portafolio
