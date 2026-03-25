import Head from 'next/head';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function ContactPage({ darkMode, setDarkMode }) {
  return (
    <>
      <Head><title>Contact | Loko Israel</title></Head>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="pt-20 bg-black min-h-screen">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
