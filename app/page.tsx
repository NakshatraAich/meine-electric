import { HeroSection } from '@/components/sections/hero-section'
import { CompanyIntroduction } from '@/components/sections/company-introduction'
import { RecognitionSection } from '@/components/sections/recognition-section'
import { NewsSection } from '@/components/sections/news-section'
import { TechnologySection } from '@/components/sections/technology-section'
import { TwoColumnSection } from '@/components/sections/two-column-section'
import Footer from '@/components/layout/footer'
import { siteImages } from '@/lib/images-config'

export default function Home() {
  return (
    <>
      {/* Hero Section with Navigation Bar */}
      <HeroSection />
      
      {/* Company Introduction Section */}
      <CompanyIntroduction />
      
      {/* Recognition Section */}
      <RecognitionSection />

      {/* Technology Section */}
      <TechnologySection />

      {/* News Section */}
      <NewsSection />
      
      {/* Keep existing sections below - they can be scrolled to see */}
      {/* <TwoColumnSection
        title="Engineering the Future of Energy Generation"
        description="We're developing advanced energy storage and generation solutions that make renewable power reliable, scalable, and sustainable for everyone."
        imageSrc={siteImages.engineeringImage}
        imageAlt="Advanced energy storage systems in action."
        imagePosition="right"
      />
      
      <TwoColumnSection
        title="Seamless Energy Resilience for a Changing World"
        description="Our innovative storage systems ensure that communities and businesses stay powered, even as the energy landscape evolves."
        imageSrc={siteImages.resilienceImage}
        imageAlt="Maine Electric energy resilience solutions."
        imagePosition="left"
        className="bg-gray-50"
      /> */}

      
      
      <Footer />
    </>
  )
}