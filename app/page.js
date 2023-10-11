import Navbar from './components/navbar/Navbar';
import Main from './components/Main';
import About from './components/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/Contact';
import ViewMode from './components/viewMode';
import Footer from './components/Footer';

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
