import React from 'react'
import { motion } from 'framer-motion'
import { FaTrophy, FaGraduationCap, FaLightbulb, FaFire, FaCode, FaHeart } from 'react-icons/fa'

const Achievements = () => {
  const achievements = [
    {
      icon: FaTrophy,
      title: "The Neural Nexus Hackathon",
      description: "Top 16 Finalist (out of 200+ teams)",
      color: "from-yellow-400 to-yellow-600",
      emoji: "🏆"
    },
    {
      icon: FaGraduationCap,
      title: "Amazon ML Summer School 2025",
      description: "Selected for prestigious ML program",
      color: "from-blue-500 to-blue-700",
      emoji: "🎓"
    },
    {
      icon: FaLightbulb,
      title: "System-Level Projects",
      description: "Loves building monorepos, concurrency, compiler design",
      color: "from-purple-500 to-purple-700",
      emoji: "💡"
    },
    {
      icon: FaFire,
      title: "Coffee to Code",
      description: "Can turn coffee into code and bugs into features",
      color: "from-red-500 to-red-700",
      emoji: "🔥"
    }
  ]

  const funFacts = [
    "Solves 3+ LeetCode problems daily",
    "Built 50+ projects in 3 years",
    "Loves debugging at 3 AM",
    "Prefers dark mode everything",
    "Can code while listening to lofi beats",
    "Believes in clean code over clever code"
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
    <section id="achievements" className="section-padding bg-white">
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
            Achievements & Fun Facts
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-neutral-600 max-w-3xl mx-auto"
          >
            Milestones, recognition, and the quirky side of a developer's life
          </motion.p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${achievement.color} text-white`}>
                  <achievement.icon className="text-2xl" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-2xl">{achievement.emoji}</span>
                    <h3 className="text-xl font-bold text-neutral-800">
                      {achievement.title}
                    </h3>
                  </div>
                  <p className="text-neutral-600">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Fun Facts Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 lg:p-12"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <FaHeart className="text-3xl text-primary heartbeat" />
              <h3 className="text-3xl font-bold gradient-text">
                Fun Facts About Me
              </h3>
              <FaCode className="text-3xl text-secondary" />
            </div>
            <p className="text-lg text-neutral-600">
              The quirky and interesting side of a developer's journey
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-coral to-teal rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-neutral-700 font-medium">{fact}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Motivational Quote */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-coral to-teal rounded-2xl p-8 text-white"
          >
            <blockquote className="text-2xl md:text-3xl font-bold mb-4 italic">
              "Code is like humor. When you have to explain it, it's bad."
            </blockquote>
            <cite className="text-lg opacity-90">- Cory House (and every developer ever)</cite>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
