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

    // Theme switching
    const initTheme = () => {
      const savedTheme = localStorage.getItem('siteTheme') || 'monocore-default';
      document.documentElement.dataset.theme = savedTheme;

      const themeSwitches = ['theme-switch', 'theme-switch-mobile'];
      themeSwitches.forEach(id => {
        const themeSwitch = document.getElementById(id) as HTMLSelectElement;
        if (themeSwitch) {
          themeSwitch.value = savedTheme;
          themeSwitch.addEventListener('change', (e) => {
            const target = e.target as HTMLSelectElement;
            const theme = target.value;
            document.documentElement.dataset.theme = theme;
            localStorage.setItem('siteTheme', theme);
            // Sync both select elements
            themeSwitches.forEach(otherId => {
              if (otherId !== id) {
                const otherSwitch = document.getElementById(otherId) as HTMLSelectElement;
                if (otherSwitch) otherSwitch.value = theme;
              }
            });
          });
        }
      });
    };

    // METACRAFTERS cursor
    const initCursor = () => {
      const cursor = document.createElement('div');
      cursor.id = 'mc-cursor';
      document.body.appendChild(cursor);

      let mouseX = 0;
      let mouseY = 0;
      let cursorX = 0;
      let cursorY = 0;

      const updateCursor = () => {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;

        cursor.style.left = `${cursorX - 15}px`;
        cursor.style.top = `${cursorY - 15}px`;

        requestAnimationFrame(updateCursor);
      };

      document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });

      // Hover effects
      document.addEventListener('mouseenter', (e) => {
        if (e.target && (e.target as HTMLElement).matches('a, button, [role="button"]')) {
          cursor.classList.add('hover');
        }
      }, true);

      document.addEventListener('mouseleave', (e) => {
        if (e.target && (e.target as HTMLElement).matches('a, button, [role="button"]')) {
          cursor.classList.remove('hover');
        }
      }, true);

      updateCursor();
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
      initTheme();
      initCursor();
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
