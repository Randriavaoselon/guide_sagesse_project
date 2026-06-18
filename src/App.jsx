import Navbar from './components/Navbar'
import StartedSection from './components/StartedSection'
import InfoSection from './components/InfoSection'
import ServiceTitle from './components/ServiceTitle'
import ServicesSection from './components/ServicesSection'
import PublicationSection from './components/PublicationSection'
import TemoinSection from './components/TemoinSection'
import PartnerSection from './components/PartnerSection'
import NewsletterSection from './components/NewsletterSection'
import Footer from './components/Footer'
import ButtonUp from './components/ButtonUp'
import SidebarNav from './components/SidebarNav'

import './App.css'

function App() {

  return (
    <div className='app-container'>
      <Navbar />
      <SidebarNav />
      <StartedSection />
      <InfoSection />
      <ServiceTitle 
        title = "Guides pour mieux vivre"
        description = "Nous vous proposons des conseils simples pour améliorer votre quotidien et vivre une vie plus équilibrée et épanouie."
      />
      <ServicesSection />
      <PublicationSection />
      <TemoinSection />
      <PartnerSection />
      <NewsletterSection />
      <Footer />
      <ButtonUp />
    </div>
  )
}

export default App
