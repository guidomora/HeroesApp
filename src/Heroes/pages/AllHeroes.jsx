import React from "react";
import HeroeList from "../Components/HeroeList";

const AllHeroes = () => {
  return (
    <div>
      <h1>All Heroes</h1>
      <div className="mt-4">
        <HeroeList publisher="DC Comics" />
      </div>
      <div className="mt-4">
        <HeroeList publisher="Marvel Comics" />
      </div>
    </div>
  );
};

export default AllHeroes;
