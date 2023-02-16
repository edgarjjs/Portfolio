import "./main.css";
import photo from '../../assets/Photo.jpg'

export const Main = () => {
  return (
    <section className="main">
      <div className="description">
        <h2>¡Hola!</h2>
        <p>
          Soy <strong>Javier Jaimes</strong>,
        </p>
        <p className="rol">Frontend Developer</p>
      </div>
      <div className="photo-container">
        <img src={photo}/>
      </div>
    </section>
  );
};