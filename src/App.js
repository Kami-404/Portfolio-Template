import './App.css';
import Home from './pages/Home';
import Service from './pages/Service';
import About from './pages/About';
import Footer from './pages/Footer';
import Contact from './pages/Contact';
import Avis from './pages/Avis';
import Statistique from './pages/Statistique';

function App() {
  return (
    <div>
      <Home />
      <About />
      <Service />
      <Statistique />
      <Avis />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
