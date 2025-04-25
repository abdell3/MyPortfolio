"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Layout, Server } from "lucide-react"

const services = [
  {
    icon: <Server className="h-10 w-10 text-primary" />,
    title: "Développement Backend",
    description:
      "Création d'API RESTful et de systèmes backend robustes avec Laravel et PHP. Gestion de l'authentification, des autorisations et des fonctionnalités avancées.",
  },
  {
    icon: <Layout className="h-10 w-10 text-primary" />,
    title: "Développement Frontend",
    description:
      "Conception d'interfaces utilisateur réactives et modernes avec React, JavaScript, HTML5, CSS3 et Tailwind CSS pour une expérience utilisateur optimale.",
  },
  {
    icon: <Database className="h-10 w-10 text-primary" />,
    title: "Gestion de Base de Données",
    description:
      "Conception, optimisation et gestion de bases de données MySQL et PostgreSQL. Création de schémas efficaces et requêtes performantes.",
  },
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Intégration d'API",
    description:
      "Consommation et intégration d'API externes avec Postman. Développement d'API RESTful pour connecter différents services et applications.",
  },
]

export default function Services() {
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
    <section id="services" className="py-16 md:py-24">
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
              Mes <span className="gradient-text">Services</span>
            </h2>
            <p className="text-muted-foreground">Découvrez les services que je propose pour répondre à vos besoins</p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full card-hover border-t-4 border-t-primary">
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
