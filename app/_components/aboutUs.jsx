'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { 
  ArrowRight, 
  Check, 
  Globe, 
  Shield, 
  Users, 
  Zap,
  Sparkles, 
  Code,
  ChevronRight,
  MousePointer
} from 'lucide-react';

// Separate the AnimatedCounter into its own component
const AnimatedCounter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    const incrementTime = (duration * 1000) / end;
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);
  
  return count;
};

// Separate FeatureCard component
const FeatureCard = ({ feature, index }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9,
      rotateX: -15
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
    >
      <div className={`absolute top-0 left-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-5 rounded-br-[100%] transition-all duration-500 group-hover:scale-[2]`} />
      <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${feature.gradient} opacity-5 rounded-tl-[100%] transition-all duration-500 group-hover:scale-[2]`} />
      
      <div className="relative z-10">
        <motion.div 
          className="flex items-start space-x-4"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.gradient} text-white transform transition-transform group-hover:scale-110 ${feature.shadowColor}`}>
              {feature.icon}
            </div>
          </motion.div>
          <div className="flex-1">
            <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center group-hover:text-transparent bg-clip-text bg-gradient-to-r group-hover:bg-gradient-to-r transition-all duration-300">
              {feature.title}
              <motion.div
                initial={{ x: -10, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="ml-2 w-4 h-4" />
              </motion.div>
            </h4>
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Separate StatCard component
const StatCard = ({ stat }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div 
      ref={ref}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      whileHover={{ scale: 1.05 }}
      className="relative group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
      <div className="relative z-10">
        <div className={`text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${stat.gradient}`}>
          {isInView ? <AnimatedCounter value={stat.value.replace(/\D/g, '')} /> : 0}
          {stat.value.replace(/\d/g, '')}
        </div>
        <div className="mt-2 text-sm font-medium text-gray-900">
          {stat.label}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="mt-1 text-xs text-gray-600"
        >
          {stat.description}
        </motion.div>
      </div>
    </motion.div>
  );
};

const AboutUs = () => {
  const { scrollYProgress } = useScroll();
  const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
    <section className="relative overflow-hidden bg-gray-50 min-h-screen">
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-purple-50"
        style={{
          backgroundPosition: `${mousePosition.x / 20}px ${mousePosition.y / 20}px`
        }}
      />
      
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform-origin-left"
        style={{ scaleX: springScroll }}
      />

      <div className="relative py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              className="text-center"
            >
              <motion.h1 
                className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 leading-tight"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Transforming
                <br />
                Collaboration
              </motion.h1>
              
              <motion.div 
                className="mt-8 space-y-6 text-center max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-xl text-gray-600 leading-relaxed">
                  Welcome to <span className="font-semibold text-blue-600">Collabio</span>, 
                  where innovation meets simplicity. Developed by 
                  <span className="font-semibold text-blue-600"> Sachin Mhetre</span>, 
                  this project showcases the future of digital collaboration.
                </p>
              </motion.div>
            </motion.div>

            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <StatCard key={index} stat={stat} />
              ))}
            </div>

            <motion.div 
              className="mt-32"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <motion.h3 
                className="text-4xl font-bold text-center text-gray-900 mb-16"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                Why Choose Collabio
              </motion.h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <FeatureCard key={index} feature={feature} index={index} />
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="mt-32 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <motion.div 
                className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10"
                whileHover={{ scale: 1.1, rotate: 180 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <Sparkles className="w-8 h-8 text-blue-600" />
              </motion.div>
              
              <motion.button
                className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transform hover:-translate-y-0.5 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href='/dashboard'>Get Started</a>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;