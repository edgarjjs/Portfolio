import './header.css'

export const Header = () => {
  return (
    <header className='header'>
      <span className="logo"/>
      <nav>
        <ul>
          <li>
            <a>Inicio</a>
          </li>
          <li>
            <a >Curriculum</a>
          </li>
          <li>
            <a>Portafolio</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};