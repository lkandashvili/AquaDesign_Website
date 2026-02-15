import HeroSection from './components/HeroSection';
import ServicesShowcase from './components/ServicesShowcase';
import ProjectGallery from './components/ProjectGallery';
import ContactForm from './components/ContactForm';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesShowcase />
      <ProjectGallery />
      <ContactForm />
    </>
  );
}