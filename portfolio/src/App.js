import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Skill from './Components/Skill';

function App() {
  return (
        <div className="App">
      <main className="cv-app-container">
        <div className="">
          <Contact />
         </div>
        <div className="cv-app-right-sec">
         <About />
         <Experience />
         <Skill />
        </div>
      </main>
    </div>
  );
}


export default App;
