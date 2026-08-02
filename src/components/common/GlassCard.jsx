const GlassCard = ({ children, className = "" }) => {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-xl
        shadow-blue-950/20
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-blue-500/40
        hover:shadow-blue-500/20
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;