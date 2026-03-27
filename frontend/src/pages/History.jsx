import { useState, useEffect } from 'react';
import api from '../services/api';
import './Page.css';

const History = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await api.get('/history');
      setHistory(response.data);
    } catch (error) {
      console.error('Error fetching history:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <div className="page-content">
        <h1>Prediction History</h1>
        <p>View your past predictions and machine analysis results.</p>
        
        {loading ? (
          <div className="loading">Loading...</div>
        ) : history.length === 0 ? (
          <div className="empty-state">
            <p>No prediction history yet. Start by making your first prediction!</p>
          </div>
        ) : (
          <div className="history-list">
            <table className="history-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Machine Name</th>
                  <th>Model</th>
                  <th>Result</th>
                  <th>Confidence</th>
                </tr>
              </thead>
              <tbody>
                {history.map((item, index) => (
                  <tr key={index}>
                    <td>{new Date(item.date).toLocaleDateString()}</td>
                    <td>{item.machine_name}</td>
                    <td>{item.model}</td>
                    <td className={item.prediction === 0 ? 'safe' : 'failure'}>
                      {item.prediction === 0 ? 'No Failure' : 'Failure'}
                    </td>
                    <td>{(item.confidence * 100).toFixed(2)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
