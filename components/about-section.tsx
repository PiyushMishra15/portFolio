"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-400"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 flex justify-center">
                <motion.div
                  className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-cyan-600 shadow-lg shadow-cyan-600/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-cyan-600 to-cyan-400 flex items-center justify-center text-6xl font-bold text-white">
                    <Image
                      src="/images/piyush.jpeg" // Replace with real image
                      alt=""
                      width={256}
                      height={256}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-white"></div>
                  </div>
                </motion.div>
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-lg text-gray-300 mb-6">
                  Hi! I'm Piyush Mishra, a 2nd-year undergraduate student at NIT
                  Hamirpur, pursuing my degree in Mathematics and Computing. I'm
                  an aspiring MERN Stack Developer with a strong passion for
                  building full-stack web applications that are both
                  user-friendly and scalable.
                </p>
                <p className="text-lg text-gray-300 mb-6">
                  Currently, I'm focused on mastering Next.js, integrating
                  modern tools and technologies to create seamless, fast, and
                  responsive web experiences. I'm always eager to learn, build,
                  and contribute to real-world projects that solve meaningful
                  problems.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                 <a
  href="https://www.dropbox.com/scl/fi/7lv9jpo11vv3hd3selgnq/PiyushResume1.pdf?rlkey=k0se6xkx11qb6keu4f57wmj5o&st=ga5ejtj4&dl=1"
  aria-label="Download my resume"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button className="bg-gradient-to-r from-cyan-600 to-cyan-400 hover:from-cyan-500 hover:to-cyan-300 border-0 shadow-lg shadow-cyan-700/20">
    <Download className="mr-2 h-4 w-4" /> Download Resume
  </Button>
</a>
                </motion.div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
