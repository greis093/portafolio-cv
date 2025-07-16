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
          <h2>Front‑End Deve5loper en Transición | Ingeniería de Datos & Full Stack</h2>
          <div>📍 Lima, Perú</div>
          <div>📧 agreda.pacheco@gmail.com</div>
          <div>🌐 Linkedin:<a href='https://www.linkedin.com/in/greicy-agreda-pacheco-426969121/'>Greicy Agreda</a></div>
      </section>
      <hr/>
      <section className='perfil-profesional'>
        <h3>✨Perfil Profesional</h3>
        <p>Profesional con formación <strong>Investigación Operativa</strong> por la 
        <em> Universidad Nacional Mayor de San Marcos</em>,
        esta base universitaria me ha permitido desarrollar una mentalidad estructurada y orientada a la optimización,
        que ahora aplico en el desarrollo de soluciones digitales. con experiencia en gestión de proyectos y consultoría. 
        Recientemente formé parte de un Bootcamp Full Stack donde desarrollé habilidades modernas en desarrollo web,
        con proyectos reales desarrollados y desplegados con React, Node.js, Express y MongoDB.  
        Me especializo en interfaces responsivas y despliegue en la nube, y busco oportunidades 
        como Front‑End Developer para continuar construyendo soluciones digitales con impacto.</p>
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
      </section> 
    </div>
  )
}

export default Curriculum
