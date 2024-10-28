"use client"

import React from 'react';
import { Github, Mail, Globe, Linkedin, Twitter, ArrowUpRight, ExternalLink } from 'lucide-react';
import { Button } from '../../components/ui/button';

function Contact() {
  const contactLinks = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "sachinmhetre678@gmail.com",
      href: "mailto:sachinmhetre678@gmail.com",
      description: "Drop me an email anytime"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "SachinMhetre678",
      href: "https://github.com/SachinMhetre678",
      description: "Check out my projects work"
    },
    {
      icon: <Globe className="h-5 w-5" />,
      label: "Portfolio",
      value: "sachinmhetre.vercel.app",
      href: "https://sachinmhetre.vercel.app",
      description: "Explore my portfolio"
    }
  ];

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/SachinMhetre678" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/sachin-mhetre-382039233/" },
    { icon: <Twitter className="h-5 w-5" />, href: "https://x.com/Sachin_Mhetre_" }
  ];

  return (
    <footer id="contact" className="relative bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main content */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Have a project in mind? Let's collaborate and build something amazing together.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl bg-white dark:bg-slate-800 p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 dark:border-slate-700"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="text-indigo-500 dark:text-indigo-400">
                    {link.icon}
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {link.label}
                  </h3>
                  <ExternalLink className="h-4 w-4 text-slate-400 dark:text-slate-500 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                  <p className="text-slate-900 dark:text-white font-medium mb-1">
                    {link.value}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {link.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Newsletter section */}
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 rounded-3xl p-8 mb-16">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
              Stay Connected
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Subscribe to receive updates about my latest work and tech articles.
            </p>
          </div>
          <form className="flex gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
            />
            <Button className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl px-6">
              Subscribe
            </Button>
          </form>
        </div>

        {/* Social links */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-all duration-200"
              >
                {link.icon}
              </a>
            ))}
          </div>
          <div className="text-center">
            <p className="text-slate-500 dark:text-slate-400">
              © {new Date().getFullYear()} Sachin Mhetre. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contact;