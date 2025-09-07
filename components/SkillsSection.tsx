'use client'

import React from 'react';
import { motion } from 'framer-motion'
import { BarChart3, Video, Users, Palette, TrendingUp, Camera, Code, Globe, MessageSquare } from 'lucide-react'

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
      title: "Digital Marketing",
      icon: <TrendingUp className="w-8 h-8" />,
      skills: ["Social Media Management", "Content Strategy", "SEO Basics", "Campaign Management", "Performance Analytics", "Influencer Collaborations"]
    },
    {
      title: "Design & Tech",
      icon: <Palette className="w-8 h-8" />,
      skills: ["Graphic Design (Photoshop)", "Video Editing (Adobe Premiere Pro)", "HTML/CSS", "JavaScript (Basic)", "Visual Storytelling", "Brand Design"]
    },
    {
      title: "Content Creation",
      icon: <Video className="w-8 h-8" />,
      skills: ["Videography", "Photography", "Trending Reels Production", "Podcast Creation", "Written Content", "Multi-channel Content"]
    },
    {
      title: "Management & Soft Skills",
      icon: <Users className="w-8 h-8" />,
      skills: ["Team Leadership", "Project Collaboration", "Problem-Solving", "Cross-functional Teams", "Client Relations", "Community Management"]
    }
  ]

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Skills & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Competencies</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            A comprehensive skill set that bridges creative vision with strategic execution and analytical precision.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="glass-effect p-6 sm:p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 group"
            >
              <motion.div 
                className="text-purple-400 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {React.cloneElement(category.icon, { className: 'w-6 h-6 sm:w-8 sm:h-8' })}
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 text-center">{category.title}</h3>
              <motion.div 
                variants={containerVariants}
                className="space-y-2 sm:space-y-3"
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={skillVariants}
                    className="flex items-start"
                  >
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-300">{skill}</span>
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
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 sm:mb-8">Certifications</h3>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 px-2"
          >
            {[
              "Adobe Premiere Pro Masterclass",
              "Social Media Marketing Specialization (Coursera)",
              "Viral Marketing & Contagious Content (Coursera)"
            ].map((cert) => (
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
                whileHover={{ scale: 1.05, y: -2 }}
                className="glass-effect px-4 py-2 sm:px-6 sm:py-3 rounded-full cursor-pointer flex-shrink-0"
              >
                <span className="text-xs sm:text-sm text-gray-300">{cert}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
