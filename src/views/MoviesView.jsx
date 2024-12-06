import React from "react";
import { Outlet } from "react-router-dom";
import Genres from "../components/Genres";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import './MoviesView.css';
import React, { useState } from 'react';

function MoviesView() {
  const genres = [
    { genre: "Action", id: 28 },
    { genre: "Adventure", id: 12 },
    { genre: "Comedy", id: 35 },
    { genre: "Horror", id: 27 },
    { genre: "War", id: 10752 },
    { genre: "Science Fiction", id: 878 },
    { genre: "Thriller", id: 53 },
    { genre: "Fantasy", id: 14 },
    { genre: "Animation", id: 16 },
    { genre: "Crime", id: 80 },
    { genre: "Sci-Fi", id: 878 },
    { genre: "Mystery", id: 9648 },
  ];

  // State to track selected genres
  const [selectedGenres, setSelectedGenres] = useState([]);

  // Handle checkbox change
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    setSelectedGenres((prevState) => {
      if (checked) {
        return [...prevState, value]; // add the genre if checked
      } else {
        return prevState.filter((genre) => genre !== value); // remove it if unchecked
      }
    });
  };

  return (
    <div>
      <h3>Select Genres</h3>
      <div>
        {genres.map((genre) => (
          <label key={genre.id}>
            <input
              type="checkbox"
              value={genre.genre}
              checked={selectedGenres.includes(genre.genre)}
              onChange={handleCheckboxChange}
            />
            {genre.genre}
          </label>
        ))}
      </div>

      <div>
        <h4>Selected Genres:</h4>
        <p>{selectedGenres.length > 0 ? selectedGenres.join(", ") : "No genres selected"}</p>
      </div>
    </div>
  );
}

  return (
    <div>
      <div className="movies-view-container">
        <Header />
        <div className="main-content">
          <aside className="genre-view">
            <Genres genres={genres} />
          </aside>
          <main className="detail-view">
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );


export default MoviesView;
