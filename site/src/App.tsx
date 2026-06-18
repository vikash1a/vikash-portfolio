import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import data from './data/resume.json';
import './index.css';

export default function App() {
  return (
    <>
      <Header />
      <main style={{ paddingBottom: 0 }}>
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <footer>
        <div className="container">
          <span>Vikash Sinha · Bengaluru, India · v{data.version}</span>
          <span>Built with React & Vite · Hosted on GitHub Pages</span>
        </div>
      </footer>
    </>
  );
}
