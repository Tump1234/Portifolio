'use client';
import { useEffect } from 'react';
import About from "./components/About";
import Hero from "./components/Hero";
import Project from "./components/Projects";
import Skills from "./components/Skills";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

declare global {
  interface Window {
    particlesJS: any;
  }
}

export default function Home() {
  useEffect(() => {
    // Initialize particles
    const initParticles = () => {
      if (typeof window !== 'undefined' && window.particlesJS) {
        window.particlesJS("particles-canvas", {
          particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: "var(--particle-color)" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: {
              enable: true,
              distance: 150,
              color: "var(--particle-color)",
              opacity: 0.25,
              width: 1
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "bounce"
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "grab" },
              onclick: { enable: false }
            }
          },
          retina_detect: true
        });
      }
    };

    // Click to spawn particles
    const initClickHandler = () => {
      const canvas = document.getElementById('particles-canvas');
      if (canvas) {
        canvas.addEventListener('click', (e) => {
          if (window.particlesJS && window.particlesJS.fn && window.particlesJS.fn.modes) {
            for (let i = 0; i < 20; i++) {
              window.particlesJS.fn.modes.pushParticles(1, {
                pos_x: e.clientX,
                pos_y: e.clientY,
                radius: Math.random() * 3 + 1,
                color: { r: Math.random() * 255, g: Math.random() * 255, b: Math.random() * 255 },
                opacity: 0.5,
                spawner: {
                  life: 1.5,
                  rate: 0,
                  mass: 1
                }
              });
            }
          }
        });
      }
    };

    // Initialize everything when DOM is ready
    const init = () => {
      initClickHandler();
      initParticles();
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  }, []);

  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Project/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}
