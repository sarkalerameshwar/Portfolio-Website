"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"


export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center space-x-2 text-gray-400"
        >
          <span>© 2025 Rameshwar Sarkale. Made with</span>
          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
          </motion.div>
          <span>using React & Framer Motion</span>
        </motion.div>
      </div>
    </footer>
  )
}
