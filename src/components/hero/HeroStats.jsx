import { motion } from "framer-motion";

const HeroStats = ({ items = [], className = "" }) => {
  if (items.length === 0) return null;

  return (
    <div className={`mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 ${className}`}>
      {items.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 + index * 0.1 }}
          className="
            rounded-2xl
            border
            border-white/10
            bg-white/5
            p-5
            text-center
            backdrop-blur
          "
        >
          {item.value && <div className="text-2xl font-bold text-blue-400">{item.value}</div>}

          <div className={`${item.value ? "mt-2" : ""} text-sm text-slate-300`}>
            {item.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default HeroStats;
