import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import AboutRole from './AboutRole'
import { useTheme } from '../contexts/ThemeContext'

const Hero = () => {
  const { theme } = useTheme()
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
    <section id="home" className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-500 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50'
    }`}>
      
      {/* Floating Shapes */}
      {floatingShapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute text-2xl sm:text-3xl md:text-4xl opacity-20"
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
          className={`absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full opacity-30 ${
            theme === 'dark' ? 'bg-white' : 'bg-gray-600'
          }`}
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

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
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
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Hi, I'm{' '}
            <motion.span 
              className={`${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'
              }`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ 
                scale: 1.05,
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
            className={`text-xl md:text-2xl mb-8 text-shadow ${
              theme === 'dark' ? 'text-white/90' : 'text-gray-800/90'
            }`}
          >
            <AboutRole />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex justify-center space-x-4 sm:space-x-6 mb-8 sm:mb-12"
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
                className={`text-2xl sm:text-3xl md:text-4xl transition-colors duration-300 p-2 sm:p-3 rounded-full ${
                  theme === 'dark'
                    ? 'text-white hover:text-yellow-400'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto"
          >
            <motion.button
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              whileHover={{ 
                scale: 1.05,
                y: -2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ 
                scale: 1.05,
                y: -2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 sm:px-8 sm:py-4 font-semibold rounded-lg transition-all duration-300 border-2 ${
                theme === 'dark'
                  ? 'border-white text-white hover:bg-white hover:text-gray-900'
                  : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
              }`}
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
          className={`w-6 h-10 border-2 rounded-full flex justify-center cursor-pointer ${
            theme === 'dark' ? 'border-white' : 'border-gray-600'
          }`}
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
            className={`w-1 h-3 rounded-full mt-2 ${
              theme === 'dark' ? 'bg-white' : 'bg-gray-600'
            }`}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
