import { motion } from "framer-motion";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Halo principal */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
          absolute
          left-1/2
          top-32
          h-[550px]
          w-[550px]
          -translate-x-1/2
          rounded-full
          bg-blue-600/20
          blur-[140px]
        "
      />

      {/* Halo secondaire */}

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="
          absolute
          right-10
          top-16
          h-72
          w-72
          rounded-full
          bg-cyan-500/20
          blur-[120px]
        "
      />

      {/* Grille */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)]
          [background-size:40px_40px]
        "
      />
    </div>
  );
};

export default HeroBackground;