'use client';
import Image from "next/image";
import App from "next/app";
 import About from "./components/About";
  import Hero from "./components/Hero";
   import Project from "./components/Projects";
    import Skills from "./components/Skills";
     import Header from "./components/Header";
       import Contact from "./components/Contact";
         import Footer from "./components/Footer";

export default function Home() {
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
