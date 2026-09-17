import Head from 'next/head';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Startups from '../components/Startups';
import Skills from '../components/Skills';
import About from '../components/About';
import Education from '../components/Education';
import Highlights from '../components/Highlights';
import SocialLinks from '../components/SocialLinks';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Loko Israel | Full-Stack Developer</title>
        <meta
          name="description"
          content="Full-Stack Developer — Engineering production-grade web applications, AI platforms & scalable backend systems."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />
      <main>
        {/* 1. Hero with Proof of Work Stat Counters & Resume CTA */}
        <Hero />

        {/* 2. Featured Projects with Live Previews */}
        <Projects />

        {/* 3. Startups / Ryport Deep-Dive */}
        <Startups />

        {/* 4. Core Technologies Compact Grid */}
        <Skills />

        {/* 5. About Me (Condensed Bio & Certifications) */}
        <About />

        {/* 6. Education (Condensed 3-Line Card) */}
        <Education />

        {/* 7. Highlights: 1-Line Process, Stats, Testimonials & Condensed Fuzzi Deep-Dive */}
        <Highlights />

        {/* 8. Connect & Socials */}
        <SocialLinks />

        {/* 9. Contact CTA */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  return { props: {} };
}
