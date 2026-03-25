import Head from 'next/head';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Footer from '../components/Footer';

export default function AboutPage({ darkMode, setDarkMode }) {
  return (
    <>
      <Head><title>About | Loko Israel</title></Head>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="pt-20 bg-black min-h-screen">
        <About />
      </main>
      <Footer />
    </>
  );
}
