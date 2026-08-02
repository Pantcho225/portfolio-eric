import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";

import Container from "../../components/common/Container";
import SectionTitle from "../../components/common/SectionTitle";

const cards = [
  {
    icon: <FaCode />,
    title: "Développement Full Stack",
    description:
      "Conception d'applications web modernes avec React, Django, PostgreSQL et des architectures évolutives.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Applications SaaS",
    description:
      "Développement de plateformes professionnelles sécurisées, performantes et pensées pour une utilisation en entreprise.",
  },
  {
    icon: <FaRocket />,
    title: "Innovation",
    description:
      "Toujours à la recherche de nouvelles solutions techniques pour créer des produits utiles et à forte valeur ajoutée.",
  },
];

const About = () => {
  return (
    <section id="apropos" className="py-28 bg-[#07111f]">
      <Container>
        <SectionTitle
          title="À propos de moi"
          subtitle="Développeur Full Stack passionné par la création de solutions numériques modernes."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-16">

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <h3 className="text-3xl font-bold text-white mb-8">
              Je transforme des idées en applications performantes.
            </h3>

            <p className="text-gray-400 leading-8 mb-6">
              Je suis Eric Adia Kore, développeur Full Stack spécialisé
              dans les technologies modernes du web. J'aime concevoir des
              applications robustes, élégantes et centrées sur les besoins
              des utilisateurs.
            </p>

            <p className="text-gray-400 leading-8 mb-6">
              Mon objectif est de créer des logiciels professionnels
              capables d'apporter une réelle valeur aux entreprises,
              qu'il s'agisse de plateformes SaaS, d'outils de gestion ou
              d'applications métier.
            </p>

            <p className="text-gray-400 leading-8">
              Actuellement, je développe une plateforme SaaS complète de
              gestion de copropriétés tout en approfondissant mes
              compétences en architecture logicielle, sécurité et
              intelligence artificielle.
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >

            {cards.map((card) => (
              <div
                key={card.title}
                className="bg-[#0c1b2f] border border-slate-700 rounded-2xl p-8 hover:border-yellow-400 transition-all duration-300"
              >
                <div className="text-yellow-400 text-4xl mb-5">
                  {card.icon}
                </div>

                <h4 className="text-white text-xl font-semibold mb-3">
                  {card.title}
                </h4>

                <p className="text-gray-400 leading-7">
                  {card.description}
                </p>
              </div>
            ))}

          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default About;