import React from "react";

const experience = () => {
  const experiencesList = [
    {
      id: 1,
      company: "Guía Estratégica para el Agro. Clasificación supervisada de coberturas con imágenes satelitales en Google Earth Engine (Java Script) Relevamiento de condición de cultivos de soja, trigo y maíz en región núcleo",
      position: "Analista Senior en Estimaciones Agrícolas",
      desc: "Bolsa de Comercio de Rosario.",
      from: "Febrero 2019",
      to: "Actualidad",
    },
    {
      id: 9,
      company: "Proteina Ventures",
      position: "Mentora en AgTech",
      desc: "",
      from: "Septiembre 2020",
      to: "Actualidad",
    },
    {
      id: 2,
      company: "Bolsa de Comercio de Rosario.",
      position: "Analista Investigador de Mercados de Granos.",
      desc: "Departamento de Informaciones y Estudios Económicos.",
      from: "Septiembre 2016",
      to: "Febrero 2019",
    },
    {
      id: 3,
      company: "Establecimiento Don Guido.",
      position: "Gestón con Synagro y comercialización de granos.",
      desc: "Empresa agrícola",
      from: "Marzo 2013",
      to: "Actualidad",
    },
    {
      id: 4,
      company: "Bolsa de Comercio de Rosario.",
      position: "Departamento de Capacitación.",
      desc: "Tutora de Programa del Formación (2016 - Actualidad). Gestión de costos para la empresa agraria (2018) Seminarios de Análisis fundamental de mercados agrícolas (2017).",
      from: "",
      to: "",
    },
    {
      id: 5,
      company: "Bolsa de Comercio de Rosario.",
      position: "Investigadora Semi-Senior.",
      desc: "GEA- Guía Estratégica para el Agro. Bolsa de Comercio de Rosario.",
      from: "Diciembre 2013",
      to: "Agosto 2016",
    },
    {
      id: 6,
      company: "CREA",
      position: "Miembro CREA Armstrong - Montes de Oca.",
      desc: "",
      from: "Febrero 2011",
      to: "Actualidad",
    },
   /* {
      id: 7,
      company: "",
      position: "Participación del Crop Tour de Lanworth, Thomson Reuters.",
      desc: "Apoderada en empresa agrícola familiar  ̈Don Guido",
      from: "Marzo 2015",
      to: "",
    },
    {
      id: 8,
      company: "UNR",
      position: "Práctica pre-profesional en cultivo de soja.",
      desc: "Cátedra Cultivos Extensivos. Facultad de Ciencias Agrarias U.N.R.",
      from: "Agosto 2011",
      to: "Septiembre 2012",
    },*/
  ];

  const experiences = experiencesList.map((exp) => {
    return (
      <div key={exp.id} className="p-4 my-4 py-6 rounded-r-lg  border-green-400 border-l-4 shadow-xl bg-white">
        <div className="flex justify-between items-center">
          <span className="font-light text-gray-600 italic">
            {exp.from} - {exp.to}
          </span>
        </div>
        <div className="mt-2">
          <span
            className="text-2xl text-gray-700 font-bold hover:text-gray-600"
            href="#"
          >
            {exp.position}
          </span>
          <p className="mt-2 text-gray-600">
            <strong>{exp.company}</strong>
          </p>
          <p>{exp.desc}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="sm:my-8 sm:mr-4">
         <h2 className="text-left border-green-600 border-l-4 pl-4">Experiencia</h2>
      <div>{experiences}</div>
    </div>
  );
};
export default experience;
