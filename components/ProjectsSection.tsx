'use client'

import { motion } from 'framer-motion'
import { ExternalLink, TrendingUp, Play, Users } from 'lucide-react'

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

const projectVariants = {
  hidden: { opacity: 0, y: 80, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

export default function ProjectsSection() {
  const projects = [
    {
      title: "Social Media Strategy Development",
      description: "Developed comprehensive social media strategies for blissio.ai, focusing on brand consistency and audience engagement through targeted content planning and community building initiatives.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      category: "Strategy",
      icon: <TrendingUp className="w-6 h-6" />,
      skills: ["Content Planning", "Audience Research", "Brand Strategy"],
      demo: "#"
    },
    {
      title: "Video Content Creation",
      description: "Created engaging video content using Adobe Premiere Pro, including promotional reels and educational content that enhanced brand visibility and audience engagement across social platforms.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500&h=300&fit=crop",
      category: "Content",
      icon: <Play className="w-6 h-6" />,
      skills: ["Video Editing", "Adobe Premiere Pro", "Visual Storytelling"],
      demo: "#"
    },
    {
      title: "Brand Visual Identity",
      description: "Contributed to developing cohesive visual identity and social media presence for Dursa Handicrafte, creating consistent brand messaging and visual elements that aligned with company values.",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=500&h=300&fit=crop",
      category: "Design",
      icon: <Users className="w-6 h-6" />,
      skills: ["Graphic Design", "Brand Consistency", "Social Media Management"],
      demo: "#"
    }
  ]

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A selection of projects that showcase my learning journey in social media strategy and content creation, 
            demonstrating my commitment to continuous growth and skill development.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={projectVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="glass-effect rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300 group perspective-1000"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div 
                  className="absolute top-4 left-4"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="flex items-center glass-effect px-3 py-1 rounded-full">
                    <motion.div 
                      className="text-purple-400 mr-2"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {project.icon}
                    </motion.div>
                    <span className="text-white text-sm font-medium">{project.category}</span>
                  </div>
                </motion.div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                {/* Skills Used */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Skills Applied:</h4>
                  <div className="space-y-1">
                    {project.skills.map((skill, skillIndex) => (
                      <motion.div 
                        key={skill} 
                        className="flex items-center text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-2 flex-shrink-0" />
                        <span className="text-gray-300">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <motion.a
                    href={project.demo}
                    className="flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200 font-medium"
                    whileHover={{ x: 5 }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Learn More
                  </motion.a>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">
                    {project.category}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">
            Interested in learning more about my experience or discussing potential opportunities?
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect
            <ExternalLink className="ml-2 w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
