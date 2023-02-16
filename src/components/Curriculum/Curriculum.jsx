import { SkillCard } from "../SkillCard/SkillCard";
import html from "../../assets/HTML5.svg";
import css from "../../assets/CSS3.svg";
import js from "../../assets/JS_icon.svg";
import react from "../../assets/react.svg";
import npm from "../../assets/Npm.svg";
import git from "../../assets/Git_icon.svg";
import gitHub from "../../assets/GitHub_icon.svg";
import sass from "../../assets/Sass.svg";
import "./curriculum.css";

export const Curriculum = () => {
  return (
    <main className="profile-container">
      <section className="profile-description">
        <h2>Perfil</h2>
        <p>
          Persona estructurada y ordenada en la ejecución de los proyectos que
          se me asignan, velando siempre por el cumplimiento los mismos dentro
          de los plazos estipulados.
          <br />
          Con amplias fortalezas en el servicio al cliente, basándome en una
          alta capacidad de escucha para poder identificar las necesidades
          reales de los usuarios y así poder encontrar la mejor manera de
          atender sus solicitudes.
          <br />
          Me gusta hacer parte de equipos de trabajo donde se tenga en cuenta la
          experiencia y aportes de todos sus miembros para alcanzar los
          objetivos planteados.
        </p>
      </section>

      <section className="skills">
        <div className="cards-container">
          <h3>Habilidades</h3>
          <SkillCard image={html} name="HTML5" />
          <SkillCard image={css} name="CSS3" />
          <SkillCard image={js} name="JavaScript" />
          <SkillCard image={react} name="React" />
          <SkillCard image={git} name="Git" />
          <SkillCard image={gitHub} name="GitHub" />
          <SkillCard image={sass} name="Sass" />
        </div>
      </section>
    </main>
  );
};
