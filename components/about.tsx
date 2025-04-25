"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, GraduationCap, MapPin, Mail, Phone } from "lucide-react"

export default function About() {
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
    <section id="about" className="py-16 md:py-24 bg-muted/50">
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
              À propos de <span className="gradient-text">moi</span>
            </h2>
            <p className="text-muted-foreground">Découvrez mon parcours et mes informations personnelles</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold">Qui suis-je?</h3>
              <p className="text-muted-foreground">
                Je suis Abdellah Addar, un développeur Full Stack junior passionné par la création d'applications web
                modernes et performantes. Spécialisé dans le développement backend avec Laravel et PHP, ainsi que le
                frontend avec JavaScript, React et Tailwind CSS.
              </p>
              <p className="text-muted-foreground">
                J'ai une solide expérience dans la gestion de bases de données MySQL et PostgreSQL, et je suis à l'aise
                avec l'utilisation de Postman pour consommer des API. Mon objectif est de créer des solutions digitales
                élégantes et fonctionnelles qui répondent aux besoins des utilisateurs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="card-hover">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Date de naissance</p>
                      <p className="text-sm text-muted-foreground">05/09/2001</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardContent className="p-4 flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Localisation</p>
                      <p className="text-sm text-muted-foreground">Nador, Maroc</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">abdo.abdell.2000@gmail.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Téléphone</p>
                      <p className="text-sm text-muted-foreground">0678125500</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold">Éducation & Expérience</h3>

              <div className="space-y-6">
                <Card className="card-hover overflow-hidden">
                  <CardContent className="p-0">
                    <div className="p-4 border-l-4 border-primary">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold">Développeur web full stack</h4>
                          <p className="text-sm text-muted-foreground">YouCode-UM6P</p>
                        </div>
                        <div className="flex items-center gap-1 bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                          <GraduationCap className="h-3 w-3" />
                          <span>Depuis oct. 2024</span>
                        </div>
                      </div>
                      <p className="text-sm mt-2">Youssoufia, Morocco</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover overflow-hidden">
                  <CardContent className="p-0">
                    <div className="p-4 border-l-4 border-primary">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold">DEUST MIPC</h4>
                          <p className="text-sm text-muted-foreground">FST Marrakech</p>
                        </div>
                        <div className="flex items-center gap-1 bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                          <GraduationCap className="h-3 w-3" />
                          <span>2019-2022</span>
                        </div>
                      </div>
                      <p className="text-sm mt-2">Marrakesh, Morocco</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover overflow-hidden">
                  <CardContent className="p-0">
                    <div className="p-4 border-l-4 border-primary">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold">Téléconseiller</h4>
                          <p className="text-sm text-muted-foreground">Concentrix</p>
                        </div>
                        <div className="flex items-center gap-1 bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                          <Calendar className="h-3 w-3" />
                          <span>Mar-Mai 2024</span>
                        </div>
                      </div>
                      <p className="text-sm mt-2">Marrakesh, Morocco</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
