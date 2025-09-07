'use client'

import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-white mb-8"
          >
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="glass-effect p-8 rounded-2xl max-w-3xl mx-auto"
          >
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-300 leading-relaxed"
            >
              As a Marketing Team Lead and Social Media Manager at <span className="text-white font-semibold">blissio.ai</span>, 
              I'm passionate about learning and growing in the digital marketing space. My journey combines hands-on experience 
              in content creation—including videography and editing—with strategic thinking to build meaningful brand connections.
            </motion.p>
            <br />
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-300 leading-relaxed"
            >
              Through my roles at blissio.ai and my previous experience as Graphic Designer and Social Media Manager at 
              <span className="text-white font-semibold"> Dursa Handicrafte</span>, I've developed skills in creative storytelling 
              and social media strategy. I'm committed to continuous learning and applying new techniques to create authentic, 
              engaging content that resonates with audiences.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
