# 🔧 InsightX — Predictive Maintenance System

> Predict machine failures before they happen. Built with React, Django, and Scikit-learn.

![Tech Stack](https://img.shields.io/badge/Frontend-React%2018%20%2B%20Vite-61DAFB?style=flat-square&logo=react)
![Backend](https://img.shields.io/badge/Backend-Django%20REST%20Framework-092E20?style=flat-square&logo=django)
![ML](https://img.shields.io/badge/ML-Scikit--learn-F7931E?style=flat-square&logo=scikit-learn)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## 📌 Overview

**InsightX** is a full-stack predictive maintenance platform that uses machine learning to identify potential equipment failures before they occur. Users can input real-time sensor data, receive instant failure predictions with confidence scores, and monitor historical trends — all through a responsive dashboard built for both desktop and mobile.

The system is designed around the challenge of unplanned industrial downtime: by predicting failures early, it enables proactive maintenance rather than reactive repair.

---

## ✨ Features

- **ML-Powered Predictions** — Submit sensor readings and receive instant failure probability predictions using a trained Scikit-learn model
- **Real-Time Monitoring Dashboard** — Visualize live equipment metrics and anomaly indicators
- **Prediction History** — Track past predictions and outcomes for auditing and model improvement
- **Data Analysis Tools** — Explore trends and patterns across historical sensor data
- **User Authentication** — Secure JWT-based login/signup with protected routes
- **Responsive Design** — Dark-themed UI optimized for desktop and mobile

---

## 🛠 Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Vite | Build tool & dev server |
| React Router DOM v6 | Client-side routing |
| Axios | HTTP client with interceptors |
| Chart.js | Data visualization |
| Custom CSS | Styling (CSS Grid, Flexbox, Variables) |

### Backend
| Technology | Purpose |
|---|---|
| Django | Web framework |
| Django REST Framework | REST API layer |
| Scikit-learn | ML model training & inference |
| JWT | Authentication tokens |

---

## 📁 Project Structure

```
insightX-final/
├── frontend/
│   └── src/
│       ├── components/
│       │   ├── Layout/         # Navbar, Layout wrapper
│       │   └── Auth/           # PrivateRoute guard
│       ├── pages/
│       │   ├── Home.jsx        # Landing page
│       │   ├── Predict.jsx     # Failure prediction form
│       │   ├── Monitoring.jsx  # Real-time dashboard
│       │   ├── History.jsx     # Prediction history (protected)
│       │   ├── Dashboard.jsx   # Overview (protected)
│       │   ├── Analysis.jsx    # Data analysis tools
│       │   └── Explore.jsx     # About predictive maintenance
│       ├── context/
│       │   └── AuthContext.jsx # JWT auth state
│       └── services/
│           └── api.js          # Axios instance + interceptors
└── backend/
    ├── apps/
    │   ├── authentication/     # Login, signup, JWT
    │   ├── predictions/        # ML inference endpoint
    │   └── monitoring/         # Sensor data endpoints
    └── ml/
        └── models/             # Trained Scikit-learn models
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- Python ≥ 3.10
- pip

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The React app runs at `http://localhost:5173`

Create a `.env` file in the `frontend/` directory:

```env
VITE_API_URL=http://localhost:8000/api
```

### Backend Setup

```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

The Django API runs at `http://localhost:8000`

---

## 🔌 API Endpoints

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| POST | `/api/login` | User login, returns JWT | No |
| POST | `/api/signup` | User registration | No |
| POST | `/api/predict` | Submit sensor data, get prediction | Yes |
| GET | `/api/history` | Fetch prediction history | Yes |
| GET | `/api/monitoring` | Get live monitoring data | Yes |
| GET | `/api/analysis` | Get aggregated analysis data | Yes |

### Prediction Request Example

```json
POST /api/predict
{
  "type": "Medium",
  "air_temperature": 298.1,
  "process_temperature": 308.6,
  "rotational_speed": 1551,
  "torque": 42.8,
  "tool_wear": 0
}
```

### Prediction Response Example

```json
{
  "failure_predicted": true,
  "probability": 0.87,
  "failure_type": "Tool Wear Failure",
  "confidence": "High"
}
```

---

## 🖥 Pages

| Page | Route | Description |
|---|---|---|
| Home | `/` | Landing page with feature highlights |
| Login | `/login` | User authentication |
| Signup | `/signup` | New user registration |
| Predict | `/predict` | Submit sensor readings for prediction |
| Monitoring | `/monitoring` | Real-time equipment monitoring |
| Dashboard | `/dashboard` | Overview with charts (protected) |
| History | `/history` | Past predictions log (protected) |
| Analysis | `/analysis` | Trend and pattern analysis |
| Explore | `/explore` | What is predictive maintenance? |

---

## 🤖 ML Model

The prediction engine is powered by a Scikit-learn model trained on industrial sensor data. Key input features include:

- **Machine Type** — Low / Medium / High
- **Air Temperature (K)**
- **Process Temperature (K)**
- **Rotational Speed (RPM)**
- **Torque (Nm)**
- **Tool Wear (min)**

The model predicts binary failure outcomes and classifies failure type (Tool Wear, Heat Dissipation, Power, Overstrain).

---

## 📸 UI Highlights

- Dark theme with blue gradient accents
- Backdrop blur navigation bar
- Animated hero section with staggered headings
- Color-coded prediction results (green / red / yellow)
- Responsive hamburger menu for mobile
- Smooth hover transitions on cards and buttons

---

## 🔐 Authentication Flow

InsightX uses JWT-based authentication managed through a global React context (`AuthContext`). Tokens are stored and attached automatically via Axios request interceptors. Protected pages (Dashboard, History) are gated behind a `PrivateRoute` component.

---

## 🗺 Roadmap

- [ ] Email/SMS alerts for high-risk predictions
- [ ] Multi-machine support and equipment profiles
- [ ] Model retraining pipeline from user-submitted data
- [ ] Export predictions to CSV / PDF
- [ ] Dockerized deployment with `docker-compose`

---

## 👤 Author

**Sai Sinare**
ENTC Student @ Vishwakarma Institute of Technology, Pune
[GitHub](https://github.com/Saisinare)

---

## 📄 License

This project is licensed under the MIT License.
