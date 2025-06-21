"use client"

import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Navigation({ isMenuOpen, setIsMenuOpen, activeSection, scrollToSection }) {
  const navItems = ["home", "about", "projects", "skills", "contact"]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/20"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
            Portfolio
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-colors ${
                  activeSection === item ? "text-cyan-400" : "text-gray-300 hover:text-white"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 space-y-4"
          >
            {navItems.map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left capitalize py-2 text-gray-300 hover:text-cyan-400 transition-colors"
                whileHover={{ x: 10 }}
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
