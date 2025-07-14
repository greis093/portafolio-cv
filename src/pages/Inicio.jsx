import './Inicio.scss'
import { NavLink } from "react-router-dom";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
} from "react-icons/fa";
import { SiMongodb, SiJavascript } from "react-icons/si";

const Inicio = () => {

   
  return (

    <main>
      <div className="home">
        <header className='cabecera'>
            <h1>¡Hola! Soy Greicy Agreda P. </h1>
        </header>
      <h2>
        Desarrolladora Front-End | Full Stack Junior | Analista con enfoque en
        optimización
      </h2>
       
      <p className="max-w-2xl text-base md:text-lg mb-8">
        Soy desarrolladora web con formación universitaria en
        <strong> Investigación Operativa (UNMSM)</strong>, apasionada por la
        creación de soluciones digitales optimizadas y visualmente atractivas.
        Combinando mi base analítica con habilidades técnicas modernas (
        <strong>React, JavaScript, Node.js, MongoDB</strong>), diseño y
        desarrollo interfaces web responsivas. Busco crear experiencias
        funcionales, eficientes y centradas en el usuario.
      </p>

      <div className="tech-icons">
        <div className="icon-card">
          <FaReact title="React" />
          <span>React</span>
        </div>
        <div className="icon-card">
          <SiJavascript title="JavaScript"  />
          <span>JavaScript</span>
        </div>
        <div className="icon-card">
          <FaNodeJs title="Node.js" />
          <span>Node.js</span>
        </div>
        <div className="icon-card">
          <SiMongodb title="MongoDB" style={{ fontSize: '50px' }}/>
          <span>MongoDB</span>
        </div>
        <div className="icon-card">
          <FaHtml5 title="HTML5"/>
          <span>HTML5</span>
        </div>
        <div className="icon-card">
          <FaCss3Alt title="CSS3" />
          <span>CSS3</span>
        </div>
        <div className="icon-card">
          <FaGithub title="GitHub" />
          <span>GitHub</span>
        </div>
      </div>

      <p>
        “Me inspiro en la tecnología para resolver problemas reales, optimizar
        procesos y crear impacto desde el código.”
      </p>
      
      <a href="https://www.linkedin.com/in/greicy-agreda-pacheco-426969121/"
          className="link-contacto" >Contacta conmigo</a>

      <section className="lasts-works">
        <h2 className="heading">Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web.</p>
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
            </div>

      </section>
      
    </div>
     
    </main>
 
  )
}

export default Inicio
