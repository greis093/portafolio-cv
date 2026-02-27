import React from 'react'
import './Curriculum.scss'
const Curriculum = () => {
  return (
    <div className="home">
      <header className='cabecera'>
          <h1>Curriculum</h1>
      </header>
      <section  className='datos-principales'>
        <strong className='strong'>Yirley Greicy Agreda Pacheco</strong>
          <h2>Front‑End Developer | Full Stack</h2>
          <div>📍 Lima, Perú</div>
          <div>📧 agreda.pacheco@gmail.com</div>
          <div>🌐 Linkedin:<a href='https://www.linkedin.com/in/greicy-agreda-pacheco-426969121/'>Greicy Agreda</a></div>
      </section>
      <hr/>
      <section className='perfil-profesional'>
        <h3>✨Perfil Profesional</h3>
        <p>Profesional con formación en <strong>Investigación Operativa</strong> por la 
        <em> Universidad Nacional Mayor de San Marcos</em>,
        esta base universitaria me ha permitido desarrollar una mentalidad estructurada y orientada a la optimización,
        que ahora aplico en el desarrollo de soluciones digitales. con experiencia en gestión de proyectos y consultoría. 
        Recientemente formé parte de un Bootcamp Full Stack donde desarrollé habilidades modernas en desarrollo web,
        con proyectos reales desarrollados y desplegados con React, Node.js, Express y MongoDB.  
        Me especializo en interfaces responsivas y despliegue en la nube, y busco oportunidades 
        como Front‑End Developer para continuar construyendo soluciones digitales con impacto.</p>
      <br/>
      </section>

      <hr/>
      <section className='perfil-profesional'>
        <h3>🎓 Formación Académica y Cursos</h3>
        <div className='carrera'>
        <strong >Bootcamp Full Stack Engineer</strong>
        <br/>
        <i className='detalle'>Educación IT | 2024–2025</i>
        </div>
        <div className='detalle'>
        <ul>
          <li>
            Formación intensiva en HTML, CSS/SASS, JavaScript (avanzado), React, Node.js, Express, MongoDB Atlas, APIs REST, Websockets,
            pruebas (Jest/Mocha), deploy en Netlify, Render y CI/CD. Comprende proyectos integradores por fase.
          </li>
        </ul>
        </div>
        <div className='carrera'>
        <strong>Universidad Nacional Mayor de San Marcos</strong>
        <br/>
        <i className='detalle'>Lima, Perú | 2010–2016</i>
        </div>
        <div className='detalle'>
        <ul>
          <li>Investigación Operativa</li>
        </ul>
        </div>
        <br/>
        <b className='curso-complementario'> 📋Cursos complementarios:</b>
        <div className='detalle'>
        <ul>
          <li>Google Cloud Platform Fundamentals</li>
        </ul>
        <i className='detalle-curso'>EducacionIT | Expedición: jun. 2024 | ID de la credencial 96175871863</i>
        </div>
        <div className='detalle'>
        <ul>
          <li>Curso completo de Github</li>
        </ul>
        <i className='detalle-curso'>Udemy | Expedición: ene. 2024 | ID de la credencial UC-3e6bf743-17ac-419f-a95c-3135114c0f14</i>
        </div>
        <div className='detalle'>
        <ul>
          <li>Posicionamiento Web, SEO</li>
        </ul>
        <i className='detalle-curso'>EducacionIT | Expedición: nov. 2023 | ID de la credencial 96175868729</i>
        </div>
        <div className='detalle'>
        <ul>
          <li>SCRUM Práctico en Proyectos de Software</li>
        </ul>
        <i className='detalle-curso'>Udemy  | Expedición: abr. 2020 | UC-d97162c1-42d9-481d-b6f1-f5e775ddcc87</i>
      </div>
       <b className='curso-complementario'> ✒️Idiomas:</b>
         <div className='detalle'>
          <ul>
            <li>Español (nativo)</li>
            <li>Inglés (intermedio)</li>
            <li>Francés (intermedio)</li>
          </ul>
          <br/>
        </div>
      </section> 
      <hr/>
      <section className='perfil-profesional'>
        <h3>💼 Experiencia Profesional</h3>
        <br/>
        <div className='detalle-experiencia'>
         
         <b>Desarrolladora Web</b>
         <div className='carrera'> 
         <i  className='detalle'> Wakin Be – Lima | Sept 2025 – Actualidad</i>
         </div> 
         <div className='detalle'>
          <ul>
            <li>Mantenimiento y desarrollo de nuevas funcionalidades.</li>
            <li>Análisis he implementación de SEO Técnico.</li>
            <li>Implementación de chatbot de IA.</li>
          </ul>
          <br/>
        </div>
      </div>
      <br/>
        <div className='detalle-experiencia'>
         
         <b>Desarrolladora Web</b>
         <div className='carrera'> 
         <i  className='detalle'> Wakin Be – Lima | Sept 2025 – Actualidad</i>
         </div> 
         <div className='detalle'>
          <ul>
            <li>Mantenimiento y desarrollo de nuevas funcionalidades.</li>
            <li>Análisis he implementación de SEO Técnico.</li>
            <li>Implementación de chatbot de IA.</li>
          </ul>
          <br/>
        </div>
      </div>
        <br/>
        <div className='detalle-experiencia'>
         <b>Fundadora y Gestora Digital</b>
         <div className='carrera'> 
         <i  className='detalle'>D’Goyita (pastelería familiar) – Lima | Mar 2020 – Abr 2022</i>
         </div> 
         <div className='detalle'>
          <ul>
            <li>Desarrollé una página web responsive en WordPress con pago online.</li>
            <li>Implementé SEO básico y conexión con redes sociales.</li>
            <li>Gestioné autogestión del negocio y atención al cliente donde se incremento del 60% en pedidos online gracias a visibilidad web.</li>
          </ul>
          <br/>
        </div>
      </div>
      <br/>
      <div className='detalle-experiencia'>
         <b>Consultora de SGI</b>
         <div className='carrera'>
         <i  className='detalle'>Sigma Quality S.R.L. – Lima | Oct 2019 – Feb 2020</i>
         </div>
         <div className='detalle'>
          <ul>
            <li>Documenté y optimicé procesos para certificación ISO en CENTRUM PUCP.</li>
            <li>Coordine esa mejora transversalmente con todas las áreas donde el cliente obtuvo certificación ISO‑9001 en el área de DARSA</li>
          </ul>
          <br/>
        </div>
      </div>
      <br/>
      <div className='detalle-experiencia'>
         <b>Coordinadora de Proyectos</b>
         <div className='carrera'>
         <i  className='detalle'>Edú Holding Group – Lima | Mar 2017 – Jul 2018</i>
         </div>
         <div className='detalle'>
          <ul>
            <li>Coordiné procesos interdepartamentales (Operaciones, Logística, TI).</li>
            <li>Lideré el desarrollo e implementación de sistema interno con MongoDB, JS, Express y GCP.</li>
            <li>Automatice reportes de entregas y ventas para área comercial y gerencial.</li>
            <li>Creé con macros reportes clave, reduciendo tiempos en análisis de KPIs donde 40% en tiempos de generación de dashboard gerencial</li>
          </ul>
          <br/>
        </div>
      </div>
      </section>
       <hr/>
      <section className='perfil-profesional'>
        <h3>🔧 Habilidades Técnicas</h3>
        <div>
          <table>
            <tr>
            <th>Tecnologías Front-End</th>
            <th>Tecnologías Back-End</th>
            <th>Herramientas & Otros</th>
          </tr>
          <tr>
            <td>HTML, CSS/SASS</td>
            <td>Node.js, Express.js</td>
            <td>Git, GitHub</td>
          </tr>
          <tr>
            <td>JavaScript (ES6+)</td>
            <td>MongoDB Atlas</td>
            <td>Netlify, Render</td>
          </tr>
          <tr>
            <td>React</td>
            <td>REST API</td>
            <td>MongoDB Compass</td>
          </tr>
          <tr>
            <td>Responsive Design</td>
            <td>Pruebas: Jest/Mocha</td>
            <td>SEO, WordPress</td>
          </tr>
        </table>
        <br/>
        </div>
        </section>
         <hr/>
        <section className='perfil-profesional'>
        <h3>💡 Habilidades Blandas</h3>
        <div className='detalle-experiencia'>
          <div className='detalle-habilidades'>
              Liderazgo, trabajo en equipo, comunicación con stakeholders, autogestión, atención al cliente.
          </div>
         </div> 
        </section>
    </div>
  )
}

export default Curriculum
