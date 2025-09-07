'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail } from 'lucide-react'

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
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  }
}

const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <span className="block text-white/90 mb-2">Digital Marketing</span>
              <span className="block text-gradient animate-glow">Leader</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Bridging marketing vision and product reality at{' '}
              <span className="text-white font-semibold">blissio.ai</span>
            </motion.p>
          </motion.div>

          {/* Enhanced Description */}
          <motion.div 
            variants={itemVariants}
            className="enhanced-glass p-8 rounded-3xl max-w-4xl mx-auto"
          >
            <p className="text-lg text-gray-200 leading-relaxed">
              I don't just market products—I help shape them. Through strategic collaboration with product designers 
              and cross-functional teams, I create cohesive brand narratives that drive engagement and measurable growth.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center gap-3 animate-glow"
            >
              <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Let's Connect
            </motion.a>
            
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="glass-effect px-8 py-4 rounded-full font-semibold text-lg text-white hover:bg-white/15 transition-all duration-300 flex items-center gap-3"
            >
              <Download className="w-5 h-5" />
              View Portfolio
            </motion.a>
          </motion.div>

          {/* Floating Scroll Indicator */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="glass-effect p-3 rounded-full cursor-pointer"
            >
              <ArrowDown className="w-6 h-6 text-purple-400" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
    </section>
  )
}
