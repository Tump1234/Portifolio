'use client'

import React, { useState } from 'react';
import { Github, Palette, Code, Monitor } from 'lucide-react';
import { projects } from '../data/mock';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const categories = ['All', 'Web Development', 'Design', 'Management'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Web Development': return Monitor;
      case 'Design': return Palette;
      case 'Management': return Code;
      default: return Code;
    }
  };

  return (
    <section id="projects" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A collection of projects showcasing my journey in programming and digital art. 
            Each project represents a step forward in my learning and creative expression.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = getCategoryIcon(category);
            return (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-mono text-sm uppercase tracking-wider transition-all duration-300 border ${
                  activeFilter === category
                    ? 'bg-white text-black border-white'
                    : 'bg-transparent text-gray-400 border-gray-600 hover:border-gray-400 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  {category !== 'All' && <IconComponent size={16} />}
                  {category}
                </div>
              </button>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const IconComponent = getCategoryIcon(project.category);
            return (
              <div 
                key={project.id}
                className="group relative overflow-hidden rounded-lg bg-gray-900 border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  
                  <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'opacity-20' : 'opacity-0'
                  }`}>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <IconComponent size={16} className="text-gray-400" />
                    <span className="text-gray-400 text-xs font-mono uppercase tracking-wider">
                      {project.category} • {project.year}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Interested in seeing more of my work?
          </p>
          <a 
            href="https://github.com/hiremos376" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-mono text-sm uppercase tracking-wider hover:bg-gray-200 transition-all duration-300 hover:scale-105"
          >
            <Github size={18} />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;