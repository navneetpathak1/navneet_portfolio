import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaCode, FaDatabase, FaRocket } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: "Excalidraw Clone",
      period: "Jul 2025 – Aug 2025",
      type: "Solo Project",
      description: "Built a real-time collaborative whiteboard with drawing, writing, and sharing features. Features include real-time collaboration, drawing tools, text editing, and seamless sharing capabilities.",
      tech: ["TypeScript", "Next.js", "Express.js", "PostgreSQL", "Prisma ORM", "WebSockets", "Tailwind", "Monorepo (Turborepo)"],
      github: "https://github.com/navneetpathak/excalidraw-clone",
      live: "#",
      icon: FaCode,
      gradient: "from-coral to-pink-500"
    },
    {
      title: "Secure Payment System",
      period: "Apr 2025 – Aug 2025",
      type: "Solo Project",
      description: "Designed a full-stack payment gateway module with transaction security, rollback, and webhook handling. Includes comprehensive security measures, transaction monitoring, and automated rollback mechanisms.",
      tech: ["Node.js", "Next.js", "Express.js", "Prisma ORM", "PostgreSQL", "Recoil", "NextAuth", "Tailwind", "Monorepo"],
      github: "https://github.com/navneetpathak/secure-payment-system",
      live: "#",
      icon: FaDatabase,
      gradient: "from-teal to-cyan-500"
    },
    {
      title: "Streamify-GPT",
      period: "Jul 2025",
      type: "Solo Project",
      description: "Created a movie streaming + GPT-powered recommendation platform. Integrated multiple APIs for seamless movie discovery and AI-powered personalized recommendations with multilingual support.",
      tech: ["Firebase Auth", "Redux Toolkit", "TMDB API", "OpenAI API", "Multilingual Support"],
      github: "https://github.com/navneetpathak/streamify-gpt",
      live: "#",
      icon: FaRocket,
      gradient: "from-deep-purple to-purple-500"
    }
  ]

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-base-200 to-base-300">
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
            Featured Projects
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-neutral-600 max-w-3xl mx-auto"
          >
            Showcasing my passion for building scalable systems and innovative solutions
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={`bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex`}
            >
              <div className="lg:w-1/2 p-8 lg:p-12">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${project.gradient} text-white`}>
                    <project.icon className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-800">{project.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-neutral-500">
                      <span>{project.period}</span>
                      <span>•</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded-full">
                        {project.type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-8">
                  <h4 className="font-semibold text-neutral-800 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-neutral-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full hover:shadow-lg transition-all duration-300"
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full hover:shadow-lg transition-all duration-300"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>

              <div className="lg:w-1/2 relative">
                <div className={`h-full bg-gradient-to-br ${project.gradient} opacity-90 flex items-center justify-center`}>
                  <div className="text-center text-white p-8">
                    <project.icon className="text-8xl mb-4 opacity-80" />
                    <h4 className="text-2xl font-bold mb-2">{project.title}</h4>
                    <p className="opacity-90">Click to explore the project</p>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full animate-pulse" />
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/30 rounded-full animate-bounce" />
                <div className="absolute top-1/2 left-4 w-4 h-4 bg-white/40 rounded-full animate-ping" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Want to see more projects?
            </h3>
            <p className="text-neutral-600 mb-6">
              Check out my GitHub profile for a complete collection of my work
            </p>
            <motion.a
              href="https://github.com/navneetpathak"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-coral to-teal text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              <FaGithub />
              <span>View All Projects</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
