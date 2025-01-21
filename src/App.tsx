import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Download from './pages/Download';
import KeySystem from './pages/KeySystem';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/download" element={<Download />} />
          <Route path="/key" element={<KeySystem />} /> {/* isWIP={false} */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
