import { useEffect, useMemo, useState } from "react";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Events from "./components/Events.jsx";
import Gallery from "./components/Gallery.jsx";
import Culture from "./components/Culture.jsx";
import WordOfWeek from "./components/WordOfWeek.jsx";
import Join from "./components/Join.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import LoadingOverlay from "./components/LoadingOverlay.jsx";
import "./index.css";

// (optional) for scroll animations
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  const [assetsReady, setAssetsReady] = useState(false);

  const criticalImages = useMemo(() => {
    const baseUrl = import.meta.env.BASE_URL;
    const urls = new Set([
      `${baseUrl}assets/logo-circle.png`,
      `${baseUrl}assets/banner-golden.png`,
    ]);

    return [...urls].filter(Boolean);
  }, []);

  useEffect(() => {
    let cancelled = false;

    const preloadImage = (src) =>
      new Promise((resolve) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = resolve; // don't block forever on 404
        img.src = src;
      });

    (async () => {
      await Promise.all(criticalImages.map(preloadImage));
      if (!cancelled) setAssetsReady(true);
    })();

    return () => {
      cancelled = true;
    };
  }, [criticalImages]);

  useEffect(() => {
    if (!assetsReady) return;
    AOS.init({ duration: 700, once: true, offset: 60 });
  }, [assetsReady]);

  if (!assetsReady) {
    return <LoadingOverlay text="ਸਾਈਟ ਲੋਡ ਹੋ ਰਹੀ ਹੈ…" />;
  }

  return (
    <div className="font-body text-neutral-900">
      <NavBar />
      <main>
        <section id="home" data-aos="fade-up">
          <Hero />
        </section>
        <section id="about" data-aos="fade-up">
          <About />
        </section>
        <section id="events" data-aos="fade-up">
          <Events />
        </section>
        <section id="gallery" data-aos="fade-up">
          <Gallery />
        </section>
        <section id="culture" data-aos="fade-up">
          <Culture />
        </section>
        <section id="word" data-aos="fade-up">
          <WordOfWeek />
        </section>
        <section id="join" data-aos="fade-up">
          <Join />
        </section>
        <section id="contact" data-aos="fade-up">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
