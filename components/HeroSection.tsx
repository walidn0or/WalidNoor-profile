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
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative py-16 sm:py-0">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left space-y-6 sm:space-y-8"
          >
            {/* Main Heading */}
            <motion.div variants={itemVariants} className="space-y-3 sm:space-y-4">
              <motion.h1 
                className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <span className="block text-white/90 mb-1 sm:mb-2">Digital Marketing</span>
                <span className="block text-gradient animate-glow">Leader</span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl leading-relaxed"
              >
                Bridging marketing vision and product reality at{' '}
                <span className="text-white font-semibold">blissio.ai</span>
              </motion.p>
            </motion.div>

            {/* Enhanced Description */}
            <motion.div 
              variants={itemVariants}
              className="enhanced-glass p-4 sm:p-6 rounded-2xl"
            >
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                I don't just market products, I help shape them. Through strategic collaboration with product designers 
                and cross-functional teams, I create cohesive brand narratives that drive engagement and measurable growth.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto text-center group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-3 animate-glow"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
                Let's Connect
              </motion.a>
              
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto text-center glass-effect px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg text-white hover:bg-white/15 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                View Portfolio
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Professional Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center items-center lg:justify-end mt-8 sm:mt-12 lg:mt-0"
          >
            <div className="relative group w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Main image container with enhanced glass effect */}
              <div className="w-full h-full rounded-full overflow-hidden enhanced-glass p-1 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-1">
                  <img
                    src="/profile.jpg"
                    alt="Walid Noor - Digital Marketing Leader"
                    className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              
              {/* Enhanced decorative elements */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-xl animate-float" />
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
              <div className="absolute top-1/4 -right-4 sm:-right-8 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }} />
              
              {/* Floating ring effects */}
              <div className="absolute inset-0 rounded-full border border-white/10" style={{ animation: 'spin 20s linear infinite' }} />
              <div className="absolute inset-3 sm:inset-6 rounded-full border border-purple-400/20" style={{ animation: 'spin 15s linear infinite reverse' }} />
            </div>
          </motion.div>
        </div>

        {/* Floating Scroll Indicator */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="glass-effect p-2 sm:p-3 rounded-full cursor-pointer"
          >
            <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="hidden sm:block absolute top-1/4 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-float"></div>
      <div className="hidden sm:block absolute bottom-1/4 right-4 sm:right-10 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="hidden sm:block absolute top-1/2 right-1/4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
    </section>
  )
}
