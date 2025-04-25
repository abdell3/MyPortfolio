"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "FUTChampions",
    description:
      "Application web de gestion d'équipe Ultimate Team avec des fonctionnalités avancées pour les joueurs de FIFA.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["HTML5", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/abdell3/futchampions",
    demo: "https://futchampions-demo.vercel.app",
  },
  {
    title: "HRMS",
    description: "Plateforme de gestion RH complète avec gestion des employés, congés, paie et rapports.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Laravel 11", "Blade", "Spatie Laravel", "Tailwind CSS", "MySQL"],
    github: "https://github.com/abdell3/hrms",
    demo: "https://hrms-demo.vercel.app",
  },
  {
    title: "ABLigne",
    description: "Plateforme de cours en ligne avec système d'inscription, paiement et suivi des progrès.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Laravel 12", "Rest API", "Blade", "MySQL", "JWT", "Tailwind CSS"],
    github: "https://github.com/abdell3/abligne",
    demo: "https://abligne-demo.vercel.app",
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins">
              Mes <span className="gradient-text">Projets</span>
            </h2>
            <p className="text-muted-foreground">Découvrez mes réalisations récentes et mes travaux</p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full overflow-hidden card-hover">
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button asChild variant="outline" size="sm">
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> Code
                      </Link>
                    </Button>
                    <Button asChild size="sm">
                      <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Demo
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
