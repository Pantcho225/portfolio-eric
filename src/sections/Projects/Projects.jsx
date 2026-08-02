import { motion } from "framer-motion";

import Container from "../../components/common/Container";
import SectionTitle from "../../components/common/SectionTitle";

import FeaturedProject from "../../components/projects/FeaturedProject";
import ProjectCard from "../../components/projects/ProjectCard";

import { projects } from "../../data/projects";

const Projects = () => {

  const featuredProject = projects.find(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (

    <section
      id="projets"
      className="relative py-32"
    >

      <Container>

        <SectionTitle
          title="Mes réalisations"
          subtitle="Des applications conçues pour résoudre de véritables problématiques métier avec une approche produit, une architecture robuste et une expérience utilisateur moderne."
        />

        {/* Projet principal */}

        {featuredProject && (

          <motion.div

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
              duration:.6
            }}

            className="mt-20"

          >

            <div
              className="
                mb-10
                flex
                items-center
                gap-5
              "
            >

              <div className="h-px flex-1 bg-slate-700" />

              <span
                className="
                  rounded-full
                  bg-yellow-400
                  px-6
                  py-2
                  font-semibold
                  text-slate-900
                  shadow-lg
                "
              >
                ⭐ Projet vedette
              </span>

              <div className="h-px flex-1 bg-slate-700" />

            </div>

            <FeaturedProject
              project={featuredProject}
            />

          </motion.div>

        )}

        {/* Autres projets */}

        {otherProjects.length > 0 && (

          <motion.div

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
              delay:.2
            }}

            className="mt-28"

          >

            <div
              className="
                mb-12
                flex
                items-center
                gap-5
              "
            >

              <h3
                className="
                  text-3xl
                  font-bold
                  text-white
                "
              >
                Autres projets
              </h3>

              <div className="h-px flex-1 bg-slate-700" />

            </div>

            <div
              className="
                grid
                gap-8
                lg:grid-cols-2
              "
            >

              {otherProjects.map((project)=>(

                <ProjectCard

                  key={project.id}

                  project={project}

                />

              ))}

            </div>

          </motion.div>

        )}

      </Container>

    </section>

  );

};

export default Projects;