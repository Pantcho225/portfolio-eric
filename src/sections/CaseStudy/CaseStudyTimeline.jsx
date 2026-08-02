import { motion } from "framer-motion";

const steps = [
  {
    title: "Analyse métier",
    description:
      "Étude du fonctionnement d'une copropriété afin d'identifier les besoins fonctionnels et les contraintes."
  },
  {
    title: "Architecture",
    description:
      "Conception d'une architecture moderne basée sur React, Django REST Framework et PostgreSQL."
  },
  {
    title: "Développement",
    description:
      "Implémentation progressive des différents modules métier et de l'API REST sécurisée."
  },
  {
    title: "Tests",
    description:
      "Validation des fonctionnalités, correction des anomalies et amélioration de l'expérience utilisateur."
  },
  {
    title: "Évolutions",
    description:
      "Conception d'une base robuste permettant d'ajouter facilement de nouveaux modules."
  }
];

const CaseStudyTimeline = () => {
  return (
    <section className="mt-24">
      <h3 className="text-center text-3xl font-bold text-white">
        Déroulement du projet
      </h3>

      <p className="mx-auto mt-4 max-w-3xl text-center text-slate-400">
        Les principales étapes suivies pour concevoir une plateforme SaaS
        robuste et évolutive.
      </p>

      <div className="mx-auto mt-14 max-w-4xl">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative mb-10 flex gap-6"
          >
            <div className="flex flex-col items-center">
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-blue-600
                  font-bold
                  text-white
                "
              >
                {index + 1}
              </div>

              {index < steps.length - 1 && (
                <div className="mt-2 h-24 w-px bg-slate-700" />
              )}
            </div>

            <div
              className="
                flex-1
                rounded-2xl
                border
                border-white/10
                bg-slate-800/50
                p-6
              "
            >
              <h4 className="text-xl font-semibold text-white">
                {step.title}
              </h4>

              <p className="mt-3 leading-relaxed text-slate-400">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudyTimeline;