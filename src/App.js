
import './App.css';
import About from './components/about/about';
import Achivements from './components/achivements/achivememts';
import Contacts from './components/contact/contact';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Achivements/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
