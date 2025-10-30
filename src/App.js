import styles from './App.module.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Destinations from './components/Destinations/Destinations';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';

export default function App(){
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <Hero />
        <div className="container">
          <About />
        </div>
        <Destinations />
        <div className="container">
          <Gallery />
          <Contact />
        </div>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}
