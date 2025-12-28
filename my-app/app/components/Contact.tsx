'use client'

import React, { useState } from 'react';
import { Mail, Github, Facebook, Instagram, Send } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submission disabled by user request');
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: personalInfo.socialLinks.github,
      description: 'Check out my code'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: personalInfo.socialLinks.facebook,
      description: 'Connect with me'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: personalInfo.socialLinks.instagram,
      description: 'See my artwork'
    },
    {
      name: 'Email',
      icon: Mail,
      url: `mailto:${personalInfo.email}`,
      description: 'Send me an email'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            I'm always excited to discuss new opportunities, collaborations, or just chat about technology and art. 
            Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <p className="text-gray-400 mb-8">
                Whether you have a project idea, want to collaborate, or just want to say hi, I'd love to hear from you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-mono uppercase tracking-wider text-gray-400 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-gray-600 focus:outline-none transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-mono uppercase tracking-wider text-gray-400 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-gray-600 focus:outline-none transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-mono uppercase tracking-wider text-gray-400 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-gray-600 focus:outline-none transition-colors duration-200"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-mono uppercase tracking-wider text-gray-400 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-gray-600 focus:outline-none transition-colors duration-200 resize-vertical"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-white text-black px-8 py-4 rounded-full font-mono text-sm uppercase tracking-wider hover:bg-gray-200 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-gray-400 mb-8">
                Find me on these platforms or reach out directly. I'm most active on GitHub and love discussing code and creative projects.
              </p>
            </div>

            <div className="grid gap-4">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={index}
                    href={link.url}
                    target={link.name !== 'Email' ? '_blank' : undefined}
                    rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="group flex items-center p-4 bg-gray-900 rounded-lg border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors duration-300 mr-4">
                      <IconComponent size={20} className="text-gray-400 group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white group-hover:text-gray-200 transition-colors duration-200">
                        {link.name}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {link.description}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h4 className="text-lg font-semibold text-white mb-4">Quick Info</h4>
              <div className="space-y-3 text-gray-400">
                <p className="flex items-center gap-3">
                  <Mail size={16} />
                  <span className="font-mono text-sm">{personalInfo.email}</span>
                </p>
                <p className="text-sm">
                  <strong className="text-white">Response Time:</strong> Usually within 24 hours
                </p>
                <p className="text-sm">
                  <strong className="text-white">Best for:</strong> Project collaborations, coding questions, art commissions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;