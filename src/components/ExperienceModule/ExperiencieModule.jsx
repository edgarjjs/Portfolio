import "./experienceModule.css";

export const ExperiencieModule = ({rol, company, description, time}) => {
  return (
    <div className="experience-module">
      <div className="experience-header">
        <div className="experience-year">{time}</div>
        <div className="experience-decoration"></div>
        <span>{rol}</span>
      </div>
      <div className="experience-description">
        <h4>{company}</h4>
        {description.length > 1
        ? <ul>
          {description.map((e, index) => <li key={index}>- {e}</li>)}
        </ul>
        : <p>{description}</p>
        }
      </div>
    </div>
  );
};
