import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaCode, FaHeart, FaRocket } from 'react-icons/fa'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const highlights = [
    {
      icon: FaGraduationCap,
      title: "Computer Engineering Student",
      description: "B.Tech at Graphic Era Hill University, graduating 2026"
    },
    {
      icon: FaCode,
      title: "Full-Stack Developer",
      description: "Passionate about algorithms, system design, and clean code"
    },
    {
      icon: FaHeart,
      title: "Open Source Contributor",
      description: "Active on GitHub, LinkedIn, and LeetCode building amazing projects"
    },
    {
      icon: FaRocket,
      title: "Problem Solver",
      description: "Loves turning abstract ideas into scalable software solutions"
    }
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-base-200 to-base-300">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold gradient-text mb-6"
          >
            About Me
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-neutral-600 max-w-3xl mx-auto"
          >
            A passionate developer who blends technical depth with creativity
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg text-neutral-700 leading-relaxed"
            >
              Hey there! I'm <span className="font-semibold text-primary">Navneet Pathak</span>, 
              a Computer Engineering student at Graphic Era Hill University, passionate about 
              creating digital experiences that matter.
            </motion.p>
            
            <motion.p
              variants={itemVariants}
              className="text-lg text-neutral-700 leading-relaxed"
            >
              I'm deeply passionate about <span className="font-semibold text-secondary">full-stack development</span>, 
              algorithms, and system design. You'll find me actively contributing to open-source projects 
              on GitHub, networking on LinkedIn, and solving complex coding challenges on LeetCode.
            </motion.p>
            
            <motion.p
              variants={itemVariants}
              className="text-lg text-neutral-700 leading-relaxed"
            >
              What drives me is the ability to turn <span className="font-semibold text-accent">abstract ideas 
              into scalable software</span> with clean, type-safe, and maintainable code. I believe in 
              building not just functional applications, but lovable experiences that users enjoy.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl text-primary mb-4">
                  <highlight.icon />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-neutral-800">
                  {highlight.title}
                </h3>
                <p className="text-sm text-neutral-600">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Fun Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "50+", label: "Projects Built" },
            { number: "1000+", label: "LeetCode Problems" },
            { number: "3+", label: "Years Coding" },
            { number: "∞", label: "Cups of Coffee" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-neutral-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
