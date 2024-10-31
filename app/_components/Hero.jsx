'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Heart, DollarSign, MousePointer2 } from 'lucide-react';

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const { scrollY } = useScroll();
  
  const y = useMotionValue(0);
  const smoothY = useSpring(y, { damping: 15, stiffness: 100 });
  
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.8]);
  const headerScale = useTransform(scrollY, [0, 100], [1, 0.95]);

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

  // Animated background follow mouse effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animated words for the header
  const words = ["collaboration", "innovation", "creativity"];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden" id="home">
      {/* Dynamic Background */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.1) 0%, rgba(79, 70, 229, 0.05) 40%, transparent 60%)`
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Floating Elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/10 to-purple-400/10 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 270, 180, 90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-l from-cyan-400/10 to-sky-300/10 rounded-full blur-3xl"
        />
      </motion.div>

      <div className="relative w-full">
        <motion.div 
          className="relative pt-20 pb-16 sm:pt-30 sm:pb-24"
          style={{ opacity: headerOpacity, scale: headerScale }}
        >
          <div className="lg:w-3/4 max-w-6xl mx-auto px-4">
            {/* Main Content */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Animated Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -10, 0]
                }}
                transition={{
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                className="inline-flex mb-8 p-2 bg-white/5 backdrop-blur-xl rounded-full border border-gray-200/20 shadow-lg"
              >
                <div className="px-4 py-1 rounded-full bg-gradient-to-r from-primary/80 to-purple-600/80 text-white text-sm font-medium flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Welcome to the Future of Collaboration</span>
                </div>
              </motion.div>

              {/* Animated Header */}
              <motion.h1 
                className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Collabio is where{' '}
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWord}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="relative inline-block text-primary dark:text-white"
                  >
                    {words[currentWord]} thrives
                    <motion.div 
                      className="absolute bottom-0 left-0 w-full h-2 bg-primary/20 dark:bg-white/20 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8 }}
                    />
                  </motion.span>
                </AnimatePresence>
              </motion.h1>

              {/* Interactive CTA Buttons */}
              <motion.div 
                className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.a
                  href="/dashboard"
                  className="group relative flex h-12 items-center justify-center px-8 overflow-hidden rounded-full bg-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span 
                    className="absolute inset-0 bg-white"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ borderRadius: '9999px' }}
                  />
                  <span className="relative flex items-center gap-2 text-base font-semibold text-white group-hover:text-primary">
                    Get started
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </span>
                </motion.a>
              </motion.div>

              {/* Animated Features Grid */}
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
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                      className="group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                    >
                      <motion.div 
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient}`}
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 0.1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div 
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-white mb-4`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {feature.icon}
                      </motion.div>
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
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;