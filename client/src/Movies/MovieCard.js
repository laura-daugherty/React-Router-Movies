import React from 'react';
import { Route, Link } from "react-router-dom";
import Stars from "./Stars"


const MovieCard = props => {

  const { title, director, metascore, stars, id } = props.movie;

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <Link className="actor-link" to={`/movies/${id}/stars`}>
        Actors 
      </Link>
      <Route
          path="/movies/:id/stars"
          render={props => <Stars {...props} stars={stars} movie={props.movie} />}
      />
    </div>
  )
};

export default MovieCard;