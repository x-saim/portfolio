import Navbar from '@/components/Navbar';
import Main from '@/components/Main';
import About from '@/components/About';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Main />
      <About />
      <Skills />
    </main>
  );
}
