import React from "react";

const education = () => {
  const educationList = [
    {
      id: 1,
      institution: "Facultad de Agronomía, Universidad de Buenos Aires.",
      title:
        "Especialización en Teledetección y Sistemas de Información Geográfica aplicados al estudio de los recursos naturales y la producción agropecuaria.",
      extra: "",
    },
    {
      id: 2,
      institution:
        "Facultad de Ciencias Agrarias, Universidad Nacional de Rosario, Argentina. (2008-2013)",
      title: "Ingeniera Agrónoma.",
      extra:
        "Diploma de Honor por promedio académico: 8,61 sin materias desaprobadas",
    },
    {
      id: 5,
      institution: "Universidad Austral",
      title: "Cursado Maestría en Finanzas (2019 - 2020)",
      extra:
        "Diploma de Honor por promedio académico: 8,61 sin materias desaprobadas",
    },
    {
      id: 3,
      institution: "Escuela de Negocios de Fundación Libertad,",
      title:
        "Postgrado en Agronegocios y Administración de Empresas Agropecuarias (2015)",
      extra: "",
    },
    {
      id: 4,
      institution: "Bolsa de Comercio de Rosario.",
      title:
        "Programa de Formación en comercio de granos y mercado de derivados.",
      extra: "",
    },
  ];

  const languagesList = [
    {
      id: 1,
      language: "First Certificate CEFR B2 aprobado.",
      desc: "Asociación Rosarina de Cultura Inglesa, Rosario. (2017)",
    },
    {
      id: 2,
      language: "Inglés intensivo en Londres, UK.",
      desc:
        "Edwards Language School, Sprachcaffe. Diploma acreditado por el Consejo Británico. (2016)",
    },
    {
      id: 3,
      language: "First Certificate CEFR B2 aprobado.",
      desc: "Asociación Rosarina de Cultura Inglesa, Rosario. (2017)",
    },
  ];
  const education = educationList.map((exp) => {
    return (
      <div
        key={exp.id}
        className="my-4 p-4 rounded-r-lg border-green-400 border-l-4 text-md shadow-xl bg-white"
      >
        <div className="mt-2">
          <span className="text-2xl text-gray-700 font-bold hover:text-gray-600">
            {exp.title}
          </span>
          <p className="mt-2 text-gray-600">{exp.desc}</p>
          <p>{exp.institution}</p>
        </div>
      </div>
    );
  });

  const languages = languagesList.map((lang) => {
    return (
      <div
        key={lang.id}
        className="my-4 p-4 rounded-r-lg border-green-400 border-l-4 shadow-xl bg-white"
      >
        <div className="mt-2">
          <span className="text-2xl text-gray-700 font-bold hover:text-gray-600">
            {lang.language}
          </span>
          <p className="mt-2 text-gray-600">{lang.desc}</p>
      
        </div>
      </div>
    );
  });
  return (
    <div className="sm:my-8">
      <h2 className="text-left border-green-600 border-l-4 pl-4">Educación</h2>
      <div>{education}</div>
      <h2 className="my-12 text-left border-green-600 border-l-4 pl-4">Idiomas</h2>
      <div>{languages}</div>
    </div>
  );
};

export default education;
