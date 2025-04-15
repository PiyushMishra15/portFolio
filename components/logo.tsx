"use client"

import { motion } from "framer-motion"

export default function Logo() {
  return (
    <motion.div
      className="relative w-12 h-12 flex items-center justify-center cursor-pointer"
      whileHover={{ rotate: 180 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-md transform rotate-45"></div>
      <span className="relative text-white font-bold text-xl">PM</span>
    </motion.div>
  )
}
