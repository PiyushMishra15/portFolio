"use client"

import React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { GraduationCap, Award, School } from "lucide-react"

const education = [
  {
    institution: "National Institute of Technology Hamirpur",
    degree: "B.Tech- Mathematics and Computing",
    period: "2022 - 2026",
    achievements: ["CGPA: 8.38"],
    icon: GraduationCap,
  },
  {
    institution: "Stepping Stone Gorakhpur",
    degree: "Higher Secondary Education",
    period: "2020 - 2022",
    achievements: ["12th: 89%", "JEE Mains: 98.24 Percentile"],
    icon: Award,
  },
  {
    institution: "Stepping Stone Gorakhpur",
    degree: "Secondary Education",
    period: "2020",
    achievements: ["10th: 92.4%"],
    icon: School,
  },
]

export default function EducationSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="education" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-400"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Education
      </motion.h2>
      <motion.div
        className="space-y-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {education.map((edu, index) => (
          <motion.div key={index} variants={item} transition={{ duration: 0.5, delay: index * 0.1 }}>
            <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:border-cyan-600 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-700/20 overflow-hidden">
              <CardHeader>
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-cyan-900/30 rounded-full">
                      {React.createElement(edu.icon, { className: "h-5 w-5 text-cyan-400" })}
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold">{edu.institution}</CardTitle>
                      <CardDescription className="text-gray-400">{edu.degree}</CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-cyan-900/30 text-cyan-400 border-cyan-800">
                    {edu.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  {edu.achievements.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
