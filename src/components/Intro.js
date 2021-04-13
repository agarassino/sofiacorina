import React from "react";
import { StaticImage } from "gatsby-plugin-image";
const intro = () => {
  return (
    <div className="flex flex-col sm:flex-row mb-12">
      <div id="intro-img" className="sm:p-2">
        <div className="md:flex-shrink-0 rounded-lg overflow-hidden sm:rounded-lg">
          <StaticImage
            className="object-cover w-full"
            src="../images/foto1.jpg"
            alt="Sofia Corina"
          />
        </div>
      </div>

      <div
        id="intro-phrase"
        className="bg-opacity-400 p-10 subpixel-antialiased font-serif"
      >
        Me motivan los desafíos y los proyectos innovadores. Disfruto de
        investigar, aprender nuevas competencias y me adapto a diferentes
        situaciones. Presento habilidades para obtener y analizar información y
        capacidad de síntesis. Me gusta trabajar en equipo y puedo desempeñarme
        bajo presión.
      </div>
    </div>
  );
};

export default intro;
