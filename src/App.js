import './index.css';
import Navbar from './components/Navbar';
import Header from './Header';
import About from './About';
import Projects from './Projects';

function App() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <main>
          <About/>
          <Projects/>
        </main>

    </div>
  );
}

export default App;
