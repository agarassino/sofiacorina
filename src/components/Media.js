import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const media = () => {
  const mediaList = [
    {
      company: "Bolsa de Comercio de Rosario.",
      position: "Analista en Estimaciones Agrícolas.",
      desc: "Guía Estratégica para el Agro.",
      from: "Febrero 2019",
      to: "Actualidad",
    },
    {
      company: "Bolsa de Comercio de Rosario.",
      position: "Analista Investigador de Mercados de Granos.",
      desc: "Departamento de Informaciones y Estudios Económicos.",
      from: "Febrero 2019",
      to: "Actualidad",
    },
  ];

  const media = mediaList.map((exp) => {
    return (
      <div className="max-w-xs rounded overflow-hidden shadow-lg my-2 mr-4">
        <StaticImage
          className="h-28 w-full rounded-full"
          src="../images/canal_rural.png"
          alt="Sofia Corina"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Canal Rural</div>
          <p className="text-grey-darker text-base">
            Micros semanales de información de mercados en Canal Rural. Edición
            central.
          </p>
        </div>
      </div>
    );
  });
  return (
    <div className="my-8 mr-2">
      <h2 className="text-left border-green-600 border-l-4 pl-4">Medios</h2>
      <div className="grid grid-cols-4">{media}</div>
    </div>
  );
};
export default media;
