"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const skillCategories = [
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "PHP", level: 90 },
      { name: "Laravel", level: 85 },
      { name: "REST API", level: 80 },
      { name: "PEST", level: 75 },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 75 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    id: "database",
    label: "Base de données",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "UML", level: 75 },
      { name: "Merise", level: 70 },
    ],
  },
  {
    id: "tools",
    label: "Outils",
    skills: [
      { name: "Git/GitHub", level: 85 },
      { name: "Docker", level: 70 },
      { name: "Postman", level: 90 },
      { name: "VSCode", level: 95 },
      { name: "Figma", level: 75 },
    ],
  },
]

const languages = [
  { name: "Arabe", level: "Maternelle", percent: 100 },
  { name: "Français", level: "B1", percent: 70 },
  { name: "Anglais", level: "A2", percent: 50 },
]

const softSkills = [
  "Dynamique",
  "Sens de l'organisation",
  "Esprit d'équipe",
  "Gestion de temps",
  "Sérieux et rigoureux",
]

export default function Skills() {
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
    <section id="skills" className="py-16 md:py-24">
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
              Mes <span className="gradient-text">Compétences</span>
            </h2>
            <p className="text-muted-foreground">Découvrez mes compétences techniques et personnelles</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Tabs defaultValue="backend" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                {skillCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {skillCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.skills.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <div className="skill-progress" style={{ width: `${skill.level}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants}>
              <Card>
                <CardContent className="p-6 space-y-6">
                  <h3 className="text-xl font-semibold">Langues</h3>
                  <div className="space-y-4">
                    {languages.map((lang, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">{lang.name}</span>
                          <span className="text-muted-foreground">{lang.level}</span>
                        </div>
                        <div className="skill-bar">
                          <div className="skill-progress" style={{ width: `${lang.percent}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card>
                <CardContent className="p-6 space-y-6">
                  <h3 className="text-xl font-semibold">Compétences transversales</h3>
                  <div className="flex flex-wrap gap-3">
                    {softSkills.map((skill, index) => (
                      <div key={index} className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
