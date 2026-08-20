import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import ProblemSection from '../../components/ProblemSection/ProblemSection'
import SolutionsSection from '../../components/SolutionsSection/SolutionsSection'
import ServicesDeepDive from '../../components/ServicesDeepDive/ServicesDeepDive'
import EcosystemSection from '../../components/EcosystemSection/EcosystemSection'
import FinalCtaSection from '../../components/FinalCtaSection/FinalCtaSection'
import ContactFormSection from '../../components/ContactFormSection/ContactFormSection'
import SiteFooter from '../../components/SiteFooter/SiteFooter'

import './home.css'

function Home() {
  return (
    <>
      <Header />

      <main>
        <div className="home-opening-stack">
          <Hero />
          <ProblemSection />
        </div>

        <SolutionsSection />
        <ServicesDeepDive />
        <EcosystemSection />
        <FinalCtaSection />
        <ContactFormSection />
      </main>

      <SiteFooter />
    </>
  )
}

export default Home
