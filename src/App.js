import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import About from './About.js';
import Projects from './Projects.js';
import Socials from './Socials.js';
import Contact from './Contact.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Home/>
      <About/>
      <Projects/>
      <Socials/>
      <Contact/>
    </div>
  );
}

export default App;
