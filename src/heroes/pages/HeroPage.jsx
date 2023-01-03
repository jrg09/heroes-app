import { useMemo } from "react";
import { useParams, Navigate, Link, useNavigate } from "react-router-dom";
import { HeroCard } from "../components";
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const hero = useMemo(() => getHeroById(id), [id]);

  // console.log(hero);

  if (!hero) {
    return <Navigate to="/" />;
  }

  const heroImageUrl = `/heroes/${hero.id}.jpg`;

  const handleNavigateBack = () => {
    navigate(-1);
  };

  return (
    <div className="row mt-5">
      <div className="col-3">
        <img
          alt={hero.superhero}
          src={heroImageUrl}
          className="img-thumbnail animate__animated animate__fadeInLeft"
          width={"200px"}
        />
      </div>
      <div className="col-9">
        <h3 className="animate__animated animate__fadeInDown">
          {hero.superhero}
        </h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b> {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First Appearance:</b> {hero.first_appearance}
          </li>
        </ul>
        <h5 className="m-3">Characters</h5>
        <p className="mx-3">{hero.characters}</p>

        <button
          className="btn btn-outline-primary m-3"
          onClick={handleNavigateBack}>
          Regresar
        </button>
      </div>
    </div>
  );
};
