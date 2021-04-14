import * as React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Media from "../components/Media";
import { StaticImage } from "gatsby-plugin-image";
import Footer from "../components/Footer";
import Helmet from 'react-helmet'
import "@fontsource/nunito";
// markup
const IndexPage = () => {
  return (
    <main className="m-6 sm:m-12">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sofia Corina - Ingeniera agrónoma</title>
        <link rel="canonical" href="http://sofiacorina.com" />
      </Helmet>
      <div className="container mx-auto">
        <Header />
        <Intro />
        <div className="flex flex-col sm:grid sm:grid-cols-2">
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
