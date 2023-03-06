import React, { useState } from "react";

function Navbar({addnew}) {
  const [add, setAdd] = useState(false);
  const [newMovie, setNewMovie] = useState({ name: "", image: "" });
  

  return (
    <div className="navbar">
      <img
        className="navbar-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix logo"
      />
      <ul className="navbar-links">
        <li className="navbar-link">Home</li>
        <li className="navbar-link">TV Shows</li>
        <li className="navbar-link">Movies</li>
        <li className="navbar-link">New & Popular</li>
        <li className="navbar-link">My List</li>
      </ul>
      <nav>
        <input type="text" className="text-input" placeholder="Search For Movies" />
        <button className="button-in">
          <em>Search</em>
        </button>
        <button onClick={() => setAdd(true)}>ADD</button>
        {add && (
          <div>
            <input
              type="text"
              placeholder="name"
              value={newMovie.name}
              onChange={(e) => setNewMovie({ ...newMovie, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="image url"
              value={newMovie.image}
              onChange={(e) => setNewMovie({ ...newMovie, image: e.target.value })}
            />
            <button onClick={()=>addnew(newMovie)}>SAVE</button>
          </div>
        )}
      </nav>
      <div className="video-container">
      
      </div>
    </div>
  );
};

export default Navbar;
