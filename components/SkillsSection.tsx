'use client'

import { motion } from 'framer-motion'
import { BarChart3, Video, Users, Palette, TrendingUp, Camera } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

const skillVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Strategy & Analytics",
      icon: <BarChart3 className="w-8 h-8" />,
      skills: ["Social Media Strategy", "Performance Analytics", "Campaign Management", "Data-Driven Insights"]
    },
    {
      title: "Content Creation",
      icon: <Video className="w-8 h-8" />,
      skills: ["Videography", "Video Editing (Adobe Premiere Pro)", "Graphic Design", "Visual Storytelling"]
    },
    {
      title: "Management",
      icon: <Users className="w-8 h-8" />,
      skills: ["Team Leadership", "Project Management", "Client Relations", "Cross-functional Collaboration"]
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Skills & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Competencies</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive skill set that bridges creative vision with strategic execution and analytical precision.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-effect p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 group"
            >
              <motion.div 
                className="text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {category.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">{category.title}</h3>
              <motion.div 
                variants={containerVariants}
                className="space-y-3"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    variants={skillVariants}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-8">Certifications</h3>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              "Adobe Premiere Pro Masterclass",
              "Social Media Marketing Specialization (Coursera)",
              "Viral Marketing & Contagious Content (Coursera)"
            ].map((cert, index) => (
              <motion.div
                key={cert}
                variants={{
                  hidden: { opacity: 0, scale: 0.5, rotate: -10 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut"
                    }
                  }
                }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="glass-effect px-6 py-3 rounded-full cursor-pointer"
              >
                <span className="text-gray-300 text-sm">{cert}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
