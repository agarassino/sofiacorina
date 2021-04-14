import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const media = () => {
  const mediaList = [
    {
      media: "Canal Rural",
      desc:
        "- Micros semanales de información de mercados en Canal Rural. Edición central. - Micros semanales de información de cultivos en Canal Rural. Edición central. (2014-2016).",
      logo: "canalRural",
    },
    {
      media: "Canal 3",
      desc:
        "Notas semanales de clima y cultivos en el programa televisivo Antes de Salir.",
      logo: "canal3",
    },
    {
      media: "BCR News",
      desc: "Micros semanales sobre condición de cultivos en zona núcleo",
      logo: "bcrnews",
    },
  ];

  const media = mediaList.map((exp) => {
    let img = null;
    switch (exp.logo) {
      case "canal3":
        img = (
          <StaticImage
            className="w-1/2 rounded-full object-fit sm:rounded-none sm:object-scale-down"
            src="../images/canal_3.jpeg"
            alt="Canal 3"
          />
        );
        break;
      case "canalRural":
        img = (
          <StaticImage
            className="w-1/2 rounded-full object fit"
            src="../images/canal_rural.png"
            alt="Canal Rural"
          />
        );
        break;

      case "bcrnews":
        img = (
          <StaticImage
            className="w-1/2  object fit my-5 mb-14"
            src="../images/bcrnews.jpeg"
            alt="BCR News"
          />
        );
        break;
    }
    return (
      <div className="rounded shadow-lg my-2 sm:mr-4 flex items-center flex-col">
        {img}
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{exp.media}</div>
          <p className="text-grey-darker text-base">{exp.desc}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="sm:my-8 sm:mr-2">
      <h2 className="text-left border-green-600 border-l-4 pl-4 my-4">
        Medios
      </h2>
      <div className="flex flex-col sm:grid sm:grid-cols-4">{media}</div>
    </div>
  );
};
export default media;
