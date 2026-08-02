const Button = ({
  children,
  variant = "primary",
  type = "button",
  href,
  target,
  rel,
  download = false,
  disabled = false,
  fullWidth = false,
  onClick,
  className = "",
}) => {
  const baseClasses = `
    inline-flex
    items-center
    justify-center

    rounded-2xl

    px-6
    py-3

    font-semibold
    tracking-wide

    transition-all
    duration-300

    focus:outline-none
    focus:ring-2
    focus:ring-blue-500
    focus:ring-offset-2
    focus:ring-offset-slate-950

    disabled:cursor-not-allowed
    disabled:opacity-50

    ${fullWidth ? "w-full" : ""}
  `;

  const variants = {
    primary: `
      bg-gradient-to-r
      from-blue-600
      to-blue-500

      text-white

      shadow-lg
      shadow-blue-600/30

      hover:-translate-y-1
      hover:shadow-blue-500/40
    `,

    secondary: `
      bg-gradient-to-r
      from-amber-400
      to-amber-500

      text-slate-900

      shadow-lg
      shadow-amber-500/30

      hover:-translate-y-1
      hover:shadow-amber-500/40
    `,

    outline: `
      border
      border-blue-500

      text-blue-400

      hover:bg-blue-500
      hover:text-white
    `,
  };

  const classes = `
    ${baseClasses}
    ${variants[variant]}
    ${className}
  `;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        download={download}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  );
};

export default Button;