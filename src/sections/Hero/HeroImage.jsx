import { motion } from "framer-motion";

import {
  FaReact,
  FaPython
} from "react-icons/fa";

import {
  SiDjango,
  SiPostgresql
} from "react-icons/si";

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

      {/* Carte photo */}

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
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-slate-900/60
          p-3
          shadow-2xl
          backdrop-blur
        "
      >
        <img
          src="/images/profile/ERIC.png"
          alt="Eric Adia Kore"
          className="
            h-[520px]
            w-[380px]
            rounded-2xl
            object-cover
          "
        />
      </motion.div>

      {/* React */}

      <motion.div
        animate={{
          y: [0, -12, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity
        }}
        className="
          absolute
          right-4
          top-10
          rounded-2xl
          border
          border-white/10
          bg-slate-900/90
          p-4
          text-3xl
          shadow-xl
        "
      >
        <FaReact className="text-cyan-400" />
      </motion.div>

      {/* Python */}

      <motion.div
        animate={{
          y: [0, 12, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity
        }}
        className="
          absolute
          bottom-28
          left-0
          rounded-2xl
          border
          border-white/10
          bg-slate-900/90
          p-4
          text-3xl
          shadow-xl
        "
      >
        <FaPython className="text-yellow-400" />
      </motion.div>

      {/* Django + PostgreSQL */}

      <motion.div
        animate={{
          y: [0, -8, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity
        }}
        className="
          absolute
          bottom-6
          right-8
          flex
          gap-4
          rounded-2xl
          border
          border-white/10
          bg-slate-900/90
          p-4
          text-2xl
          shadow-xl
        "
      >
        <SiDjango className="text-green-400" />
        <SiPostgresql className="text-blue-400" />
      </motion.div>
    </motion.div>
  );
};

export default HeroImage;