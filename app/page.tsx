import { HeroSection } from '@/components/sections/hero-section'
import { CompanyIntroduction } from '@/components/sections/company-introduction'
import { RecognitionSection } from '@/components/sections/recognition-section'
import { NewsSection } from '@/components/sections/news-section'
import { TechnologySection } from '@/components/sections/technology-section'
import { TwoColumnSection } from '@/components/sections/two-column-section'
import Footer from '@/components/layout/footer'
import { siteImages } from '@/lib/images-config'
import { WhyIronair } from '@/components/sections/why-ironair'

export default function Home() {
  return (
    <>
      {/* Hero Section with Navigation Bar */}
      <HeroSection />
      
      {/* Recognition Section */}
      {/* <RecognitionSection /> */}


      {/* Technology Section */}
      {/* <TechnologySection /> */}

      {/* Why Iron Air Section */}
      <WhyIronair/>

      {/* Company Introduction Section */}
      <CompanyIntroduction />

      {/* News Section */}
      <NewsSection />    
      
      <Footer />
    </>
  )
}