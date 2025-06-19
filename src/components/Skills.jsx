"use client"

import { motion } from "framer-motion"
import { Code, Server, Database, Smartphone } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend",
      skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js", "Vite"],
    },
    {
      icon: Server,
      title: "Backend",
      skills: ["Node.js", "Python", "Express", "FastAPI", "Django", "GraphQL"],
    },
    {
      icon: Database,
      title: "Database",
      skills: ["MongoDB", "PostgreSQL", "Redis", "Firebase", "MySQL", "Supabase"],
    },
    {
      icon: Smartphone,
      title: "Mobile & Tools",
      skills: ["React Native", "Flutter", "Git", "Docker", "AWS", "Vercel"],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full mb-4 mx-auto">
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <motion.li key={skill} className="text-gray-300 text-center" whileHover={{ x: 5, color: "#22d3ee" }}>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
