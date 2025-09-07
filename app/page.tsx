import Navigation from '@/components/Navigation'
import ShaderBackground from '@/components/ShaderBackground'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ShaderBackground />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            Designed and built with passion. 2024 Walid Noor.
          </p>
        </div>
      </footer>
    </main>
  )
}
