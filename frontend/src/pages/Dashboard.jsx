import './Page.css';

const Dashboard = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1>Dashboard</h1>
        <p>Overview of your machine health and predictions.</p>
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h3>Total Machines</h3>
            <p className="stat">24</p>
          </div>
          <div className="dashboard-card">
            <h3>Active Alerts</h3>
            <p className="stat alert">3</p>
          </div>
          <div className="dashboard-card">
            <h3>Predictions This Month</h3>
            <p className="stat">156</p>
          </div>
          <div className="dashboard-card">
            <h3>Success Rate</h3>
            <p className="stat success">98.5%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
