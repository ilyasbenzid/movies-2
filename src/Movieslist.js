import React, { useState } from "react";

const Movieslist = ({movies}) => {

  const [show, setshow] = useState(false);

  return (
    <div className="image-container">
      <h1>BEST ANIME:</h1>
      <button className="show" onClick={()=>setshow(!show)}>{show ? 'hide' : 'show'}</button>
      {show && (
      <div>
        {movies.map((movie, index) => (
          <div key={index}>
            <img className="imglist" src={movie.image} alt={movie.name} />
            <p>{movie.name}</p>
          </div>
        ))}
      </div>
        )}
    </div>
  );
};

export default Movieslist;
