import './skillCard.css'

export const SkillCard = ({image, name}) => {
  return (
    <div className="card">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <h4>{name}</h4>
    </div>
  );
};