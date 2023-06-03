import './index.css';
import Navbar from './components/Navbar';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <main>
          <About/>
          <Projects/>
          <Skills/>
          <Contact/>
        </main>
      <Footer/>
    </div>
  );
}

export default App;
