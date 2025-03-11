import Navbar from './components/navbar/Navbar';
import Main from './components/Main';
import About from './components/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/Contact';
import ViewMode from './components/viewMode';
import NavTop from './components/NavTop';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="bg-gradient-to-br from-white to-gray-50 dark:from-black dark:to-gray-900">
        <Main />
      </div>
      <div className="bg-gradient-to-bl from-gray-50 to-white dark:from-gray-900 dark:to-black">
        <About />
      </div>
      <div className="bg-gradient-to-br from-white to-gray-50 dark:from-black dark:to-gray-900">
        <Skills />
      </div>
      <div className="bg-gradient-to-bl from-gray-50 to-white dark:from-gray-900 dark:to-black">
        <Projects />
      </div>
      <div className="bg-gradient-to-br from-white to-gray-50 dark:from-black dark:to-gray-900">
        <Contact />
      </div>
      <Footer />
      <ViewMode />
      <NavTop />
    </main>
  );
}
