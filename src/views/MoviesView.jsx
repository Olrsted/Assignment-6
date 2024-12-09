import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Genres from "../components/Genres";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import './MoviesView.css';

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
    { genre: "Mystery", id: 9648},
  ]

  // State to track selected genres
  const [selectedGenres, setSelectedGenres] = useState([]);

  // Handle checkbox changes
  const handleCheckboxChange = (event) => {
    const genreId = parseInt(event.target.value, 10);
    if (event.target.checked) {
      setSelectedGenres([...selectedGenres, genreId]);
    } else {
      setSelectedGenres(selectedGenres.filter(id => id !== genreId));
    }
  };

  return (
    <div>
      <div className="movies-view-container">
        <Header />
        <div className="main-content">
          <aside className="genre-view">
            <h3>Select Genres</h3>
            <div className="genre-checkboxes">
              {genres.map((genre) => (
                <div key={genre.id} className="genre-checkbox">
                  <input
                    type="checkbox"
                    id={genre.genre}
                    value={genre.id}
                    onChange={handleCheckboxChange}
                    checked={selectedGenres.includes(genre.id)}
                  />
                  <label htmlFor={genre.genre}>{genre.genre}</label>
                </div>
              ))}
            </div>
          </aside>
          <main className="detail-view">
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MoviesView;
