import { useState } from 'react';
import api from '../services/api';
import './Monitoring.css';

const Monitoring = () => {
  const [formData, setFormData] = useState({
    machine_name: '',
    power: '',
    vib_file: null,
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, vib_file: file });
      setFileName(file.name);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    if (file && file.name.endsWith('.csv')) {
      setFormData({ ...formData, vib_file: file });
      setFileName(file.name);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = new FormData();
      data.append('machine_name', formData.machine_name);
      data.append('power', formData.power);
      data.append('vib_file', formData.vib_file);

      const response = await api.post('/diagnose', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setResult(response.data);
    } catch (error) {
      console.error('Diagnosis error:', error);
      setResult({ error: 'Failed to diagnose' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="info-field-container">
            <input
              type="text"
              className="input-field"
              name="machine_name"
              placeholder="Enter Your Machine Name"
              value={formData.machine_name}
              onChange={handleChange}
              required
            />
            <select
              name="power"
              className="select-menu"
              value={formData.power}
              onChange={handleChange}
              required
            >
              <option value="">Select Power Usage</option>
              <option value="0">0W</option>
              <option value="200">200W</option>
              <option value="400">400W</option>
            </select>
          </div>

          <div
            className="drop-zone"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={() => document.querySelector('.drop-zone__input').click()}
          >
            <span className="drop-zone__prompt">
              {fileName || 'Drop Your (.CSV) file here or click to upload'}
            </span>
            <input
              type="file"
              name="vib_file"
              className="drop-zone__input"
              accept=".csv"
              onChange={handleFileChange}
            />
          </div>

          <div className="submit-section">
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Predicting...' : 'Predict'}
            </button>
          </div>
        </div>
      </form>

      {result && (
        <div className="result-section">
          <h2>Diagnosis Result</h2>
          {result.error ? (
            <p className="error">{result.error}</p>
          ) : (
            <div className="result-content">
              <p className="prediction">
                Status: <span className={result.status === 'healthy' ? 'safe' : 'failure'}>
                  {result.status || 'Analysis Complete'}
                </span>
              </p>
              {result.message && <p>{result.message}</p>}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Monitoring;
