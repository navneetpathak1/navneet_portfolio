import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'

const Skills = () => {
  const { theme } = useTheme()
  const skillCategories = [
    {
      title: "Languages",
      color: "from-coral to-pink-500",
      skills: ["C", "C++", "JavaScript", "TypeScript", "SQL"]
    },
    {
      title: "Frontend",
      color: "from-teal to-cyan-500",
      skills: ["ReactJS", "Next.js", "Redux", "Tailwind CSS", "DaisyUI", "HTML", "CSS"]
    },
    {
      title: "Backend",
      color: "from-deep-purple to-purple-500",
      skills: ["Node.js", "Express.js", "REST APIs", "WebSockets", "NextAuth"]
    },
    {
      title: "Databases",
      color: "from-neon-yellow to-yellow-500",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Prisma ORM", "NoSQL"]
    },
    {
      title: "DevOps & Tools",
      color: "from-green-400 to-green-600",
      skills: ["Git", "GitHub", "Docker", "NPM", "pnpm", "Turborepo", "Postman", "API Testing", "AWS"]
    },
    {
      title: "Core Concepts",
      color: "from-indigo-500 to-indigo-700",
      skills: ["Data Structures & Algorithms", "OOPs", "DBMS", "System Design", "Monorepo Architecture"]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  return (
    <section id="skills" className={`section-padding transition-colors duration-500 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`}>
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
            Skills & Technologies
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
            }`}
          >
            A comprehensive toolkit for building modern, scalable applications
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className={`rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
                  : 'bg-gradient-to-br from-white to-gray-50 border border-gray-100'
              }`}
            >
              <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${category.color} text-white font-semibold mb-6`}>
                {category.title}
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.1 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="flex items-center space-x-3"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                    <span className={`font-medium ${
                      theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                    }`}>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Level Indicators */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-center gradient-text mb-12"
          >
            Expertise Levels
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { skill: "JavaScript/TypeScript", level: 95 },
              { skill: "React/Next.js", level: 90 },
              { skill: "Node.js/Express", level: 85 },
              { skill: "Database Design", level: 80 },
              { skill: "System Design", level: 75 },
              { skill: "DevOps/Docker", level: 70 }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className={`font-semibold ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                  }`}>{item.skill}</span>
                  <span className={`text-sm ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>{item.level}%</span>
                </div>
                <div className={`w-full rounded-full h-3 ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                }`}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    className="h-3 rounded-full bg-gradient-to-r from-coral to-teal"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
