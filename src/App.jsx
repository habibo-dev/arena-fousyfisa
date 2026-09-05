import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import TravelPlanner from './components/TravelPlanner.jsx'
import EditorialIntro from './components/EditorialIntro.jsx'
import FeaturedJourneys from './components/FeaturedJourneys.jsx'
import Destinations from './components/Destinations.jsx'
import Services from './components/Services.jsx'
import Umrah from './components/Umrah.jsx'
import WhyAlMosaique from './components/WhyAlMosaique.jsx'
import Process from './components/Process.jsx'
import Testimonials from './components/Testimonials.jsx'
import TrustBar from './components/TrustBar.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-olive-700 focus:px-4 focus:py-2 focus:text-ivory-50"
      >
        تخطَّ إلى المحتوى
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <TravelPlanner />
        <EditorialIntro />
        <FeaturedJourneys />
        <Destinations />
        <Services />
        <Umrah />
        <WhyAlMosaique />
        <Process />
        <Testimonials />
        <TrustBar />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
