import './App.css';
import ContactUs from './components/Contact';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import OurServices from './components/OurServices';
import TopBar from './components/TopBar';

function App() {
  return (
    <div>
      <TopBar />
      <NavBar />
      <Hero />
      <OurServices />
      <ContactUs />
    </div>
  );
}

export default App;
