import GlassCard from "./GlassCard";

const IconCard = ({ icon, title, subtitle }) => {
  return (
    <GlassCard
      className="
        p-5
        flex
        items-center
        gap-4
      "
    >
      <div
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-blue-500/10
          text-3xl
        "
      >
        {icon}
      </div>

      <div>
        <h3 className="font-semibold text-white">
          {title}
        </h3>

        <p className="text-sm text-slate-400">
          {subtitle}
        </p>
      </div>
    </GlassCard>
  );
};

export default IconCard;