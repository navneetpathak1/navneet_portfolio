import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaCode, FaHeart, FaEnvelope } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

const Footer = () => {
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
    <footer className="bg-gradient-to-br from-neutral-800 to-neutral-900 text-white">
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
            <p className="text-neutral-300 leading-relaxed">
              A passionate Computer Engineering student building scalable systems, 
              lovable UIs, and problem-solving code. Let's create something amazing together!
            </p>
            <div className="flex items-center space-x-2 text-sm text-neutral-400">
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
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-primary transition-colors duration-200"
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
            <h4 className="text-lg font-semibold">Let's Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-neutral-700 rounded-full hover:bg-primary transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-neutral-400">
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
          className="border-t border-neutral-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center space-x-2 text-neutral-400 mb-4 md:mb-0">
            <span>© 2025 Navneet Pathak. All rights reserved.</span>
          </div>
          <div className="flex items-center space-x-2 text-neutral-400">
            <FaHeart className="text-red-500 heartbeat" />
            <span>Built with passion and lots of coffee</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
