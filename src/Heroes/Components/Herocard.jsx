import React from "react";
import { Link } from "react-router-dom";

const Herocard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {

    const heroImageUrl = `/Assets/heroes/${id}.jpg`

  return (
    // Animaciones clase de animate etc
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={heroImageUrl} className="card-img" alt={superhero} />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              <p className="card-text">{alter_ego !== characters ? characters : null}</p>
              <p className="card-tex">
                <small className="text-muted">{first_appearance}</small>
              </p>
              <Link to={`/hero/${id}`}> Mas...</Link>               
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herocard;
