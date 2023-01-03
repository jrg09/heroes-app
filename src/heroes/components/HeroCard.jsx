import { Link } from "react-router-dom";
import { HeroPage } from "../pages/HeroPage";

export const HeroCard = ({ hero }) => {
  const heroImageUrl = `/heroes/${hero.id}.jpg`;
  const heroCharacters = hero.alter_ego !== hero.characters && hero.characters;

  return (
    <>
      <div className="col animate__animated animate__fadeIn">
        <div className="card m-1">
          <img
            src={heroImageUrl}
            className="card-img-top "
            alt={hero.superhero}
          />
          <div className="card-body">
            <h5 className="card-title">{hero.superhero}</h5>
            <p className="card-text">{hero.alter_ego}</p>
            <p className="small">{heroCharacters}</p>
            <Link to={`/hero/${hero.id}`}>Más info...</Link>
          </div>
        </div>
      </div>
    </>
  );
};
