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
              Digital Marketing Lead who bridges the gap between marketing vision and product reality. At <span className="text-white font-semibold">blissio.ai</span>, 
              I don't just market the product, I help shape it. By partnering directly with product designers on UX flows and feature ideation, 
              I ensure our campaigns are deeply aligned with a user-centric product experience, creating a cohesive and powerful brand narrative from the inside out.
            </motion.p>
            <br />
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-300 leading-relaxed"
            >
              My expertise spans orchestrating data-driven social media strategies, leading cross-functional teams, and producing hands-on content, 
              from videography and editing in Adobe Premiere Pro to graphic design, that drives engagement and growth. My journey from building 
              the social presence for <span className="text-white font-semibold">Dursa Handicrafte</span> to my current leadership role has equipped me with a unique ability to craft 
              compelling stories that resonate across all platforms and translate strategic goals into measurable results.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
