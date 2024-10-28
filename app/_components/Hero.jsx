'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Heart, DollarSign } from 'lucide-react';

function Hero() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "The lowest price",
      description: "Unlock exceptional value with our cost-effective solutions.",
      gradient: "from-green-400 to-emerald-600"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "The fastest on the market",
      description: "Accelerate your workflow with our streamlined tools.",
      gradient: "from-blue-400 to-indigo-600"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "The most loved",
      description: "Join a community that values collaboration and creativity.",
      gradient: "from-purple-400 to-pink-600"
    }
  ];

  return (
    <div className="relative min-h-screen flex items-center" id="home">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-primary/20 to-purple-400/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-cyan-400/20 to-sky-300/20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>
      </div>

      <div className="relative w-full">
        <div className="relative pt-20 pb-16 sm:pt-30 sm:pb-24">
          <div className="lg:w-3/4 max-w-6xl mx-auto px-4">
            {/* Main Content */}
            <motion.div 
              className="text-center"
              initial="initial"
              animate="animate"
              variants={fadeIn}
            >
              {/* Decorative element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex mb-8 p-2 bg-white/5 backdrop-blur-xl rounded-full border border-gray-200/20 shadow-lg"
              >
                <div className="px-4 py-1 rounded-full bg-gradient-to-r from-primary/80 to-purple-600/80 text-white text-sm font-medium flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Welcome to the Future of Collaboration</span>
                </div>
              </motion.div>

              <motion.h1 
                className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Collabio is where{' '}
                <span className="relative">
                  <span className="relative inline-block text-primary dark:text-white">
                    collaboration thrives
                    <div className="absolute bottom-0 left-0 w-full h-2 bg-primary/20 dark:bg-white/20 rounded-full transform -rotate-1"></div>
                  </span>
                  .
                </span>
              </motion.h1>

              <motion.p 
                className="mt-8 text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Collabio is an innovative workspace designed for teams to create, share, and collaborate on projects effortlessly. Our platform integrates flexible pages with reusable components, ensuring that your team stays organized and in sync across all applications.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <a
                  href="/dashboard"
                  className="group relative flex h-12 items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                >
                  <span className="relative flex items-center gap-2 text-base font-semibold text-white">
                    Get started
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
                <a
                  href="#"
                  className="group relative flex h-12 items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
                >
                  <span className="relative flex items-center gap-2 text-base font-semibold text-primary dark:text-white">
                    Learn more
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </motion.div>

              {/* Features Section */}
              <motion.div 
                className="hidden sm:block mt-24 border-t border-gray-100 dark:border-gray-800 pt-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="grid grid-cols-3 gap-8">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 * index }}
                      className="group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                    >
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-white mb-4`}>
                        {feature.icon}
                      </div>
                      <h6 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {feature.title}
                      </h6>
                      <p className="text-gray-600 dark:text-gray-400">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;