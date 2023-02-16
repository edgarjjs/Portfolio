import { Main } from "../../components/Main/Main";
import { Curriculum } from "../../components/Curriculum/Curriculum";
import { Footer } from "../../components/Footer/Footer";
import { Portfolio } from "../../components/Portfolio/Portfolio"
import "./landing.css";
import { Experience } from "../../components/Experience/Experience";

export const Landing = () => {
  return (
    <div className="landing">
      <Main />
      <Curriculum />
      <Experience />
      <Portfolio />
      <Footer />
    </div>
  );
};
