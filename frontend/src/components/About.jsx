"use client"

import { motion } from "framer-motion"
import { Code } from "lucide-react"
import { toast } from "react-toastify"

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Code className="w-32 h-32 text-white" />
                </div>
              </div>
              <motion.div
                className="absolute inset-0 border-2 border-cyan-400/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate MERN-stack developer with overall good experience creating digital experiences that
              combine beautiful design with powerful functionality. I specialize in modern web technologies and love
              bringing ideas to life through code.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              sharing knowledge with the developer community.
            </p>
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            onClick={() => {
              toast.info("Currently no resume available for download.", {
                position: "top-right",})
            }
            }>
              Download Resume
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
