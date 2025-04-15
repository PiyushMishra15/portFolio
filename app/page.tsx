"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ExperienceSection from "@/components/experience-section"
import EducationSection from "@/components/education-section"
import ContactSection from "@/components/contact-section"
import Logo from "@/components/logo"
import { motion } from "framer-motion"
import ParticlesBackground from "@/components/particles-background"
import { TypeAnimation } from "react-type-animation"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated particles background */}
      <ParticlesBackground />

      {/* Social links */}
      <motion.div
        className="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-6 z-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Link href="https://www.linkedin.com/in/piyush-mishra-8b6a4b2b3" target="_blank" aria-label="LinkedIn">
          <motion.div whileHover={{ scale: 1.2, color: "#22d3ee" }} transition={{ type: "spring", stiffness: 400 }}>
            <Linkedin className="w-6 h-6 text-gray-400 transition-colors" />
          </motion.div>
        </Link>
        <Link href="https://github.com/PiyushMishra15" target="_blank" aria-label="GitHub">
          <motion.div whileHover={{ scale: 1.2, color: "#22d3ee" }} transition={{ type: "spring", stiffness: 400 }}>
            <Github className="w-6 h-6 text-gray-400 transition-colors" />
          </motion.div>
        </Link>
        <Link href="mailto:piyushmishra2915@gmail.com" aria-label="Email">
          <motion.div whileHover={{ scale: 1.2, color: "#22d3ee" }} transition={{ type: "spring", stiffness: 400 }}>
            <Mail className="w-6 h-6 text-gray-400 transition-colors" />
          </motion.div>
        </Link>
        <Link href="tel:8112958489" aria-label="Phone">
          <motion.div whileHover={{ scale: 1.2, color: "#22d3ee" }} transition={{ type: "spring", stiffness: 400 }}>
            <Phone className="w-6 h-6 text-gray-400 transition-colors" />
          </motion.div>
        </Link>
      </motion.div>

      {/* Hero section */}
      <section className="h-screen flex flex-col items-center justify-center relative px-4">
        <motion.div
          className="absolute top-6 left-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Logo />
        </motion.div>
        <div className="text-center z-10 max-w-3xl">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Piyush Mishra
          </motion.h1>
          <motion.div
            className="text-xl text-gray-400 mb-8 h-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                1000,
                "MERN Stack Specialist",
                1000,
                "UI/UX Enthusiast",
                1000,
                "Problem Solver",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link href="#about">
              <Button className="bg-gradient-to-r from-cyan-600 to-cyan-400 hover:from-cyan-500 hover:to-cyan-300 text-white border-0 shadow-lg shadow-cyan-700/30">
                About Me <span className="ml-2">→</span>
              </Button>
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          <Link
            href="#latest-works"
            className="flex flex-col items-center text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <span className="mb-2">Latest Works</span>
            <div className="animate-bounce">↓</div>
          </Link>
        </motion.div>
      </section>

      {/* Content sections */}
      <div id="latest-works" className="py-20"></div>
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
    </div>
  )
}
