import { motion } from "framer-motion"
import { Code2, Database, Server, Wrench } from "lucide-react"

import Container from "../../components/common/Container"
import SectionTitle from "../../components/common/SectionTitle"
import Badge from "../../components/common/Badge"

import { skills } from "../../data/skills"


const icons = {
  Frontend: Code2,
  Backend: Server,
  "Base de données": Database,
  Outils: Wrench
}


const Skills = () => {

  return (

    <section
      id="competences"
      className="
        py-24
      "
    >

      <Container>

        <SectionTitle

          title="Mes compétences"

          subtitle="
          Une stack moderne pour concevoir
          des applications web complètes.
          "

        />


        <div
          className="
            grid
            gap-6
            md:grid-cols-2
          "
        >

          {
            skills.map((skill, index)=>{

              const Icon = icons[skill.category]


              return (

                <motion.div

                  key={skill.category}

                  initial={{
                    opacity:0,
                    y:40
                  }}

                  whileInView={{
                    opacity:1,
                    y:0
                  }}

                  viewport={{
                    once:true
                  }}

                  transition={{
                    delay:index * 0.15
                  }}

                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-slate-800/50
                    p-8
                    transition
                    hover:-translate-y-2
                  "

                >

                  <div
                    className="
                      mb-5
                      flex
                      items-center
                      gap-4
                    "
                  >

                    <Icon
                      size={32}
                      className="
                        text-blue-500
                      "
                    />


                    <h3
                      className="
                        text-2xl
                        font-semibold
                      "
                    >
                      {skill.category}
                    </h3>


                  </div>


                  <div
                    className="
                      flex
                      flex-wrap
                      gap-3
                    "
                  >

                    {
                      skill.items.map(item=>(

                        <Badge key={item}>
                          {item}
                        </Badge>

                      ))
                    }

                  </div>


                </motion.div>

              )

            })
          }


        </div>


      </Container>

    </section>

  )

}


export default Skills
