import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/Contact';
import ViewMode from './components/viewMode';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main
    // style={{
    //   background: `url('/images/adrien-olichon.jpg') repeat`,
    //   height: '100vh',
    //   width: '100vw',
    //   backgroundSize: 'cover',
    // }}
    >
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
