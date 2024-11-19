import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Experience from './pages/Experience';
import HeroSection from './pages/HeroSection';
import AboutSection from './pages/AboutMe';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import ContactMe from './pages/ContactMe';

function App() {
  return (
    <>
      <Header />
      <div id="hero"><HeroSection /></div>
      <div id="about"><AboutSection /></div>
      <div id="exp"><Experience /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><ContactMe /></div>
      <Footer />
    </>
  );
}

export default App;
