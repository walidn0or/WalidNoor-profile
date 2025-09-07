'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Professional Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="inline-flex items-center text-sm text-gray-400 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span>Marketing Team Lead & Social Media Manager</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                <span className="block">Strategic Social Media,</span>
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                  Crafted with
                </span>
                <span className="block">Purpose</span>
              </h1>
            </motion.div>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-12 leading-relaxed"
            >
              I'm <span className="text-white font-semibold">Walid Noor</span>, a Social Media Manager and Marketing Lead. 
              I create authentic brand stories and develop social media strategies that connect with audiences and support business growth.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12"
            >
              <a 
                href="#portfolio"
                className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-glow"
              >
                <span className="flex items-center">
                  View Portfolio
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              
              <a 
                href="#contact"
                className="group glass-effect text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center">
                  Let's Connect
                </span>
              </a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col items-center lg:items-start"
            >
              <p className="text-gray-400 text-sm mb-2">Scroll to explore</p>
              <ChevronDown className="w-5 h-5 text-gray-400 animate-bounce" />
            </motion.div>
          </div>

          {/* Right Column - Professional Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center items-center lg:justify-end"
          >
            <div className="relative group">
              {/* Main image container with enhanced glass effect */}
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden glass-effect p-1 shadow-2xl mx-auto">
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-1">
                  <img
                    src="/profile.jpg"
                    alt="Walid Noor - Social Media Manager & Marketing Lead"
                    className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              
              {/* Enhanced decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-xl animate-pulse" />
              <div className="absolute top-1/4 -right-6 w-12 h-12 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-lg animate-pulse delay-1000" />
              
              {/* Floating ring effect */}
              <div className="absolute inset-0 rounded-full border border-white/10 animate-spin-slow" style={{ animation: 'spin 20s linear infinite' }} />
              <div className="absolute inset-4 rounded-full border border-purple-400/20 animate-spin-slow" style={{ animation: 'spin 15s linear infinite reverse' }} />
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
          />
        </div>
      </div>
    </section>
  )
}
