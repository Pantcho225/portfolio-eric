import { motion } from "framer-motion";

import { FaReact } from "react-icons/fa";
import { SiDjango, SiPostgresql } from "react-icons/si";

const architecture = [
  { title: "Interface", detail: "React", Icon: FaReact, color: "text-cyan-400" },
  { title: "API & logique métier", detail: "Django / Python", Icon: SiDjango, color: "text-green-400" },
  { title: "Données", detail: "PostgreSQL", Icon: SiPostgresql, color: "text-blue-400" },
];

const HeroImage = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9
      }}
      animate={{
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 0.8
      }}
      className="relative flex justify-center"
    >
      {/* Halo lumineux */}

      <div
        className="
          absolute
          h-[430px]
          w-[430px]
          rounded-full
          bg-blue-600/20
          blur-3xl
        "
      />

      <motion.div
        whileHover={{
          y: -8,
          scale: 1.02
        }}
        transition={{
          duration: 0.3
        }}
        className="
          relative
          w-full
          max-w-md
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-slate-900/60
          p-2
          shadow-2xl
          backdrop-blur
        "
      >
        <img
          src="/images/profile/ERIC.webp"
          alt="Eric Adia Kore - Développeur Full Stack"
          width={600}
          height={800}
          loading="eager"
          className="h-[440px] w-full object-cover object-top sm:h-[520px]"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.35,
          duration: 0.6,
        }}
        className="
          relative
          -mt-20
          mr-0
          w-[92%]
          max-w-md
          rounded-3xl
          border
          border-white/10
          bg-slate-900/90
          p-6
          shadow-2xl
          backdrop-blur
        "
      >
        <p className="text-xs font-semibold tracking-[0.2em] text-blue-300 uppercase">
          Approche de développement
        </p>
        <div className="mt-5 space-y-4">
          {architecture.map(({ title, detail, Icon, color }, index) => (
            <div key={title}>
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <Icon className={`text-xl ${color}`} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-white">{title}</p>
                  <p className="text-sm text-slate-400">{detail}</p>
                </div>
              </div>
              {index < architecture.length - 1 && <div className="ml-4 mt-1 text-lg leading-none text-blue-400" aria-hidden="true">↓</div>}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroImage;
