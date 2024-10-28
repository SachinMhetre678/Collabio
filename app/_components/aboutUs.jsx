'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Globe, Shield, Users, Zap } from 'lucide-react';

const AboutUs = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Real-time Collaboration",
      description: "Work seamlessly with your team in real-time, enabling instant feedback and progress tracking across different time zones.",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Intuitive Interface",
      description: "Experience a clean, modern design that makes navigation effortless and enhances your daily workflow.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Check className="w-6 h-6" />,
      title: "Smart Templates",
      description: "Jump-start your projects with our professionally designed templates, fully customizable to match your brand.",
      gradient: "from-teal-500 to-emerald-500"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Cross-platform Access",
      description: "Stay productive on any device with our responsive design and native-like performance.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Rest easy with bank-level encryption, regular security audits, and compliance with global privacy standards.",
      gradient: "from-blue-500 to-cyan-500"
    }
  ];

  const stats = [
    { 
      label: "Project Timeline", 
      value: "3 months",
      description: "From concept to completion" 
    },
    { 
      label: "Technologies Used", 
      value: "10+",
      description: "Modern tech stack" 
    },
    { 
      label: "Features", 
      value: "15+",
      description: "Unique functionalities" 
    },
    { 
      label: "Code Quality", 
      value: "A+",
      description: "Clean & efficient" 
    }
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-64 bg-gradient-to-br from-blue-100/30 to-indigo-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[800px] h-64 bg-gradient-to-tr from-purple-100/20 to-pink-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Hero Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                Transforming Collaboration
              </h2>
              <div className="mt-8 space-y-6 text-center max-w-3xl mx-auto">
                <p className="text-xl text-gray-600 leading-relaxed">
                  Welcome to <span className="font-semibold text-blue-600">Collabio</span>, 
                  where innovation meets simplicity. Developed by 
                  <span className="font-semibold text-blue-600"> Sachin Mhetre</span>, 
                  this project showcases the future of digital collaboration.
                </p>
              </div>
            </motion.div>

            {/* Stats Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm font-medium text-gray-900">
                    {stat.label}
                  </div>
                  <div className="mt-1 text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {stat.description}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Features Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-24"
            >
              <h3 className="text-4xl font-bold text-center text-gray-900 mb-16">
                Why Choose Collabio
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    key={index}
                    className="group relative bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100"
                  >
                    {/* Gradient corners */}
                    <div className={`absolute top-0 left-0 w-24 h-24 bg-gradient-to-br ${feature.gradient} opacity-5 rounded-br-[100%]`} />
                    <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${feature.gradient} opacity-5 rounded-tl-[100%]`} />
                    
                    <div className="flex items-start space-x-4 relative">
                      <div className="flex-shrink-0">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.gradient} text-white transform transition-transform group-hover:scale-110 shadow-lg`}>
                          {feature.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center group-hover:text-blue-600 transition-colors">
                          {feature.title}
                          <ArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Bottom CTA Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-24 text-center"
            >
              <div className="inline-flex items-center justify-center p-6 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10">
                <span className="text-3xl">✨</span>
              </div>
              <h4 className="mt-6 text-2xl font-semibold text-gray-900">Ready to explore Collabio?</h4>
              <p className="mt-3 text-gray-600">Experience the next generation of collaboration tools</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;