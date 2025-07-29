import { useEffect } from "react";

function DatosProyectos() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";

    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "CreativeWork",
          "name": "Proyecto Florería",
          "description": "Aplicación Web Full Stack desarrollada con React, Node.js y MongoDB. Frontend responsive en Netlify, backend con API RESTful y base de datos en MongoDB Atlas.",
          "url": "https://integrador3backend.netlify.app/",
          "creator": {
            "@type": "Person",
            "name": "Greicy Agreda"
          },
          "programmingLanguage": ["JavaScript", "React", "Node.js", "MongoDB"],
          "codeRepository": "https://github.com/greis093/integrador-3-backend"
        },
        {
          "@type": "CreativeWork",
          "name": "Proyecto Pastelería",
          "description": "Tienda virtual en WordPress con integración de Mercado Pago. Diseño responsive, optimización SEO y funcionalidades completas de e-commerce.",
          "creator": {
            "@type": "Person",
            "name": "Greicy Agreda"
          },
          "programmingLanguage": ["WordPress", "HTML", "CSS"],
          "url": "https://drive.google.com/drive/folders/1RupqWJgTMseeWFptBoNfvTPccA86z6sb?usp=drive_link"
        },
        {
          "@type": "CreativeWork",
          "name": "Proyecto Currículum Vitae",
          "description": "CV personal desarrollado en React, diseñado para web responsiva. Desplegado en Netlify.",
          "url": "https://greicyagreda.netlify.app/",
          "creator": {
            "@type": "Person",
            "name": "Greicy Agreda"
          },
          "programmingLanguage": ["React", "JavaScript", "HTML", "CSS"],
          "codeRepository": "https://github.com/greis093/portafolio-cv"
        }
      ]
    });

    document.head.appendChild(script);
  }, []);

  return null;
}

export default DatosProyectos;