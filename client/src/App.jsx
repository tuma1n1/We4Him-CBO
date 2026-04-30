import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Programmes from './pages/Programmes';
import NewsEvents from './pages/NewsEvents';
import GetInvolved from './pages/GetInvolved';
import ContactUs from './pages/ContactUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import './styles/colors.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/programmes" element={<Programmes />} />
        <Route path="/news" element={<NewsEvents />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;