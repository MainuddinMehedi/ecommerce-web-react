import Feature from "../components/feature";
import Newsletter from "../components/newsletter";
import { abouta6Img, aboutVideo } from "../utils/img-imports";

import "../styles/about.css";

const About = () => {
  return (
    <div>
      <section id="page-header" className="about-header">
        <h2>#KnowUs</h2>
        <p>Read all info about us and know more!</p>
      </section>

      <section id="about-head" className="section-p1">
        <img src={abouta6Img} />
        <div>
          <h2>Who We Are?</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
            fugit aliquam quibusdam, enim tempore dolore vero officia totam,
            velit dolor, aperiam hic ipsam. Ea consequuntur officiis id maxime
            recusandae, ratione quod ut voluptas quo saepe, excepturi unde optio
            animi tempore sed rem inventore? Tenetur quaerat beatae neque culpa
            labore numquam.
          </p>
          <abbr title="">
            Create stunning images with as much or as little control as you like
            thanks to a choice of Basic and Creative modes.
          </abbr>
        </div>
      </section>

      <section id="about-app" className="section-p1">
        <h1>
          Download Our <a href="#">App</a>
        </h1>
        <div className="video">
          <video autoPlay muted loop src={aboutVideo}></video>
        </div>
      </section>

      <Feature />
      <Newsletter />
    </div>
  );
};

export default About;
