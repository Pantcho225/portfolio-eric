const Badge = ({ children }) => {
  return (
    <span
      className="
        rounded-full
        border
        border-blue-500/20
        bg-blue-500/10
        px-4
        py-2
        text-sm
        font-medium
        text-blue-300
        transition
        hover:bg-blue-500/20
      "
    >
      {children}
    </span>
  );
};

export default Badge;