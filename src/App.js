import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import LandingPage from './pages/LandingPage';
import ServicePAge from './pages/ServicePAge';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { useEffect } from 'react';
import ScrollToTop from './ScrollToTop';
import Ticket from './pages/Ticket';
import TicketDetail from './component/tickets/TicketDetail';
import { Toaster} from 'sonner'

function App() {
  useEffect(() => {
    window.scrollTo({top:0, left:0, behavior: 'smooth'})
}, []);
  return (
    <div className="App">
      <Navbar />
      <Toaster position="top-right" />
      <ScrollToTop />
      <Routes>
      <Route  path="/" element={<LandingPage/>}/>
      <Route  path="/about" element={<AboutPage />}/>
      <Route  path="/service" element={<ServicePAge />}/>
      <Route  path="/contact" element={<ContactPage />}/>
      <Route  path="/ticket" element={<Ticket />}/>
      <Route  path="/ticket/:id" element={<TicketDetail />}/>
      </Routes>
    </div>
  );
}

export default App;
