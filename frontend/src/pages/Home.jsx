import { Link, useNavigate } from 'react-router-dom';
import './Home.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Home = () => {
  useScrollAnimation();
  const navigate = useNavigate();

  const handleTryNow = () => {
    navigate('/predict');
  };

  return (
    <div>
      <div className="hero-section">
        <div className="hero-head">
          <div className="heading">
            <span>Power Up Your</span>
            <br />
            <span>Maintenance Strategy with</span>
            <br />
            <span>Predictive Machinery Analytics</span>
          </div>
        </div>
        <div className="hero-footer">
          <span className="details">
            Harness the future of maintenance with our advanced machine learning algorithm.
            <div className="explore-btn">
              <Link to="/explore">
                <button type="button">
                  Explore
                  <img src="/images/icons/right-arrow.png" alt="" />
                </button>
              </Link>
            </div>
          </span>
          <div className="predict-card">
            <div className="photo">
              <img src="/images/home/machine.jpg" alt="" />
            </div>
            <div className="button">
              <Link to="/predict">
                <button type="button">
                  Predict Now
                  <img style={{ marginLeft: '0.25rem' }} src="/images/icons/magic.png" alt="" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="feature">
        <div className="features">
          <div className="card card1">
            <div className="description">
              <div className="card-head card1-head">Accurate Predictions</div>
              <div className="card-description card1-description">
                Our algorithm leverages sophisticated data analysis techniques to provide
                <br />
                highly reliable and precise machine failure predictions.
              </div>
            </div>
            <div className="card-img card1-img">
              <img src="/images/features/prediction.png" alt="Prediction" className="card1img" />
            </div>
          </div>
        </div>

        <div className="features feature2">
          <div className="card card2">
            <div className="card-img">
              <img className="card2img" src="/images/features/monitoring.png" alt="Monitoring" />
            </div>
            <div className="description">
              <div className="card-head card2-head">Real-time Monitoring</div>
              <div className="card-description card2-description">
                Stay on top of the condition of your machines with real-time monitoring,
                <br />
                ensuring prompt action can be taken if any anomalies are detected.
              </div>
            </div>
          </div>
        </div>

        <div className="features ui-feature">
          <div className="ui-fe-head">User-friendly Interface</div>
          <img src="/images/features/interface-preview.jpg" className="ui-img" alt="Interface" />
        </div>
      </div>

      <div className="lastpage">
        <div className="foot">
          <p>
            <h2>Unlock The Future</h2>
            <span>
              Predict machine failures with precision.
              <br />
              Try our algorithm-powered tool now
            </span>
          </p>
          <button type="button" id="goto-app-btn" onClick={handleTryNow}>
            Try insightX Now
          </button>
        </div>

        <footer className="footer-distributed">
          <div className="footer-right">
            <a href="#">
              <i style={{ marginTop: '7px' }} className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i style={{ marginTop: '7px' }} className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i style={{ marginTop: '7px' }} className="fa fa-linkedin"></i>
            </a>
            <a href="https://github.com/Saisinare/InsightX" target="_blank" rel="noreferrer">
              <i style={{ marginTop: '7px' }} className="fa fa-github"></i>
            </a>
          </div>
          <div className="footer-left">
            <p className="footer-links">
              <Link className="link-1" to="/">
                Home
              </Link>
              <Link to="/monitoring">Monitoring</Link>
              <Link to="/explore">Explore</Link>
              <a href="#">Use App</a>
            </p>
            <p>insightX &copy; 2023</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
