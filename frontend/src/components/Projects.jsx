"use client"

import { Github, ExternalLink } from "lucide-react"
import chatAppImage from "../assets/Chat app.png"
import portfolioImage from "../assets/Portfolio.png"
import weatherImage from "../assets/Weather app.png"
import foodAppImage from "../assets/Food app.png"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Real time Chat-Application",
      description: "One-To-One chat features with React, Node.js, and MongoDB.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      githubUrl: "https://github.com/sarkalerameshwar/Fullstack-Chat-Application",
      liveUrl: "https://fullstack-chat-application-xldt.onrender.com",
      image: chatAppImage,
    },
    {
      id: 2,
      title: "Hotel Listings Application",
      description: "A real-time hotel listings application with user authentication and booking features.",
      technologies: ["ejs", "Express", "MongoDB", "Node.js"],
      githubUrl: "https://github.com/sarkalerameshwar/Airbn-Listings",
      liveUrl: "https://mern-project-8l62.onrender.com",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Food Devivery Application",
      description: "A full-featured food delivery application with user authentication and order management.",
      technologies: ["React.js", "mongoDB", "Node.js", "Express.js"],
      githubUrl: "https://github.com/sarkalerameshwar/Food-Delivery-Web-App",
      liveUrl: "#",
      image: foodAppImage,
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts.",
      technologies: ["React", "OpenWeather API"],
      githubUrl: "https://github.com/sarkalerameshwar/Weather-Application",
      liveUrl: "https://project-weather-application.onrender.com",
      image: weatherImage,
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A responsive portfolio website with modern animations.",
      technologies: ["React", "Framer Motion", "Tailwind CSS"],
      githubUrl: "https://github.com/sarkalerameshwar/Portfolio-Website",
      liveUrl: "https://portfolio-website-5pj6.onrender.com/",
      image: portfolioImage,
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all"
            >
              <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                <img
                  src={project.image ? project.image : "/placeholder.svg?height=200&width=300"}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
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
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
