import  { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaCode, FaDatabase, FaRocket, FaShareAlt, FaUtensils, FaLanguage, FaComments } from 'react-icons/fa'
import { useTheme } from '../contexts/ThemeContext'

const Projects = () => {
  const { theme } = useTheme()
  const [showMore, setShowMore] = useState(false)
  
  const featuredProjects = [
    {
      title: "Excalidraw Clone",
      period: "Jul 2025 – Aug 2025",
      type: "Solo Project",
      description: "Built a real-time collaborative whiteboard with drawing, writing, and sharing features. Features include real-time collaboration, drawing tools, text editing, and seamless sharing capabilities.",
      tech: ["TypeScript", "Next.js", "Express.js", "PostgreSQL", "Prisma ORM", "WebSockets", "Tailwind", "Monorepo (Turborepo)"],
      github: "https://github.com/navneetpathak1/Excalidrow",
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
      github: "https://github.com/navneetpathak1/Secure_Payment_System",
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
      github: "https://github.com/navneetpathak1/Streamify-GPT",
      live: "#",
      icon: FaRocket,
      gradient: "from-deep-purple to-purple-500"
    }
  ]

  const additionalProjects = [
    {
      title: "Brain Share App",
      period: "2024",
      type: "Full Stack",
      description: "A MERN-stack app for creating and sharing curated content collections from YouTube and Twitter. Features secure authentication, content organization, and shareable public links.",
      tech: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt", "Tailwind CSS", "Axios"],
      github: "https://github.com/navneetpathak1/Brainly",
      live: "#",
      icon: FaShareAlt,
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "Food Villa",
      period: "2024",
      type: "Frontend",
      description: "A modern food-ordering SPA inspired by Swiggy, built with clean architecture and full test coverage. Features restaurant listing, real-time search, and Redux state management.",
      tech: ["React", "Redux Toolkit", "React Router", "Tailwind CSS", "Jest", "React Testing Library", "Custom Hooks"],
      github: "https://github.com/navneetpathak1/Food-Ordering-App-React-",
      live: "#",
      icon: FaUtensils,
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Gehu Programming Language",
      period: "2024",
      type: "Compiler Design",
      description: "A custom-built programming language with a fully working compiler in C++ using LLVM. Features full compiler pipeline from lexical analysis to native code generation.",
      tech: ["C++17", "LLVM", "CMake", "Compiler Design", "AST", "Type Checking", "Code Generation"],
      github: "https://github.com/navneetpathak1/Compiler-Project",
      live: "#",
      icon: FaLanguage,
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "LiveLine Chat App",
      period: "2024",
      type: "Real-time App",
      description: "A sleek real-time chat application with modern design and built-in money transfer features. Features glassmorphism UI, WebSocket communication, and secure authentication.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT", "Tailwind CSS", "WebSockets"],
      github: "https://github.com/navneetpathak1/Pulse_Messing_Engine",
      live: "#",
      icon: FaComments,
      gradient: "from-purple-500 to-pink-500"
    }
  ]

  // const allProjects = [...featuredProjects, ...additionalProjects]

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
    <section id="projects" className={`section-padding transition-colors duration-500 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-gray-100 to-gray-200'
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
            Featured Projects
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-neutral-600'
            }`}
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
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={`rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                theme === 'dark' 
                  ? 'bg-gray-800 border border-gray-700' 
                  : 'bg-white'
              } ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex`}
            >
              <div className="lg:w-1/2 p-8 lg:p-12">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${project.gradient} text-white`}>
                    <project.icon className="text-2xl" />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${
                      theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
                    }`}>{project.title}</h3>
                    <div className={`flex items-center space-x-4 text-sm ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      <span>{project.period}</span>
                      <span>•</span>
                      <span className={`px-2 py-1 rounded-full ${
                        theme === 'dark' 
                          ? 'bg-blue-500/30 text-blue-300' 
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {project.type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className={`mb-6 leading-relaxed ${
                  theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                }`}>
                  {project.description}
                </p>

                <div className="mb-8">
                  <h4 className={`font-semibold mb-3 ${
                    theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
                  }`}>Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          theme === 'dark'
                            ? 'bg-gray-600 text-gray-100'
                            : 'bg-gray-200 text-gray-800'
                        }`}
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
                    className={`flex items-center space-x-2 px-6 py-3 text-white rounded-full hover:shadow-lg transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-gradient-to-r from-gray-600 to-gray-700'
                        : 'bg-gradient-to-r from-gray-700 to-gray-800'
                    }`}
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </motion.a>
                  {/* <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full hover:shadow-lg transition-all duration-300"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </motion.a> */}
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

        {/* See More Projects Button */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            variants={itemVariants}
            onClick={() => setShowMore(!showMore)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-gray-700 to-gray-800 text-white hover:from-gray-600 hover:to-gray-700'
                : 'bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-700 hover:to-gray-800'
            } shadow-lg hover:shadow-xl`}
          >
            {showMore ? 'Show Less Projects' : 'See More Projects'}
          </motion.button>
        </motion.div>

        {/* Additional Projects */}
        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-12"
            >
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl font-bold gradient-text text-center mb-12"
              >
                More Projects
              </motion.h3>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {additionalProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className={`rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                      theme === 'dark' 
                        ? 'bg-gray-800 border border-gray-700' 
                        : 'bg-white'
                    }`}
                  >
                    <div className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white`}>
                          <project.icon className="text-xl" />
                        </div>
                        <div>
                          <h4 className={`text-xl font-bold ${
                            theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
                          }`}>{project.title}</h4>
                          <div className={`flex items-center space-x-2 text-sm ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            <span>{project.period}</span>
                            <span>•</span>
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              theme === 'dark' 
                                ? 'bg-blue-500/30 text-blue-300' 
                                : 'bg-blue-100 text-blue-700'
                            }`}>
                              {project.type}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className={`mb-4 text-sm leading-relaxed ${
                        theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                      }`}>
                        {project.description}
                      </p>

                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {project.tech.slice(0, 4).map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                theme === 'dark'
                                  ? 'bg-gray-600 text-gray-100'
                                  : 'bg-gray-200 text-gray-800'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 4 && (
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              theme === 'dark'
                                ? 'bg-gray-600 text-gray-100'
                                : 'bg-gray-200 text-gray-800'
                            }`}>
                              +{project.tech.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex space-x-3">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`flex items-center space-x-2 px-4 py-2 text-white rounded-lg text-sm font-medium transition-all duration-300 ${
                            theme === 'dark'
                              ? 'bg-gradient-to-r from-gray-500 to-gray-600'
                              : 'bg-gradient-to-r from-gray-600 to-gray-700'
                          }`}
                        >
                          <FaGithub className="text-sm" />
                          <span>Code</span>
                        </motion.a>
                        {/* <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300"
                        >
                          <FaExternalLinkAlt className="text-sm" />
                          <span>Demo</span>
                        </motion.a> */}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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
            className={`rounded-2xl p-8 shadow-lg ${
              theme === 'dark' 
                ? 'bg-gray-800 border border-gray-700' 
                : 'bg-white'
            }`}
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Want to see even more projects?
            </h3>
            <p className={`mb-6 ${
              theme === 'dark' ? 'text-gray-300' : 'text-neutral-600'
            }`}>
              Check out my GitHub profile for a complete collection of my work
            </p>
            <motion.a
              href="https://github.com/navneetpathak1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-coral to-teal text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              <FaGithub />
              <span>View All Projects on GitHub</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
