import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path ? 'current' : '';
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav>
        <div className="branding">
          <Link to="/">InsightX</Link>
        </div>
        <ul className={`navlist ${menuOpen ? 'active' : ''}`}>
          <li className={`navitem ${isActive('/')}`}>
            <Link to="/">Home</Link>
          </li>
          <li className={`navitem ${isActive('/predict')}`}>
            <Link to="/predict">Predict</Link>
          </li>
          <li className={`navitem ${isActive('/monitoring')}`}>
            <Link to="/monitoring">Monitoring</Link>
          </li>
          {isAuthenticated && (
            <li className={`navitem ${isActive('/history')}`}>
              <Link to="/history">History</Link>
            </li>
          )}
          <li className={`navitem ${isActive('/explore')}`}>
            <Link to="/explore">Explore</Link>
          </li>
          <li className={`navitem ${isActive('/analysis')}`}>
            <Link to="/analysis">Analysis</Link>
          </li>
          {!isAuthenticated && (
            <li className="userlistactionlist">
              <Link to="/signup" className="userAction" id="signup">
                Sign Up
              </Link>
            </li>
          )}
          <li className="userlistactionlist">
            {isAuthenticated ? (
              <button onClick={logout} className="userAction" id="logout">
                Logout
              </button>
            ) : (
              <Link to="/login" className="userAction">
                Login
              </Link>
            )}
          </li>
        </ul>
        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
