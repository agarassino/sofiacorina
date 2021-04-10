import React from "react";

const experience = () => {
  const experiencesList = [
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

  const experiences = experiencesList.map((exp) => {
    return <li>{exp.company}</li>;
  });
  return <ul>{experiences}</ul>;
};
export default experience;
