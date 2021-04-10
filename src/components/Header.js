import React, { Component } from "react";

const links = [
    {
        url: 'linkedin',
        text: 'linkedinnnn'
    },
    {
        url: 'email',
        text: 'sofia@asd.com'
    },
]
const header = () => {
  return (
    <div className="header grid grid-cols-3 my-8">
      <div>
        <h1>Sofia Corina</h1>
      </div>
      <div></div>
      <div className="social-header text-center">
        <h2>Contacto</h2>
      </div>
    </div>
  );
};

export default header;
