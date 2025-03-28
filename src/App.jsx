import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainNav from './components/main_nav';
// import Home from './pages/Home';
// import About from './pages/About';
import './App.css';
import Dashboard from './components/pages/Dashboard';
import Rentals from './components/pages/Rentals';
import Settings from './components/pages/Settings/Settings';
import Vehicles from './components/pages/Vehicles';
import Documents from './components/pages/Documents/Documents';
import Finance from './components/pages/Finance/Finance';
import Tracking from './components/pages/Tracking';
import Customer from './components/pages/Customer';

const App = () => {
  return (
    <Router>
      <MainNav />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/rentals" element={<Rentals/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/vehicles" element={<Vehicles/>} />
        <Route path="/documents" element={<Documents/>} />
        <Route path="/finance" element={<Finance/>} />
        <Route path="/tracking" element={<Tracking/>} />
        <Route path="/customers" element={<Customer/>} />
        {/* <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
