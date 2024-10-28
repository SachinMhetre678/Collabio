"use client"

import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '../../components/ui/button';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#about", label: "About Us" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="relative flex items-center justify-between h-16 lg:h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Logo className="h-8 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary transition-colors duration-200 py-2 px-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <Button
              variant="ghost"
              className="text-gray-700 dark:text-gray-200 hover:text-primary transition-colors duration-200"
            >
              Sign In
            </Button>
            <Button
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 py-2 transition-all duration-200 transform hover:scale-105 active:scale-95"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-700 dark:text-gray-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`
              lg:hidden absolute top-full left-0 right-0 
              transition-all duration-300 ease-in-out transform
              ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
              bg-white dark:bg-gray-900 shadow-lg rounded-b-2xl
              border-t dark:border-gray-800
            `}
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="space-y-2 pt-4 border-t dark:border-gray-800">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-700 dark:text-gray-200"
                >
                  Sign In
                </Button>
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;