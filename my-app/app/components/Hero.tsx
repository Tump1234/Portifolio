'use client'

import React from 'react';
import { ArrowDown, Github, Facebook, Mail } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #333 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex items-center min-h-screen">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full animate-in">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-gray-400 font-mono text-sm uppercase tracking-wider">
                {personalInfo.grade}
              </p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                I'm <span className="text-white">{personalInfo.name}</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
                {personalInfo.title}
              </h2>
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              12th-grade student passionate about software development and technology. Skilled in HTML, CSS, JS and Next.JS with hands-on project experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-black px-8 py-3 rounded-full font-mono text-sm uppercase tracking-wider hover:bg-gray-200 transition-all duration-300 hover:scale-105"
              >
                View My Work
              </button>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-gray-600 text-white px-8 py-3 rounded-full font-mono text-sm uppercase tracking-wider hover:border-white hover:bg-white hover:text-black transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>

            <div className="flex space-x-6 pt-4">
              <a 
                href={personalInfo.socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Github size={24} />
              </a>
              <a 
                href={personalInfo.socialLinks.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Facebook size={24} />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative flex items-center justify-center">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-gray-800 shadow-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
                <img 
                  src={personalInfo.profileImage} 
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-gray-600 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-800 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors duration-200 animate-bounce"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default Hero;