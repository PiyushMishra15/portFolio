"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const experiences = [
  {
    title: "Web Developer",
    company: "EXE Club, NIT Hamirpur",
    period: "Dec 2023 – Present",
    description: [
      "Led development of official club website, reducing load time by 30% and increasing monthly unique visitor by 600+.",
      "Mentored 10+ junior developers across 3 major projects, leading to a 25% boost in team productivity.",
      "Coordinated 30+ volunteers during Nimbus Tech Fest, enhancing attendee engagement by 40%.",
    ],
  },
  {
    title: "Tech Expert",
    company: "CSEC Society, NIT Hamirpur",
    period: "Dec 2023 – Present",
    description: [
      "Built official CSEC website (csec.nith.ac.in); improved mobile performance score by 45%.",
      "Core organizer of Hack 5.0, coordinating 250+ participants and managing operations across 20+ teams.",
    ],
  },
]

export default function ExperienceSection() {
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
    <section id="experience" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-400"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>
      <motion.div
        className="space-y-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {experiences.map((exp, index) => (
          <motion.div key={index} variants={item} transition={{ duration: 0.5, delay: index * 0.1 }}>
            <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:border-cyan-600 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-700/20 overflow-hidden">
              <CardHeader className="relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-cyan-600"></div>
                <div className="flex justify-between items-start flex-wrap gap-2 pl-4">
                  <div>
                    <CardTitle className="text-xl font-bold">{exp.title}</CardTitle>
                    <CardDescription className="text-gray-400">{exp.company}</CardDescription>
                  </div>
                  <Badge variant="outline" className="bg-cyan-900/30 text-cyan-400 border-cyan-800">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pl-8">
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  {exp.description.map((item, i) => (
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
