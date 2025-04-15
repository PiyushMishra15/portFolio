"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"

const skills = [
  { name: "React.js", icon: "/icons/react.svg" },
  { name: "Node.js", icon: "/icons/nodejs.svg" },
  { name: "Express.js", icon: "/icons/express.svg" },
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
  { name: "MongoDB", icon: "/icons/mongodb.svg" },
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "SQL", icon: "/icons/sql.svg" },
  { name: "Firebase", icon: "/icons/firebase.svg" },
]

export default function SkillsSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } },
  }

  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-400"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 gap-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div key={index} variants={item}>
            <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:border-cyan-600 transition-colors overflow-hidden group">
              <CardContent className="p-6 flex items-center">
                <div className="w-12 h-12 mr-4 relative flex items-center justify-center">
                  <Image
                    src={skill.icon || "/placeholder.svg"}
                    alt={skill.name}
                    width={48}
                    height={48}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <motion.span className="text-xl font-medium" initial={{ x: 0 }} whileHover={{ x: 5 }}>
                  {skill.name}
                </motion.span>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
