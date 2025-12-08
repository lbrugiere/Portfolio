import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';

function App() {
  const [projectModalData, setProjectModalData] = useState(null);
  const openProjectModal = (project) => setProjectModalData(project);
  const closeProjectModal = () => setProjectModalData(null);

  return (
    <>
    <Header />
    <main className="bg-dark-primary min-h-screen font-sans">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection onProjectClick={openProjectModal} />
      {projectModalData && (
      <ProjectModal project={projectModalData} onClose={closeProjectModal} />
      )}
      <ContactSection />
    </main>
    <Footer />
  </>
  )
}

export default App
