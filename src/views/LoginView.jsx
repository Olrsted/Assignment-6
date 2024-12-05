import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import './LoginView.css';

function LoginView() {
  const navigate = useNavigate();
  const [pass, setPass] = useState('');
  const password = "bruh";

  const handleSubmit = (event) => {
    event.preventDefault();

    if (pass === password) {
      navigate('/');
    } else {
      alert('Wrong Password');
      console.log(pass);
    }
  };

  return (
    <div className="sign-in-page">
      <div className="sign-in">
        <h2>SIGN IN</h2>
        <form onSubmit={handleSubmit}>
          <div className="info">
            <input type="email" name="email" required />
            <label>Email</label>
          </div>
          <div className="info">
            <input type="password" name="password" onChange={(event) => { setPass(event.target.value) }} required />
            <label>Password</label>
          </div>
          <button className="sign-in-btn" type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default LoginView;
