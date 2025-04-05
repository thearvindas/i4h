import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PelvicPain101 from './pages/PelvicPain101';
import OvercomingPain from './pages/OvercomingPain';
import Treatment from './pages/Treatment';
import PatientRecs from './pages/PatientRecs';
import About from './pages/About';
import './styles.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        {/* Simple routing based on window.location */}
        {window.location.pathname === '/' && <Home />}
        {window.location.pathname === '/pelvic-pain-101' && <PelvicPain101 />}
        {window.location.pathname === '/overcoming-pain' && <OvercomingPain />}
        {window.location.pathname === '/treatment' && <Treatment />}
        {window.location.pathname === '/patient-recommendations' && <PatientRecs />}
        {window.location.pathname === '/about' && <About />}
      </main>
      <Footer />
    </div>
  );
};

export default App; 