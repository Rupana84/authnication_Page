import './App.css';
import Dashboard from './component/Dashboard';
import Login from './component/Login';
import Navbar from './component/Navbar';
import SignUp from './component/SignUp';
import './style.css';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;