import { useState } from 'react';
import api from '../services/api';
import './Predict.css';

const Predict = () => {
  const [formData, setFormData] = useState({
    machine_name: '',
    model: 'Balanced Bagging',
    type: 'low',
    air_temp: '',
    process_temp: '',
    rotational_speed: '',
    torque: '',
    tool_wear: '',
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleModelSelect = (model) => {
    setFormData({ ...formData, model });
  };

  const handleTypeSelect = (type) => {
    setFormData({ ...formData, type });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post('/predict', formData);
      setResult(response.data);
    } catch (error) {
      console.error('Prediction error:', error);
      setResult({ error: 'Failed to get prediction' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="container">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="input-section">
              <div className="selection-fields">
                <div className="field">
                  <label>Name</label>
                  <input
                    type="text"
                    id="name"
                    name="machine_name"
                    placeholder="Enter Machine Name"
                    value={formData.machine_name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="field">
                  <label>Model</label>
                  <div className="model-selection">
                    <div
                      className={`model-option ${
                        formData.model === 'Balanced Bagging' ? 'model-selected' : ''
                      }`}
                      onClick={() => handleModelSelect('Balanced Bagging')}
                    >
                      Balanced Bagging
                    </div>
                    <div
                      className={`model-option ${
                        formData.model === 'Balanced Random Forest' ? 'model-selected' : ''
                      }`}
                      onClick={() => handleModelSelect('Balanced Random Forest')}
                    >
                      Balanced Random Forest
                    </div>
                  </div>
                </div>

                <div className="field">
                  <label>Type</label>
                  <div className="type-selection">
                    <div
                      className={`option ${formData.type === 'low' ? 'type-selected' : ''}`}
                      onClick={() => handleTypeSelect('low')}
                    >
                      Low
                    </div>
                    <div
                      className={`option ${formData.type === 'Medium' ? 'type-selected' : ''}`}
                      onClick={() => handleTypeSelect('Medium')}
                    >
                      Medium
                    </div>
                    <div
                      className={`option ${formData.type === 'High' ? 'type-selected' : ''}`}
                      onClick={() => handleTypeSelect('High')}
                    >
                      High
                    </div>
                  </div>
                </div>
              </div>

              <div className="input-fields">
                <div className="field">
                  <label htmlFor="airTemp">Air Temperature</label>
                  <div className="field-input">
                    <input
                      type="number"
                      step="0.1"
                      id="airTemp"
                      name="air_temp"
                      value={formData.air_temp}
                      onChange={handleChange}
                      required
                    />
                    <span className="unit">°C</span>
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="processTemp">Process Temperature</label>
                  <div className="field-input">
                    <input
                      type="number"
                      step="0.1"
                      id="processTemp"
                      name="process_temp"
                      value={formData.process_temp}
                      onChange={handleChange}
                      required
                    />
                    <span className="unit">°C</span>
                  </div>
                </div>

                <div className="field">
                  <label>Rotational Speed</label>
                  <div className="field-input">
                    <input
                      type="number"
                      id="rotateSpeed"
                      name="rotational_speed"
                      value={formData.rotational_speed}
                      onChange={handleChange}
                      required
                    />
                    <span className="unit">rpm</span>
                  </div>
                </div>

                <div className="field">
                  <label>Torque</label>
                  <div className="field-input">
                    <input
                      type="number"
                      step="0.1"
                      id="torque"
                      name="torque"
                      value={formData.torque}
                      onChange={handleChange}
                      required
                    />
                    <span className="unit">Nm</span>
                  </div>
                </div>

                <div className="field">
                  <label>Tool Wear</label>
                  <div className="field-input">
                    <input
                      type="number"
                      id="toolWear"
                      name="tool_wear"
                      value={formData.tool_wear}
                      onChange={handleChange}
                      required
                    />
                    <span className="unit">min</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="submit-section">
              <button type="submit" id="submit-btn" disabled={loading}>
                {loading ? 'Predicting...' : 'Predict'}
              </button>
            </div>
          </form>
        </div>
      </div>

      {result && (
        <div className="result-section">
          <h2>Prediction Result</h2>
          {result.error ? (
            <p className="error">{result.error}</p>
          ) : (
            <div className="result-content">
              <p className="prediction">
                Status: <span className={result.prediction === 0 ? 'safe' : 'failure'}>
                  {result.prediction === 0 ? 'No Failure' : 'Failure Predicted'}
                </span>
              </p>
              {result.confidence && (
                <p>Confidence: {(result.confidence * 100).toFixed(2)}%</p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Predict;
