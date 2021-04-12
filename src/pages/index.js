import * as React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Media from "../components/Media";
import { StaticImage } from "gatsby-plugin-image";
import Footer from '../components/Footer';
import "@fontsource/nunito";
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
        <div className="md:flex-shrink-0  text-center">
          <StaticImage
            className="h-80 w-80 border-4 "
            src="../images/IMG_0628.jpg"
            alt="Sofia Corina"
          />
        </div>
        <div className="">
          <Media />
        </div>
      </div>
   
      <Footer className="w-full" />
      
    </main>
  );
};

export default IndexPage;
