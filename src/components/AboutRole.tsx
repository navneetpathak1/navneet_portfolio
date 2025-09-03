import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const roles = [
  "Full-Stack Developer",
  "Problem Solver",
  "Backend Developer",
  "Frontend Developer",
  "Creative Thinker",
  "Competitive Programmer",
  "DevOps Enthusiast"
];

const roleColors = [
  "from-blue-400 via-purple-500 to-pink-500",
  "from-emerald-400 via-cyan-500 to-blue-500",
  "from-orange-400 via-red-500 to-pink-500",
  "from-green-400 via-emerald-500 to-teal-500",
  "from-purple-400 via-pink-500 to-red-500",
  "from-yellow-400 via-orange-500 to-red-500",
  "from-indigo-400 via-purple-500 to-pink-500"
];

const AboutRole = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000); // Increased timing for better readability
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-12 flex justify-center items-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={roles[index]}
          initial={{ 
            opacity: 0, 
            x: -100, 
            scale: 0.8,
            rotateY: -90
          }}
          animate={{ 
            opacity: 1, 
            x: 0, 
            scale: 1,
            rotateY: 0
          }}
          exit={{ 
            opacity: 0, 
            x: 100, 
            scale: 0.8,
            rotateY: 90
          }}
          transition={{ 
            duration: 1.2, 
            ease: [0.25, 0.46, 0.45, 0.94],
            scale: { delay: 0.2 },
            rotateY: { delay: 0.1 }
          }}
          className="absolute"
        >
          <motion.span
            className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${roleColors[index]} bg-clip-text text-transparent drop-shadow-lg`}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: "200% 200%"
            }}
          >
            {roles[index]}
          </motion.span>
          
          {/* Glowing effect */}
          <motion.div
            className="absolute inset-0 blur-sm opacity-50"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${roleColors[index]} bg-clip-text text-transparent`}>
              {roles[index]}
            </span>
          </motion.div>
        </motion.div>
      </AnimatePresence>
      
      {/* Animated background particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-30"
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 20 - 10, 0],
            scale: [0, 1, 0],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
          style={{
            left: `${20 + i * 30}%`,
            top: `${30 + i * 20}%`
          }}
        />
      ))}
    </div>
  );
};

export default AboutRole;
