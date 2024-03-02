import './App.css';
import Navbar from './component/Navbar'; 
import Heading from './component/Heading'; 
import About from './component/About'; 
import Services from './component/Services'; 
import Testimony from './component/Testimony'; 
import Team from './component/Team'; 
import Footer from './component/Footer'; 

function App() {
  return (
    <div className="App">
      <Navbar />
      <Heading />
      <About />
      <Services />
      <Testimony />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
