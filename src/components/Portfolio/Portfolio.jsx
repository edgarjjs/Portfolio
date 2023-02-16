import moviesApp from "../../assets/MoviesApp.png";
import moviesApp_logo from "../../assets/MoviesApp_logo.png"
import gitHub from "../../assets/GitHub_icon.svg"

import "./portfolio.css";


export const Portfolio = () => {
  return (
    <section className="portfolio-container">
      <h2>Portafolio</h2>
      <article className="project-card">
        <div className="project-photo">
          <img src={moviesApp} alt="" />
        </div>

        <div className="project-details">
          <h4>MoviesApp (En desarrollo)</h4>
          <div className="moviesApp">
            Con MoviesApp puedo Ver:
            <ul>
              <li>Los detalles de una película.</li>
              <li>El perfil de cada actor</li>
              <li>Las 5 peliculas en trending del día.</li>
              <li>
                Las series más relevantes de algunas plataformas de streaming.
              </li>
              <li>
                Las 20 películas más relevantes de cada género sea película o
                serie.{" "}
              </li>
              <li>Los detalles de temporadas de las series</li>
            </ul>
            Para el buscador desarrollé un filtro para evitar contenido
            inapropiado, pero siempre dependerá de la información que suministra
            la API de cada resultado y no será 100% exacto.
            <br />
            Aún están en desarrollo más funciones, el diseño es responsive y
            amigable con el usuario, los datos mostrados son de la API TMDB.
          </div>
          <div className="project-links">
            <a
              className="project-gh-pages"
              href="https://edgarjjs.github.io/react-movies-app/"
              target="_blank"
            >
              <img src={moviesApp_logo} alt="" />
              <p>Ver proyecto</p>
            </a>
            <a
              className="project-gh"
              href="https://github.com/edgarjjs/react-movies-app.git"
              target="_blank"
            >
              <img src={gitHub} alt="" />
              <p>Ver código</p>
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};
