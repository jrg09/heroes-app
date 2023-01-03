import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../helpers";
import { HeroCard } from "../components/";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const heros = getHeroesByName(q);

  const showSearch = q === "";
  const showError = q.length > 0 && heros.length == 0;

  const { searchText, onInputChange, onResetForm } = useForm({
    searchText: q,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`?q=${searchText.toLowerCase().trim()}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={handleSubmit} aria-label="formulario">
            <input
              type="text"
              placeholder="Search for a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          <div
            className="alert alert-primary animate__animated animate__fadeIn"
            style={{ display: showSearch ? "" : "none" }}>
            Search for a hero
          </div>
          <div
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showError ? "" : "none" }}>
            No results for <b>{q}</b>
          </div>

          <div>
            {heros.map((hero) => (
              <HeroCard key={hero.id} hero={hero} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
