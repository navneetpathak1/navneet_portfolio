
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaCode, FaHeart, FaEnvelope } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { useTheme } from '../contexts/ThemeContext'

const Footer = () => {
  const { theme } = useTheme()
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/navneetpathak', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/navneetpathak', label: 'LinkedIn' },
    { icon: SiLeetcode, href: 'https://leetcode.com/navneetpathak', label: 'LeetCode' },
    { icon: FaEnvelope, href: 'mailto:navneetpathak@example.com', label: 'Email' },
  ]

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
  ]

  return (
    <footer className={`transition-colors duration-500 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-800 to-gray-900 text-white' 
        : 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-900'
    }`}>
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold gradient-text">Navneet Pathak</h3>
            <p className={`leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              A passionate Computer Engineering student building scalable systems, 
              lovable UIs, and problem-solving code. Let's create something amazing together!
            </p>
            <div className={`flex items-center space-x-2 text-sm ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              <FaCode />
              <span>Made with React, TypeScript & Tailwind CSS</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className={`text-lg font-semibold ${
              theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
            }`}>Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`transition-colors duration-200 ${
                      theme === 'dark' 
                        ? 'text-gray-300 hover:text-primary' 
                        : 'text-gray-600 hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className={`text-lg font-semibold ${
              theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
            }`}>Let's Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full transition-colors duration-300 ${
                    theme === 'dark' 
                      ? 'bg-gray-700 hover:bg-primary' 
                      : 'bg-gray-300 hover:bg-primary'
                  }`}
                  aria-label={social.label}
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </div>
            <p className={`text-sm ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              Always open to discussing new opportunities and collaborations!
            </p>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center ${
            theme === 'dark' ? 'border-gray-700' : 'border-gray-300'
          }`}
        >
          <div className={`flex items-center space-x-2 mb-4 md:mb-0 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          }`}>
            <span>© 2025 Navneet Pathak. All rights reserved.</span>
          </div>
          <div className={`flex items-center space-x-2 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          }`}>
            <FaHeart className="text-red-500 heartbeat" />
            <span>Built with passion and lots of coffee</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
