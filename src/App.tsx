import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Ranks from './sections/Ranks';
import Gallery from './sections/Gallery';
import Join from './sections/Join';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Ranks />
        <Gallery />
        <Join />
      </main>
      <Footer />
    </div>
  );
}

export default App;
