import React from "react";
import { StaticImage } from 'gatsby-plugin-image';
const intro = () => {
  return (
    <div>
      <div>
        <StaticImage src="../images/foto1.jpg" />
      </div>
      <div className="shadow-lg p-4">
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
