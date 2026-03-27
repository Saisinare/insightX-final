import './Page.css';

const Analysis = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1>Data Analysis</h1>
        <p>Analyze your machine data to gain insights and improve predictions.</p>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Trend Analysis</h3>
            <p>Identify patterns and trends in your machine data</p>
          </div>
          <div className="feature-card">
            <h3>Failure Patterns</h3>
            <p>Understand common failure modes</p>
          </div>
          <div className="feature-card">
            <h3>Performance Reports</h3>
            <p>Generate comprehensive performance reports</p>
          </div>
          <div className="feature-card">
            <h3>Custom Dashboards</h3>
            <p>Create custom dashboards for your needs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
