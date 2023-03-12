
import './App.css';
import startuphive4 from "./assets/startuphive4.jpg"
import startuphive2 from "./assets/startuphive2.jpg";
import startuphive5 from "./assets/startuphive5.jpeg";
import Hero from "./Components/Hero";
import Slider from './Components/slider';
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Hero imageSrc={startuphive4} />
      <Slider imageSrc={startuphive2} title ={"Outsourcing"} subtitle ={
        " Why do all the work when you can outsource at the comfort of your home.Get to interact with investors from all over the world.Get them to sponsor your work."}
        />
        <Slider
          imageSrc={startuphive5} 
          title={ "Networking"}
          subtitle ={"Get a chance to meet other developers and share your work.A fair chance at learning new skills."}
         flipped={true} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;


