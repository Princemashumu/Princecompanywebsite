import { Helmet } from 'react-helmet-async';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Experience from '../sections/Experience';
import Contact from '../sections/Contact';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Prince Mashumu | Software Engineer</title>
        <meta
          name="description"
          content="Portfolio of Prince Ngwako Mashumu — Full Stack Software Engineer based in Johannesburg, South Africa. Specialising in React, Node.js, and cross-platform application development."
        />
        <meta property="og:title" content="Prince Mashumu | Software Engineer" />
        <meta
          property="og:description"
          content="Full Stack Software Engineer from Johannesburg, SA — building cross-platform web and mobile applications."
        />
      </Helmet>

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
