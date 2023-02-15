import "./portfolio.css";
import photo from '../../assets/Photo.jpg'

export const Portfolio = () => {
  return (
    <section>
      <h3>Portafolio</h3>
      <article className="project-card">
        <div className="project-details">
          <h4>MoviesApp (En desarrollo)</h4>
          <p>
            MoviesApp me permite ver la información de una película.
            <br/>
            Puedo ver el perfil de cada actor para conocer su fecha de nacimiento, popularidad, biografía, saber cuales son sus 10 peliculas más famosas en las que ha trabajado y más. Puedo saber cuales son las 5 peliculas en trending del día. 
            <br/>
            Puedo ver las series más relevantes de algunas plataformas de streaming.
            <br/>
            Puedo ver las 20 películas más relevantes de cada género al igual que las series. En los detalles de cada serie puedo ver sus temporadas, y de cada temporada la descripción y capítulos.
            <br/>
            Para el buscador desarrollé un filtro para evitar contenido inapropiado, pero siempre dependerá de la información que suministra la API de cada resultado y no será 100% exacto.
            <br/>
            Aún están en desarrollo más funciones, el diseño es responsive y amigable con el usuario, los datos mostrados son de la API TMDB.
          </p>
        </div>
        <div className="project-photo">
          <img src={photo} alt="" />
        </div>
      </article>
    </section>
  );
};
