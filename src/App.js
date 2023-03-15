import About from './componants/About';
import { Hero } from './componants/Hero';
import { Navbar } from './componants/Navbar';
import Services from './componants/Services';
import Tours from './componants/Tours';
import Footer from './componants/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
