import { motion } from "framer-motion";

import Container from "../../components/common/Container";
import SectionTitle from "../../components/common/SectionTitle";
import TimelineCard from "../../components/cards/TimelineCard";

import { timeline } from "../../data/timeline";

const Experience = () => {
  return (
    <section
      id="parcours"
      className="relative py-32 overflow-hidden"
    >
      <Container>
        <SectionTitle
          title="Mon parcours"
          subtitle="Une progression construite autour de l'apprentissage, de la pratique et de la réalisation de projets concrets."
        />

        <div className="relative mx-auto mt-20 max-w-5xl">

          {/* Ligne centrale */}

          <div
            className="
              absolute
              left-4
              top-0
              h-full
              w-[2px]
              bg-gradient-to-b
              from-blue-600
              via-cyan-400
              to-blue-600
              md:left-1/2
              md:-translate-x-1/2
            "
          />

          <div className="space-y-12">

            {timeline.map((item, index) => (

              <motion.div
                key={item.title}
                initial={{
                  opacity:0,
                  y:40,
                }}
                whileInView={{
                  opacity:1,
                  y:0,
                }}
                viewport={{
                  once:true,
                }}
                transition={{
                  duration:.6,
                  delay:index*0.15,
                }}
              >
                <TimelineCard
                  item={item}
                  index={index}
                />
              </motion.div>

            ))}

          </div>

        </div>

      </Container>
    </section>
  );
};

export default Experience;