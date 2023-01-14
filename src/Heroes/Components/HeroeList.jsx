import React, { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers/GetHeroesByPublisher";
import Herocard from "./Herocard";

const HeroeList = ({ publisher }) => {
  // Segun el publisher que le pasemos a cada pagina, hace un mapeo de todos los
  // suerheroes
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]) ;

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heroes.map((heroe) => (
        <Herocard
        key={heroe.id}
        {...heroe}
        />
      ))}
    </div>
  );
};

export default HeroeList;

// Cuando hacemos el spread en el componente Herocard, basicamente
// estamos agarrando todas las propiedades de heroe y las esparcimos
// en el componente