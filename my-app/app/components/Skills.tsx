'use client'

import React, { useState } from 'react';
import { Code, Palette, Wrench, Target } from 'lucide-react';
import { skills } from '../data/mock';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('programming');

  const getCategoryIcon = (category:any) => {
    switch (category) {
      case 'Web Development': return Code;
      case 'Programming': return Code;
      case 'Design': return Palette;
      case 'Tools': return Wrench;
      case 'Skills': return Target;
      default: return Code;
    }
  };

  const getCategoryColor = (category:any) => {
    switch (category) {
      case 'Web Development': return 'text-blue-400';
      case 'Programming': return 'text-green-400';
      case 'Design': return 'text-purple-400';
      case 'Tools': return 'text-orange-400';
      case 'Skills': return 'text-pink-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills and creative abilities, 
            developed through hands-on projects and continuous learning.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <div className="flex bg-gray-900 p-1 rounded-2xl border border-gray-700 shadow-2xl">
            <button
              onClick={() => setActiveTab('programming')}
              className={`px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-3 whitespace-nowrap ${
                activeTab === 'programming'
                  ? 'bg-white text-black shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              <Code size={18} />
              Programming & Development
            </button>
            <button
              onClick={() => setActiveTab('creative')}
              className={`px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-3 whitespace-nowrap ${
                activeTab === 'creative'
                  ? 'bg-white text-black shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              <Palette size={18} />
              Creative & Soft Skills
            </button>
          </div>
        </div>

        <div className="bg-gray-900 rounded-3xl border border-gray-800 p-8 md:p-12 shadow-2xl max-w-5xl mx-auto">
          {activeTab === 'programming' && (
            <div className="fade-in-up">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center gap-3 bg-gray-800 px-6 py-3 rounded-2xl border border-gray-700 mb-6">
                  <Code className="text-gray-300" size={24} />
                  <h3 className="text-2xl font-bold text-white">Programming & Development</h3>
                </div>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Technical skills developed through hands-on projects and continuous learning in modern web technologies.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {skills.programming.map((skill, index) => {
                  const IconComponent = getCategoryIcon(skill.category);
                  return (
                    <div key={index} className="group bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-gray-700 rounded-lg border border-gray-600">
                            <IconComponent size={18} className="text-gray-300 group-hover:scale-110 transition-transform duration-200" />
                          </div>
                          <span className="text-lg font-semibold text-white">{skill.name}</span>
                        </div>
                        <span className="text-gray-300 text-sm font-bold">{skill.level}%</span>
                      </div>
                      
                      <div className="relative mb-3">
                        <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-white to-gray-300 rounded-full transition-all duration-1000 ease-out shadow-lg"
                            style={{ 
                              width: `${skill.level}%`,
                              animationDelay: `${index * 150}ms`
                            }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">
                        {skill.category}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'creative' && (
            <div className="fade-in-up">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center gap-3 bg-gray-800 px-6 py-3 rounded-2xl border border-gray-700 mb-6">
                  <Palette className="text-gray-300" size={24} />
                  <h3 className="text-2xl font-bold text-white">Creative & Soft Skills</h3>
                </div>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Creative abilities and interpersonal skills that enhance project collaboration and user experience design.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {skills.creative.map((skill, index) => {
                  const IconComponent = getCategoryIcon(skill.category);
                  return (
                    <div key={index} className="group bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-gray-700 rounded-lg border border-gray-600">
                            <IconComponent size={18} className="text-gray-300 group-hover:scale-110 transition-transform duration-200" />
                          </div>
                          <span className="text-lg font-semibold text-white">{skill.name}</span>
                        </div>
                        <span className="text-gray-300 text-sm font-bold">{skill.level}%</span>
                      </div>
                      
                      <div className="relative mb-3">
                        <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-white to-gray-300 rounded-full transition-all duration-1000 ease-out shadow-lg"
                            style={{ 
                              width: `${skill.level}%`,
                              animationDelay: `${index * 150}ms`
                            }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">
                        {skill.category}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 max-w-2xl mx-auto">
            <h4 className="text-xl font-semibold text-white mb-4">Always Learning</h4>
            <p className="text-gray-400 leading-relaxed">
              These skills represent my current proficiency levels, but I'm constantly expanding my knowledge 
              through new projects, courses, and hands-on experience. Technology evolves rapidly, and so do I.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;