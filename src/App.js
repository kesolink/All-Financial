import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './component/Navbar/Navbar';
import LandingPage from './pages/LandingPage';
import AboutHero from './component/about/AboutHero';
import ServicePAge from './pages/ServicePAge';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route  path="/" element={<LandingPage/>}/>
      <Route  path="/about" element={<AboutPage />}/>
      <Route  path="/service" element={<ServicePAge />}/>
      <Route  path="/contact" element={<ContactPage />}/>
      </Routes>
    </div>
  );
}

export default App;
