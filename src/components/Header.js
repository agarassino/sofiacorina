import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const links = [
  {
    url: "linkedin",
    text: "linkedinnnn",
  },
  {
    url: "email",
    text: "sofia@asd.com",
  },
];
const header = () => {
  return (
    <div className="header grid  md:grid-cols-3 my-8 mb-10">
      <div>
        <h1>Sofia Corina</h1>
        <h4 className="ml-1">Analista Agrícola</h4>
      </div>
      <div></div>
      <div id="contact" className="mt-5 sm:mt-0 social-header text-left border-grey border-l-4 pl-5">
        <h3 className="hidden sm:block">Contacto</h3>
        <ul>
          <li>
            <FontAwesomeIcon icon={faEnvelope} /> info@sofiacorina.com
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sofia-e-corina-72535276/">
              <FontAwesomeIcon icon={faLinkedinIn} /> Linkedin
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default header;
