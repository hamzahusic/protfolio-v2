import './index.css';
import Navbar from './components/Navbar';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';
import { Triangle } from  'react-loader-spinner'
import { useState } from 'react';

function App() {

  const [loading,setLoading] = useState(true);

  window.onload = () => setLoading(false);

  return (
    <div>
        {loading &&
            <Triangle
              height="150"
              width="150"
              color="black"
              ariaLabel="triangle-loading"
              wrapperStyle={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
              }}
              wrapperClassName=""
              visible={true}
            />

        }
        {!loading && 
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
        </div>}
    </div>
  );
}

export default App;
