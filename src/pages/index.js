import * as React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Experience from "../components/Experience";
import Education from "../components/Education";

// markup
const IndexPage = () => {
  return (
    <main className="m-12">
      <div className="container mx-auto">
        <Header />
        <Intro />
        <div className="grid grid-cols-2">
          <Experience />
          <Education />
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
