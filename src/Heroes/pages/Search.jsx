//  lo instalamos npm install query-string
import queryString from "query-string";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import Herocard from "../Components/Herocard";
import { getHeroesByName } from "../helpers/getHeroesByName";

const Search = () => {
  const navigate = useNavigate();

  // location contiene la key, pathname, search y el state de la url
  const location = useLocation();

  // solo tomamos la q y si no hay pasa a ser un string vacio
  const { q = "" } = queryString.parse(location.search);

  const heroes = getHeroesByName(q);

  const { searchText, inputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();

    navigate(`?q=${searchText.toLowerCase().trim()}`);
  };

  return (
    <div>
      <h1>Search</h1>
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <form onSubmit={onSearchSubmit}>
            <input
              className="form-control"
              type="text"
              placeholder="Search hero"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={inputChange}
            />
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          {q === "" ? (
            <div className="alert alert-primary animate__animated animate__fadeIn">
              Search a hero
            </div>
          ) : (
            heroes.length === 0 && (
              <div className="alert alert-danger animate__animated animate__fadeIn">
                No hero with <b>{q}</b>
              </div>
            )
          )}

          {heroes.map((hero) => (
            <Herocard key={hero.id} {...hero} 
            className="animate__animated animate__fadeIn"/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
