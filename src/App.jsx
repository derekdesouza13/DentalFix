import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import BookAppointment from './components/BookAppointment';
import FreeConsultation from './components/FreeConsultation';
import BracesPricing from './components/BracesPricing';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <BracesPricing />
        <BookAppointment />
        <FreeConsultation />
        <Reviews />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
