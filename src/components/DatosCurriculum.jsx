import { useEffect } from "react";

function DatosCurriculum() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Yirley Greicy Agreda Pacheco",
      "jobTitle": "Front-End Developer | Ingeniería de Datos & Full Stack",
      "email": "agreda.pacheco@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lima",
        "addressCountry": "PE"
      },
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "Universidad Nacional Mayor de San Marcos",
        },
        {
          "@type": "EducationalOrganization",
          "name": "Educación IT"
        }
      ],
      "skills": [
            "Español (nativo)", "Inglés (intermedio)", "Francés (intermedio)"
        ]
      ,
      "knowsAbout": [
        "HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB", "Git", "GitHub", "Netlify", "Render", "WordPress", "SEO"
      ],
      
      "url": "https://greicyagreda.netlify.app",
      "sameAs": [
        "https://github.com/greis093",
        "https://www.linkedin.com/in/greicy-agreda-pacheco-426969121/"
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Bootcamp Full Stack Engineer",
          "educationalLevel": "Postsecundaria",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Educación IT"
          },
          "dateIssued": "2025"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Curso completo de GitHub",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Udemy"
          },
          "dateIssued": "2024"
        }
      ],
      "workExperience": [
        {
          "@type": "Organization",
          "name": "D’Goyita",
          "location": "Lima",
          "startDate": "2020-03",
          "endDate": "2022-04",
          "description": "Fundadora y gestora digital: desarrollo de sitio web WordPress, integración de pagos y SEO."
        },
        {
          "@type": "Organization",
          "name": "Sigma Quality S.R.L.",
          "location": "Lima",
          "startDate": "2019-10",
          "endDate": "2020-02",
          "description": "Consultora de sistemas de gestión integrada (SGI) y apoyo en procesos de certificación ISO."
        },
        {
          "@type": "Organization",
          "name": "Edú Holding Group",
          "location": "Lima",
          "startDate": "2017-03",
          "endDate": "2018-07",
          "description": "Coordinadora de proyectos interdepartamentales. Implementación de herramientas con JS y MongoDB."
        }
      ]
    });

    document.head.appendChild(script);
  }, []);

  return null;
}

export default DatosCurriculum;