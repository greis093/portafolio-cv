import { useEffect } from "react";

function DatosEstructurados() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Greicy Agreda",
      "url": "https://greicyagreda.netlify.app/",
      "image": "https://greicyagreda.netlify.app/imgs/my-profile-img.webp", 
      "sameAs": [
        "https://www.linkedin.com/in/greicy-agreda-pacheco-426969121/",
        "https://github.com/greis093"
      ],
      "jobTitle": "Desarrolladora Front-End, Full Stack",
      "worksFor": {
        "@type": "Organization",
        "name": "Freelance / Proyectos personales"
      },
      "description": "Desarrolladora Front-End con experiencia en React, WordPress y MongoDB. Apasionada por crear interfaces modernas y responsivas.",
      "email": "agreda.pacheco@gmail.com", // opcional
      "knowsAbout": ["HTML", "CSS", "JavaScript", "React", "WordPress", "MongoDB", "Posicionamiento Web (SEO)"]
    });

    document.head.appendChild(script);
  }, []);

  return null;
}

export default DatosEstructurados;