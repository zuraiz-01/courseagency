import './App.css'
import BenefitsSection from './components/BenefitsSection'
import ContactSection from './components/ContactSection'
import CoursesSection from './components/CoursesSection'
import CustomCursor from './components/CustomCursor'
import FaqSection from './components/FaqSection'
import FinalCtaSection from './components/FinalCtaSection'
import FooterSection from './components/FooterSection'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import JourneySection from './components/JourneySection'
import OffersSection from './components/OffersSection'
import PartnerStrip from './components/PartnerStrip'
import SearchSection from './components/SearchSection'
import StatsSection from './components/StatsSection'
import TeachersSection from './components/TeachersSection'
import TestimonialsSection from './components/TestimonialsSection'
import useScrollAnimations from './hooks/useScrollAnimations'
import {
  benefits,
  courses,
  faqs,
  learningSteps,
  offers,
  partners,
  stats,
  teachers,
  testimonials,
} from './data/siteData'

function App() {
  useScrollAnimations()

  const handleSearch = (event) => {
    event.preventDefault()
    document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleContactSubmit = (event) => {
    event.preventDefault()
    window.location.href = 'mailto:hello@loooacademy.com?subject=Course%20Inquiry'
  }

  const handleNewsletterSubmit = (event) => {
    event.preventDefault()
    window.location.href = 'mailto:hello@loooacademy.com?subject=Newsletter%20Subscription'
  }

  return (
    <div className="page">
      <CustomCursor />
      <Header />
      <HeroSection />
      <PartnerStrip partners={partners} />
      <SearchSection onSearch={handleSearch} />
      <BenefitsSection benefits={benefits} />
      <StatsSection stats={stats} />
      <JourneySection learningSteps={learningSteps} />
      <TeachersSection teachers={teachers} />
      <OffersSection offers={offers} />
      <TestimonialsSection testimonials={testimonials} />
      <CoursesSection courses={courses} />
      <FaqSection faqs={faqs} />
      <FinalCtaSection />
      <ContactSection onContactSubmit={handleContactSubmit} />
      <FooterSection onNewsletterSubmit={handleNewsletterSubmit} />
    </div>
  )
}

export default App
