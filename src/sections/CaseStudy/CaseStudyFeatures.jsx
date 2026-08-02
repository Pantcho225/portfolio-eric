import { motion } from "framer-motion";

import {
  LayoutDashboard,
  Users,
  Wallet,
  CreditCard,
  FileText,
  Building2,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Tableau de bord",
    description:
      "Vue d'ensemble des copropriétés, indicateurs financiers et activités récentes.",
  },
  {
    icon: Users,
    title: "Gestion des copropriétaires",
    description:
      "Gestion des lots, propriétaires, occupants et informations administratives.",
  },
  {
    icon: Wallet,
    title: "Appels de charges",
    description:
      "Création, calcul et suivi des appels de fonds avec historique complet.",
  },
  {
    icon: CreditCard,
    title: "Paiements",
    description:
      "Suivi des règlements, relances automatiques et situation financière.",
  },
  {
    icon: FileText,
    title: "Documents",
    description:
      "Production automatique de documents PDF administratifs et archivage.",
  },
  {
    icon: Building2,
    title: "Assemblées générales",
    description:
      "Gestion des convocations, votes, présences, résolutions et procès-verbaux.",
  },
  {
    icon: BarChart3,
    title: "Comptabilité",
    description:
      "Suivi des encaissements, dépenses, soldes et indicateurs financiers.",
  },
  {
    icon: ShieldCheck,
    title: "Sécurité",
    description:
      "Authentification JWT, gestion des rôles et isolation des copropriétés.",
  },
];

const CaseStudyFeatures = () => {
  return (
    <section className="mt-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-center text-4xl font-black text-white">
          Fonctionnalités principales
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-400">
          Une plateforme SaaS complète couvrant l'ensemble des besoins d'un
          syndic de copropriété, de la gestion administrative jusqu'au suivi
          financier.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-slate-900/60
                p-8
                transition
                duration-300
                hover:-translate-y-2
                hover:border-blue-500/40
                hover:shadow-xl
                hover:shadow-blue-500/10
              "
            >
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-blue-500/10
                "
              >
                <Icon
                  size={30}
                  className="text-blue-400"
                />
              </div>

              <h3 className="mt-6 text-xl font-bold text-white">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="
          mt-20
          rounded-3xl
          border
          border-blue-500/20
          bg-gradient-to-r
          from-blue-600/10
          via-slate-900
          to-blue-600/10
          p-10
        "
      >
        <h3 className="text-3xl font-bold text-white">
          Chiffres clés du projet
        </h3>

        <div className="mt-10 grid gap-8 md:grid-cols-4">
          <div>
            <p className="text-5xl font-black text-blue-400">8+</p>
            <p className="mt-2 text-slate-400">Modules métier</p>
          </div>

          <div>
            <p className="text-5xl font-black text-blue-400">30+</p>
            <p className="mt-2 text-slate-400">Écrans développés</p>
          </div>

          <div>
            <p className="text-5xl font-black text-blue-400">100%</p>
            <p className="mt-2 text-slate-400">Responsive</p>
          </div>

          <div>
            <p className="text-5xl font-black text-blue-400">REST</p>
            <p className="mt-2 text-slate-400">API Django</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CaseStudyFeatures;