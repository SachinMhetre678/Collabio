"use client"

import React, { useState } from 'react';
import { Github, Mail, Globe, Linkedin, Twitter, ArrowUpRight, ExternalLink, Check, Loader2 } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Alert, AlertDescription } from '../../components/ui/alert';

function Contact() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const contactLinks = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "sachinmhetre678@gmail.com",
      href: "mailto:sachinmhetre678@gmail.com",
      description: "Drop me an email anytime",
      color: "from-pink-500/20 to-red-500/20"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "SachinMhetre678",
      href: "https://github.com/SachinMhetre678",
      description: "Check out my projects work",
      color: "from-purple-500/20 to-indigo-500/20"
    },
    {
      icon: <Globe className="h-5 w-5" />,
      label: "Portfolio",
      value: "sachinmhetre.vercel.app",
      href: "https://sachinmhetre.vercel.app",
      description: "Explore my portfolio",
      color: "from-blue-500/20 to-cyan-500/20"
    }
  ];

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/SachinMhetre678", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/sachin-mhetre-382039233/", label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, href: "https://x.com/Sachin_Mhetre_", label: "Twitter" }
  ];

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setShowSuccess(true);
    setEmail('');
    
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <footer id="contact" className="relative bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-indigo-500/5 to-purple-500/5 blur-3xl animate-pulse" />
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-500/5 to-cyan-500/5 blur-3xl animate-pulse delay-1000" />
        </div>

        {/* Main content */}
        <div className="text-center mb-16 transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
            Get in Touch
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Have a project in mind? Let's collaborate and build something amazing together.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {contactLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl bg-white dark:bg-slate-800/50 p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-200 dark:border-slate-700 overflow-hidden"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative flex flex-col gap-4 transform group-hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center gap-3">
                  <div className="text-indigo-500 dark:text-indigo-400 transform group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {link.label}
                  </h3>
                  <ExternalLink 
                    className={`h-4 w-4 text-slate-400 dark:text-slate-500 ml-auto transform transition-all duration-300
                      ${hoveredCard === index ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 -translate-x-2 rotate-45'}`}
                  />
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
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 rounded-3xl p-8 mb-16 transform hover:scale-[1.02] transition-transform duration-300">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
              Stay Connected
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Subscribe to receive updates about my latest work and tech articles.
            </p>
          </div>
          <form className="flex gap-3" onSubmit={handleSubscribe}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
            />
            <Button 
              disabled={isSubmitting} 
              className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl px-6 relative overflow-hidden group"
            >
              <span className={`flex items-center gap-2 transition-all duration-300 ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                Subscribe
                <ArrowUpRight className="h-4 w-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
              {isSubmitting && (
                <Loader2 className="h-5 w-5 animate-spin absolute inset-0 m-auto" />
              )}
            </Button>
          </form>

          {/* Success message */}
          {showSuccess && (
            <Alert className="mt-4 bg-green-500/10 text-green-500 border-green-500/20">
              <Check className="h-4 w-4" />
              <AlertDescription>
                Successfully subscribed! Thank you for joining.
              </AlertDescription>
            </Alert>
          )}
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
                className="group p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-all duration-300"
              >
                <div className="transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  {link.icon}
                </div>
                <span className="sr-only">{link.label}</span>
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