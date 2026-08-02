import { motion } from "framer-motion";

const SectionTitle = ({ badge, title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="mb-16 text-center"
    >
      {badge && (
        <span
          className="
            inline-block
            rounded-full
            border
            border-blue-500/20
            bg-blue-500/10
            px-4
            py-2
            text-sm
            font-semibold
            text-blue-400
          "
        >
          {badge}
        </span>
      )}

      <h2
        className="
          mt-6
          text-4xl
          font-bold
          text-white
          lg:text-5xl
        "
      >
        {title}
      </h2>

      <p
        className="
          mx-auto
          mt-6
          max-w-3xl
          text-lg
          leading-8
          text-slate-400
        "
      >
        {subtitle}
      </p>
    </motion.div>
  );
};

export default SectionTitle;