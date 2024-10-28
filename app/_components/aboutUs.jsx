'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Check, 
  Globe, 
  Shield, 
  Users, 
  Zap,
  Sparkles, 
  Code,
  ChevronRight
} from 'lucide-react';

const AboutUs = () => {
  const features = [
    {
      icon: <Users className="w-7 h-7" />,
      title: "Real-time Collaboration",
      description: "Work seamlessly with your team in real-time, enabling instant feedback and progress tracking across different time zones.",
      gradient: "from-blue-600 to-indigo-600",
      shadowColor: "shadow-blue-500/30",
      iconBg: "bg-blue-500"
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Intuitive Interface",
      description: "Experience a clean, modern design that makes navigation effortless and enhances your daily workflow.",
      gradient: "from-purple-600 to-pink-600",
      shadowColor: "shadow-purple-500/30",
      iconBg: "bg-purple-500"
    },
    {
      icon: <Check className="w-7 h-7" />,
      title: "Smart Templates",
      description: "Jump-start your projects with our professionally designed templates, fully customizable to match your brand.",
      gradient: "from-emerald-600 to-teal-600",
      shadowColor: "shadow-emerald-500/30",
      iconBg: "bg-emerald-500"
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: "Cross-platform Access",
      description: "Stay productive on any device with our responsive design and native-like performance.",
      gradient: "from-orange-600 to-red-600",
      shadowColor: "shadow-orange-500/30",
      iconBg: "bg-orange-500"
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Enterprise Security",
      description: "Rest easy with bank-level encryption, regular security audits, and compliance with global privacy standards.",
      gradient: "from-cyan-600 to-blue-600",
      shadowColor: "shadow-cyan-500/30",
      iconBg: "bg-cyan-500"
    },
    {
      icon: <Code className="w-7 h-7" />,
      title: "Advanced API Integration",
      description: "Leverage our powerful API ecosystem to build custom integrations and extend functionality to meet your unique needs.",
      gradient: "from-violet-600 to-purple-600",
      shadowColor: "shadow-violet-500/30",
      iconBg: "bg-violet-500"
    }
  ];

  const stats = [
    { 
      label: "Project Timeline", 
      value: "2 months",
      description: "From concept to completion",
      gradient: "from-blue-600 to-indigo-600"
    },
    { 
      label: "Technologies Used", 
      value: "10+",
      description: "Modern tech stack",
      gradient: "from-purple-600 to-pink-600"
    },
    { 
      label: "Features", 
      value: "15+",
      description: "Unique functionalities",
      gradient: "from-emerald-600 to-teal-600"
    },
    { 
      label: "Code Quality", 
      value: "A+",
      description: "Clean & efficient",
      gradient: "from-orange-600 to-red-600"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gray-50">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-purple-50" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-96 bg-gradient-to-br from-blue-100/40 to-indigo-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[1000px] h-96 bg-gradient-to-tr from-purple-100/30 to-pink-100/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-[800px] h-96 bg-gradient-to-tl from-emerald-100/30 to-cyan-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Enhanced Hero Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {/* <div className="inline-flex items-center justify-center p-2 rounded-full bg-white shadow-xl shadow-blue-500/20 mb-8">
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-medium">
                  Welcome to the Future of Collaboration
                </span>
              </div> */}
              <h1 className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 leading-tight">
                Transforming
                <br />
                Collaboration
              </h1>
              <div className="mt-8 space-y-6 text-center max-w-3xl mx-auto">
                <p className="text-xl text-gray-600 leading-relaxed">
                  Welcome to <span className="font-semibold text-blue-600">Collabio</span>, 
                  where innovation meets simplicity. Developed by 
                  <span className="font-semibold text-blue-600"> Sachin Mhetre</span>, 
                  this project showcases the future of digital collaboration.
                </p>
              </div>
            </motion.div>

            {/* Enhanced Stats Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="relative group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className={`text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${stat.gradient}`}>
                      {stat.value}
                    </div>
                    <div className="mt-2 text-sm font-medium text-gray-900">
                      {stat.label}
                    </div>
                    <div className="mt-1 text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {stat.description}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Enhanced Features Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-32"
            >
              <h3 className="text-4xl font-bold text-center text-gray-900 mb-16">
                Why Choose Collabio
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    key={index}
                    className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
                  >
                    {/* Gradient corners */}
                    <div className={`absolute top-0 left-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-5 rounded-br-[100%] transition-all duration-500 group-hover:scale-150`} />
                    <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${feature.gradient} opacity-5 rounded-tl-[100%] transition-all duration-500 group-hover:scale-150`} />
                    
                    <div className="relative z-10">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.gradient} text-white transform transition-transform group-hover:scale-110 ${feature.shadowColor}`}>
                            {feature.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center group-hover:text-transparent bg-clip-text bg-gradient-to-r group-hover:bg-gradient-to-r transition-all duration-300 transform">
                            {feature.title}
                            <ArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                          </h4>
                          <p className="text-gray-600 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Bottom CTA Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-32 text-center"
            >
              <div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10">
                <Sparkles className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="mt-6 text-3xl font-semibold text-gray-900">Ready to explore Collabio?</h4>
              <p className="mt-3 text-lg text-gray-600">Experience the next generation of collaboration tools</p>
              <div className="mt-8">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transform hover:-translate-y-0.5 transition-all duration-300">
                  Get Started Now
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;