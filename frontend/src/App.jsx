import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Predict from './pages/Predict';
import Monitoring from './pages/Monitoring';
import History from './pages/History';
import Explore from './pages/Explore';
import Analysis from './pages/Analysis';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/Auth/PrivateRoute';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="predict" element={<Predict />} />
            <Route path="monitoring" element={<Monitoring />} />
            <Route path="explore" element={<Explore />} />
            <Route path="analysis" element={<Analysis />} />
            <Route 
              path="history" 
              element={
                <PrivateRoute>
                  <History />
                </PrivateRoute>
              } 
            />
            <Route 
              path="dashboard" 
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              } 
            />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
