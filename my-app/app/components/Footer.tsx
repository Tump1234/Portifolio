'use client'

import React from 'react';
import { Github, Facebook, Mail } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-white border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold font-mono">{personalInfo.name}</h3>
              <p className="text-gray-400 text-sm">{personalInfo.title}</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              12th-grade student passionate about web development and technology. 
              Building innovative solutions through code.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {[
                { label: 'About', href: '#about' },
                { label: 'Projects', href: '#projects' },
                { label: 'Skills', href: '#skills' },
                { label: 'Contact', href: '#contact' }
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-left text-sm"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href={personalInfo.socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href={personalInfo.socialLinks.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Open to opportunities and collaborations
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} {personalInfo.name}</span>
            </div>
            
            <div className="flex items-center space-x-6 text-gray-400 text-sm">
              <span className="font-mono">Built with Next.js</span>
              <button 
                onClick={scrollToTop}
                className="hover:text-white transition-colors duration-200 font-mono uppercase tracking-wider"
              >
                Back to Top ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;