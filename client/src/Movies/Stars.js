import React from 'react';
import { Route } from "react-router-dom";

const Stars = props => {
  return (
    <div>
    {props.stars.map(star => (
      <div key={star} className="movie-star">
        {star}
      </div>
    ))}
    </div>
  )
}

export default Stars;



