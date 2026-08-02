import { motion } from "framer-motion";

const stats = [
  {
    value: "8+",
    label: "Modules métier"
  },
  {
    value: "60+",
    label: "Endpoints REST"
  },
  {
    value: "React",
    label: "Frontend"
  },
  {
    value: "Django",
    label: "Backend"
  },
  {
    value: "PostgreSQL",
    label: "Base de données"
  },
  {
    value: "JWT",
    label: "Authentification"
  }
];

const CaseStudyStats = () => {
  return (
    <section className="mt-24">
      <h3 className="text-center text-3xl font-bold text-white">
        Le projet en chiffres
      </h3>

      <p className="mx-auto mt-4 max-w-3xl text-center text-slate-400">
        Quelques indicateurs illustrant l'ampleur du développement de la
        plateforme SaaS.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className="
              rounded-2xl
              border
              border-white/10
              bg-slate-800/50
              p-8
              text-center
            "
          >
            <h4 className="text-4xl font-bold text-blue-400">
              {item.value}
            </h4>

            <p className="mt-3 text-slate-300">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudyStats;