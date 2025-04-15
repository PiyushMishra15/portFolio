"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "EXE Club Website",
    description:
      "Developed animated and responsive official site using Framer Motion and AOS, increasing traffic retention by 40%. Reduced bounce rate by 25% by simplifying UX and optimizing mobile flow.",
    technologies: ["Next.js", "Framer Motion", "React.js"],
    liveLink: "https://teamexe.tech",
    githubLink: "#",
    date: "Feb 2025",
    image: "/images/exe.jpg",
  },
  {
    title: "MemeBuzz",
    description:
      "Built and deployed scalable meme-sharing platform with 1K+ registered users and 1.5K+ meme uploads. Integrated JWT-based auth and optimized API performance, reducing average response time by 40%.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    liveLink: "https://memebuzzexe.site",
    githubLink: "#",
    date: "Jan 2025",
    image: "/images/memebuzz.jpg",
  },
  {
    title: "LinkHive",
    description:
      "Created personal link manager with LinkedIn, Twitter, YouTube integrations; handled 2K+ link redirects/month. Deployed on Vercel + Render with CI/CD, maintaining 99.9% uptime and under 100ms average latency.",
    technologies: ["TypeScript", "React.js", "Node.js", "MongoDB"],
    liveLink: "https://link-hive.netlify.app",
    githubLink: "#",
    date: "Jan 2025",
    image: "/images/linkhive.png",
  },
  {
    title: "True-Feedback",
    description:
      "A web application where users can anonymously provide feedback to anyone via their public profile link. Built with Next.js for fast performance and routing, and Firebase for user authentication and database management.",
    technologies: ["Next.js", "Firebase", "React.js"],
    liveLink: "#",
    githubLink: "#",
    date: "2024",
    image: "/images/true-feedback.png",
  },
  {
    title: "ECommerce Website",
    description:
      "A fully functional eCommerce platform designed to provide a smooth shopping experience with user authentication, real-time product management, and secure checkout.",
    technologies: ["React.js", "Firebase", "React Router", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
    date: "2024",
    image: "/images/eco.avif",
  },
];

export default function ProjectsSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-400"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:border-cyan-600 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-700/20 h-full overflow-hidden group">
              <div className="w-full h-48 overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <Badge
                  variant="outline"
                  className="absolute top-4 right-4 bg-cyan-900/70 text-cyan-400 border-cyan-800"
                >
                  {project.date}
                </Badge>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-bold">
                    {project.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-gray-400">
                  {project.technologies.join(" • ")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  {project.liveLink !== "#" && (
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      className="text-cyan-400 hover:text-cyan-300 flex items-center group"
                    >
                      <ExternalLink className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform" />{" "}
                      Live
                    </Link>
                  )}
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    className="text-cyan-400 hover:text-cyan-300 flex items-center group"
                  >
                    <Github className="w-4 h-4 mr-1 group-hover:translate-y-[-2px] transition-transform" />{" "}
                    Code
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
