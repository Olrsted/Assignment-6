import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegisterView.css';

function RegisterView() {
  const navigate = useNavigate();

  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]); // State for storing selected genres

  const genres = [
    { genre: 'Action', id: 28 },
    { genre: 'Adventure', id: 12 },
    { genre: 'Comedy', id: 35 },
    { genre: 'Horror', id: 27 },
    { genre: 'War', id: 10752 },
    { genre: 'Science Fiction', id: 878 },
    { genre: 'Thriller', id: 53 },
    { genre: 'Fantasy', id: 14 },
    { genre: 'Animation', id: 16 },
    { genre: 'Crime', id: 80 },
    { genre: 'Sci-Fi', id: 878 },
    { genre: 'Mystery', id: 9648 }
  ];

  const handleGenreChange = (event) => {
    const { value, checked } = event.target;
    setSelectedGenres(prevGenres => 
      checked ? [...prevGenres, value] : prevGenres.filter(genre => genre !== value)
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (pass !== confirmPass) {
      alert("Passwords don't match");
    } else {
      console.log('Selected Genres:', selectedGenres); // You can process selected genres here
      navigate('/signin');
    }
  };

  return (
    <div className="sign-up-page">
      <div className="sign-up">
        <h2>SIGN UP</h2>
        <form onSubmit={handleSubmit}>
          <div className="info">
            <input type="text" name="first" required />
            <label>First Name</label>
          </div>
          <div className="info">
            <input type="text" name="last" required />
            <label>Last Name</label>
          </div>
          <div className="info">
            <input type="email" name="email" required />
            <label>Email</label>
          </div>
          <div className="info">
            <input type="password" name="password" onChange={(e) => setPass(e.target.value)} required />
            <label>Password</label>
          </div>
          <div className="info">
            <input type="password" name="confirmPassword" onChange={(e) => setConfirmPass(e.target.value)} required />
            <label>Confirm Password</label>
          </div>

          {/* Genre Selection Section */}
          <div className="genre-selection">
            <h3>Select Your Favorite Genres</h3>
            <div className="genre-checkboxes">
              {genres.map((genre) => (
                <div key={genre.id} className="genre-checkbox">
                  <input 
                    type="checkbox" 
                    id={genre.id} 
                    value={genre.genre} 
                    onChange={handleGenreChange} 
                    checked={selectedGenres.includes(genre.genre)}
                  />
                  <label htmlFor={genre.id}>{genre.genre}</label>
                </div>
              ))}
            </div>
          </div>

          <button className="sign-up-btn" type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterView;
