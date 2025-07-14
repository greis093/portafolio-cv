
import './Servicios.scss'

const Servicios = () => {

  return (
    <div className="home">
            <header className='cabecera'>
                    <h1>Servicios</h1>
        </header>
        <section className="servicios-container">
            <div className="description">
                <article className="description__text">
                    <p> Con formación especializada en desarrollo Full Stack y experiencia
                        práctica en diseño web, programación y gestión de proyectos
                        tecnológicos, ofrezco soluciones digitales personalizadas y
                        efectivas para crear, impulsar la presencia y productividad de tu negocio
                        en el entorno digital.</p>
                  </article>
              </div>
                <div className="photo">
                    <img className="photo__servicio" src="imgs/servicio-digital.webp"/>
            </div>
        </section>
        <section className="values__container">
          <div className="values">
            <div className="values__text">
              <h3>🖥️ Desarrollo de sitios web modernos</h3>
               <p>
                Diseño y desarrollo de sitios web responsivos utilizando HTML,
                CSS, JavaScript y React. Experiencia en interfaces limpias,
                adaptables y optimizadas para móviles.
              </p>
            </div>
          </div>
         <div className="values">
            <div className="values__text">
              <h3>⚙️ Aplicaciones web personalizadas</h3>
               <p>
                 Desarrollo de aplicaciones Full Stack con React, Node.js,
                Express y MongoDB. Integración de bases de datos, autenticación,
                dashboards y funcionalidades específicas para tu negocio.
              </p>
            </div>
          </div>

           <div className="values">
            <div className="values__text">
              <h3>🌐 Webs con WordPress y pasarelas de pago</h3>
               <p>
                Creación y personalización de sitios WordPress. Integración de
                pagos, SEO básico y conectividad con redes sociales. Ideal para
                tiendas pequeñas y servicios online.
              </p>
            </div>
          </div>

            <div className="values">
            <div className="values__text">
              <h3>🔍 Optimización técnica SEO</h3>
               <p>
                 Ajustes técnicos para mejorar la visibilidad de tu sitio en
                motores de búsqueda: estructura semántica, tiempos de carga,
                títulos, descripciones y adaptación móvil.
              </p>
            </div>
          </div>
          
        </section>
        
    </div>
  )
}

export default Servicios
