import Head from 'next/head';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

export default function ProjectsPage({ darkMode, setDarkMode }) {
  return (
    <>
      <Head><title>Projects | Loko Israel</title></Head>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="pt-20 bg-black min-h-screen">
        <Projects />
      </main>
      <Footer />
    </>
  );
}
