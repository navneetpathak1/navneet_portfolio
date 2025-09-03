import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const roles = [
  "Full-Stack Developer",
  "Problem Solver",
  "Backend Developer",
  "Frontend Developer",
  "Creative Thinker",
];

const AboutRole = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500); // smoother timing (2.5s)
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-10 flex justify-center items-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.p
          key={roles[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute text-xl md:text-2xl text-white/90 text-shadow"
        >
          {roles[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export default AboutRole;
