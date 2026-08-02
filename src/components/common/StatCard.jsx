import GlassCard from "./GlassCard";

const StatCard = ({ value, label }) => {
  return (
    <GlassCard className="p-8 text-center">
      <h3
        className="
          text-4xl
          font-bold
          text-blue-400
        "
      >
        {value}
      </h3>

      <p
        className="
          mt-3
          text-slate-400
        "
      >
        {label}
      </p>
    </GlassCard>
  );
};

export default StatCard;