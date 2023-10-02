import Navbar from '@/components/Navbar';
import Main from '@/components/Main';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import ViewMode from '@/components/viewMode';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <main>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      {/* <Experience /> */}
      <Contact />
      <Footer />
      <ViewMode />
    </main>
  );
}
