import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const result = await login(formData.email, formData.password);
    if (result.success) {
      navigate('/');
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="auth-container">
      <div className="form-section">
        <div className="login-form">
          <div className="form-head">
            <h1>Welcome To InsightX</h1>
            <p>Login To Your Account</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-body">
              {error && <div className="error-message">{error}</div>}
              <div className="field">
                <label htmlFor="email">Email</label>
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="yourEmail@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="password">Password</label>
                <br />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-footer">
                <button type="submit" className="submit-btn">
                  Login
                </button>
                <Link to="/signup" id="logindirect">
                  Don't have account? Create One
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="addon">
        <div className="addon-content">
          <h1>Easily Predict Machine Failure Rate!</h1>
          <p>Accurate Machine Failure Predictions.</p>
          <img src="/images/auth/interface-preview.jpg" className="addon-bg-img" alt="Dashboard Preview" />
        </div>
        <div className="wave-bg"></div>
      </div>
    </div>
  );
};

export default Login;
