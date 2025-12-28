'use client'

import React from 'react';
import { Code, Palette, Target, Users, GraduationCap, Globe } from 'lucide-react';
import { achievements, education, languages } from '../data/mock';

const About = () => {
  const interests = [
    {
      icon: Code,
      title: "Web Development",
      description: "Skilled in HTML, CSS, JavaScript and Next.JS with hands-on experience in real client projects."
    },
    {
      icon: Palette,
      title: "Design & Wireframing",
      description: "Creating wireframes and applying design thinking methodology to solve user experience challenges."
    },
    {
      icon: Target,
      title: "Problem Solving",
      description: "Strong analytical and problem-solving skills developed through various programming projects and team collaborations."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Experience working with development teams and managing projects using modern project management tools."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About Me
              </h2>
              <div className="w-20 h-1 bg-white mb-8"></div>
            </div>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                I'm a passionate 12th-grade student at Amjilt Cyber School with a strong focus on web development and technology. 
                Over the past few years, I've turned my curiosity for coding into practical experience by working on real projects 
                that blend functionality with design.
              </p>
              
              <p className="text-lg">
                My journey includes building Mindoly, a school project that strengthened my skills in frontend development, 
                contributing to a development team at Tridum, and creating a website for Altai Resort. These experiences gave me 
                hands-on exposure to HTML, CSS, JavaScript, and Next.js, while also teaching me the value of teamwork and problem-solving.
              </p>
              
              <p className="text-lg">
                Beyond coding, I'm developing my foundation in computer literacy and project management, aiming to grow into a 
                well-rounded software developer. Fluent in Mongolian and advancing in English, I'm eager to continue learning, 
                collaborating, and contributing to impactful tech projects.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-200 mb-6">What Drives Me</h3>
            <div className="grid gap-6">
              {interests.map((interest, index) => {
                const IconComponent = interest.icon;
                return (
                  <div key={index} className="group">
                    <div className="flex items-start space-x-4 p-4 rounded-lg border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:bg-gray-900/50">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors duration-300">
                          <IconComponent size={24} className="text-gray-400 group-hover:text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-white">
                          {interest.title}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {interest.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-20 grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="text-gray-400" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-semibold text-white">{edu.level}</h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider ${
                      edu.status === 'Current' ? 'bg-green-900 text-green-400' : 
                      edu.status === 'Graduated' ? 'bg-blue-900 text-blue-400' : 'bg-yellow-900 text-yellow-400'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-2">{edu.school}</p>
                  <p className="text-gray-400 text-sm">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Globe className="text-gray-400" />
              Languages
            </h3>
            <div className="space-y-6">
              {languages.map((lang, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-semibold text-white">{lang.language}</h4>
                    <span className="text-gray-400 text-sm font-mono">{lang.level}</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div 
                      className="h-full bg-gradient-to-r from-gray-400 to-white rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${lang.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">Professional Experience</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-gray-400 text-sm font-mono uppercase tracking-wider mb-2">
                    {achievement.year} • {achievement.type}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;