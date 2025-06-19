"use client"

import { motion } from "framer-motion"
import { Code, Github, ExternalLink } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with React, Node.js, and MongoDB.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates.",
      technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts.",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Social Media App",
      description: "A full-featured social media application with user authentication.",
      technologies: ["Next.js", "PostgreSQL", "Prisma", "NextAuth"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A responsive portfolio website with modern animations.",
      technologies: ["React", "Framer Motion", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 6,
      title: "Blog Platform",
      description: "A content management system for bloggers and writers.",
      technologies: ["Gatsby", "GraphQL", "Contentful", "Netlify"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all"
            >
              <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                <Code className="w-16 h-16 text-cyan-400" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
