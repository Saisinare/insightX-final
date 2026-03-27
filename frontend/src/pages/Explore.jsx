import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Explore.css';

const Explore = () => {
  const navigate = useNavigate();
  const page2Ref = useRef(null);
  const page3Ref = useRef(null);
  const page4Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === 'page2') {
              const img = entry.target.querySelector('.img');
              const description = entry.target.querySelector('.description');
              if (img) img.style.marginTop = '0';
              if (description) description.style.marginTop = '0';
            } else if (entry.target.id === 'page3') {
              const heading = entry.target.querySelector('.modelhead');
              if (heading) heading.style.opacity = '1';
            } else if (entry.target.id === 'page4') {
              entry.target.style.opacity = '1';
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (page2Ref.current) observer.observe(page2Ref.current);
    if (page3Ref.current) observer.observe(page3Ref.current);
    if (page4Ref.current) observer.observe(page4Ref.current);

    return () => observer.disconnect();
  }, []);

  const handleTryNow = () => {
    navigate('/predict');
  };

  return (
    <div className="presentation">
      <div className="page" id="page1">
        <h1>Introducing InsightX</h1>
        <p>
          "a cutting-edge tool designed to provide valuable insights into your
          industrial machine operations"
        </p>
        <button type="button" id="goto-app-btn" onClick={handleTryNow}>
          Try InsightX Now
        </button>
      </div>

      <div className="page page2" id="page2" ref={page2Ref}>
        <div className="image">
          <img src="/images/icons/presentationrobots.png" alt="Presentation" className="img" />
        </div>
        <div className="description">
          <h2>Features</h2>
          <div className="feature-card">
            <div className="card-img">Proactive Maintenance</div>
            <div className="feature-detail">
              Take proactive measures to ensure peak performance,
              minimizing costly downtime.
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-detail">
              Harness data for accurate insights into machine
              performance and optimize maintenance.
            </div>
            <div className="card-img2">Data-Driven Insights</div>
          </div>
          <div className="feature-card">
            <div className="card-img">Intuitive Dashboard</div>
            <div className="feature-detail">
              Clear overview for quick and informed decisions.
            </div>
          </div>
        </div>
      </div>

      <div className="page page3" id="page3" ref={page3Ref}>
        <h1 className="modelhead">02 Distinct Models</h1>
      </div>

      <div className="page page4" id="page4" ref={page4Ref}>
        <div className="model-card">
          <div className="card-heading">01 Balanced Bagging</div>
          <div className="card-detail">
            <div className="card-feature">Higher recall rate</div>
            <div className="card-feature">
              Ensemble method combining multiple classifiers.
            </div>
            <div className="card-feature">
              Focus on capturing as many maintenance needs or failure instances as
              possible.
            </div>
            <div className="card-feature">Effective for imbalanced datasets.</div>
            <div className="card-feature">
              Utilizes a voting mechanism to combine predictions.
            </div>
            <div className="card-feature">
              Minimizes the risk of missed maintenance events.
            </div>
          </div>
        </div>
        <div className="model-card">
          <div className="card-heading">02 Balanced Random Forest</div>
          <div className="card-detail">
            <div className="card-feature">Higher precision rate</div>
            <div className="card-feature">
              Ensemble method based on random forest algorithm.
            </div>
            <div className="card-feature">
              Emphasizes minimizing false positives and unnecessary maintenance
              interventions.
            </div>
            <div className="card-feature">
              Suitable for cost efficiency and resource optimization.
            </div>
            <div className="card-feature">Handles imbalanced datasets effectively.</div>
            <div className="card-feature">
              Provides a higher precision rate for maintenance predictions.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
