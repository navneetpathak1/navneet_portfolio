import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import AboutRole from './AboutRole'

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/navneetpathak1', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/navneetpathak1909/', label: 'LinkedIn' },
    { icon: SiLeetcode, href: 'https://leetcode.com/navneetpathak19', label: 'LeetCode' },
  ]

  const floatingShapes = [
    { emoji: '💻', delay: 0, duration: 3 },
    { emoji: '🚀', delay: 1, duration: 4 },
    { emoji: '⚡', delay: 2, duration: 3.5 },
    { emoji: '🎨', delay: 0.5, duration: 4.5 },
    { emoji: '🔥', delay: 1.5, duration: 3.2 },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      
      {/* Floating Shapes */}
      {floatingShapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl opacity-20"
          initial={{ 
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            rotate: 0,
            scale: 0
          }}
          animate={{
            y: [0, -50, 0],
            rotate: [0, 180, 360],
            scale: [0, 1, 0.8, 1],
            x: [0, Math.random() * 50 - 25, 0]
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut"
          }}
        >
          {shape.emoji}
        </motion.div>
      ))}
      
      {/* Glowing Dots */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 1.5, 1],
            opacity: [0, 0.3, 0.8, 0.3],
            x: [0, Math.random() * 20 - 10, 0],
            y: [0, Math.random() * 20 - 10, 0]
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.25, 0.46, 0.45, 0.94],
            scale: { delay: 0.2 }
          }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ 
              duration: 1, 
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 text-shadow-lg"
          >
            Hi, I'm{' '}
            <motion.span 
              className="gradient-text bg-white bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 20px rgba(255,255,255,0.5)",
                transition: { duration: 0.3 }
              }}
            >
              Navneet Pathak
            </motion.span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-white/90 mb-8 text-shadow"
          >
            <AboutRole />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex justify-center space-x-6 mb-12"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30, rotate: -180 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8 + index * 0.1,
                  ease: "backOut"
                }}
                whileHover={{ 
                  scale: 1.3, 
                  rotate: [0, -10, 10, 0],
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.9 }}
                className="text-4xl text-white hover:text-neon-yellow transition-colors duration-300 glow-effect p-3 rounded-full"
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)",
                y: -2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-lg btn-primary text-white border-none glow-effect"
            >
              View My Work
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "white",
                color: "rgb(59, 130, 246)",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-lg btn-outline btn-white text-white hover:bg-white hover:text-primary"
            >
              Download Resume
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ 
            y: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center cursor-pointer"
          whileHover={{ scale: 1.2 }}
        >
          <motion.div
            animate={{ 
              y: [0, 12, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
