import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Challenge from './sections/Challenge';
import Practices from './sections/Practices';
import HowItWorks from './sections/HowItWorks';
import Community from './sections/Community';
import Pricing from './sections/Pricing';
import CTA from './sections/CTA';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#FFFBEB]">
      <Navigation />
      <main>
        <Hero />
        <Challenge />
        <Practices />
        <HowItWorks />
        <Community />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
