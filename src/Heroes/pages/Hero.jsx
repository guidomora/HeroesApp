import React, { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";

const Hero = () => {
  const { id } = useParams();

  // No es obligatorio usar el useMemo, pero lo aplicamos para reducir desgaste
  //  el useMemo va a disparar el callback, cada vez que cambie la depedencia
  // (el id)
  const hero = useMemo(() => getHeroById(id), [id]);

  const navigate = useNavigate();

  // El -1 regresa al usuario a la pagina anterior que esta cargada en su historial
  // (puede ser un problema, pero por el momento no)
  const onNavigateBack = () => {
    navigate(-1);
  };

  // Si la ruta no existe, automatcamente te manda a otra pagina

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return (
    <div className="row mt-5">
      <div className="col-4 animate__animated animate__slideInLeft">
        <img
          src={`/Assets/heroes/${hero.id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail"
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b>
            {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b>
            {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First appearence: </b>
            {hero.first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>
        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
          Regresar
        </button>
      </div>
    </div>
  );
};

export default Hero;
