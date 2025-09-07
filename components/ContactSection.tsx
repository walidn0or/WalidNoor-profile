'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useState } from 'react'

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

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const contactCardVariants = {
  hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "walidnoor.afg@gmail.com",
      href: "mailto:walidnoor.afg@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+93 747367677",
      href: "tel:+93747367677"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Kabul, Afghanistan",
      href: "#"
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Let's <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to discuss opportunities or learn more about my experience? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-semibold text-white mb-8"
            >
              Get in Touch
            </motion.h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  variants={contactCardVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    x: 10,
                    transition: { duration: 0.2 }
                  }}
                  href={info.href}
                  className="flex items-center glass-effect p-6 rounded-xl hover:bg-white/20 transition-all duration-300 group block"
                >
                  <motion.div 
                    className="text-purple-400 mr-4 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {info.icon}
                  </motion.div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div 
              variants={itemVariants}
              className="mt-8 glass-effect p-6 rounded-xl"
            >
              <h4 className="text-white font-semibold mb-3">Why Connect?</h4>
              <ul className="space-y-2 text-gray-300">
                <motion.li 
                  variants={itemVariants}
                  className="flex items-center"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3" />
                  Discuss social media strategy opportunities
                </motion.li>
                <motion.li 
                  variants={itemVariants}
                  className="flex items-center"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3" />
                  Learn about my experience and skills
                </motion.li>
                <motion.li 
                  variants={itemVariants}
                  className="flex items-center"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3" />
                  Explore potential collaboration
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="glass-effect p-8 rounded-2xl"
          >
            {/* Success Message */}
            {submitStatus === 'success' && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center"
              >
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                <p className="text-green-300">Message sent successfully! I'll get back to you soon.</p>
              </motion.div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center"
              >
                <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
                <p className="text-red-300">
                  Unable to send message through the form. Please email me directly at{' '}
                  <a 
                    href="mailto:walidnoor.afg@gmail.com?subject=Portfolio Contact&body=Hi Walid,%0D%0A%0D%0A" 
                    className="text-purple-400 hover:text-purple-300 underline transition-colors"
                  >
                    walidnoor.afg@gmail.com
                  </a>
                </p>
              </motion.div>
            )}

            <motion.form 
              variants={containerVariants}
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div variants={itemVariants}>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your first name"
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your last name"
                  />
                </motion.div>
              </div>

              <motion.div variants={itemVariants}>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your company or organization"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </motion.div>

              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
