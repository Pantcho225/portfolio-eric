import { Briefcase, GraduationCap, Rocket, CheckCircle2 } from "lucide-react";

const TimelineCard = ({ item, index }) => {

  const isLeft = index % 2 === 0;

  const getIcon = () => {

    switch (item.type) {

      case "education":
        return <GraduationCap size={22} />;

      case "project":
        return <Rocket size={22} />;

      case "work":
        return <Briefcase size={22} />;

      default:
        return <CheckCircle2 size={22} />;

    }

  };

  return (

    <div
      className={`
        relative
        flex
        ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}
        items-start
        gap-8
      `}
    >

      {/* Ligne centrale */}

      <div
        className="
          absolute
          left-4
          top-10
          z-20
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          border-4
          border-slate-950
          bg-blue-600
          text-white
          shadow-xl
          md:left-1/2
          md:-translate-x-1/2
        "
      >

        {getIcon()}

      </div>

      {/* Carte */}

      <div
        className={`
          ml-16
          w-full
          rounded-3xl
          border
          border-white/10
          bg-slate-900/70
          p-8
          backdrop-blur
          shadow-xl
          transition
          duration-300
          hover:-translate-y-1
          hover:border-blue-500/30
          md:ml-0
          md:w-[46%]
        `}
      >

        <span
          className="
            inline-block
            rounded-full
            bg-blue-500/10
            px-4
            py-2
            text-sm
            font-semibold
            text-blue-300
          "
        >
          {item.year}
        </span>

        <h3
          className="
            mt-5
            text-2xl
            font-bold
            text-white
          "
        >
          {item.title}
        </h3>

        <p
          className="
            mt-4
            leading-8
            text-slate-300
          "
        >
          {item.description}
        </p>

        {item.tech?.length > 0 && (

          <div className="mt-6 flex flex-wrap gap-3">

            {item.tech.map((tech) => (

              <span
                key={tech}
                className="
                  rounded-full
                  border
                  border-blue-500/20
                  bg-blue-500/10
                  px-3
                  py-1
                  text-sm
                  text-blue-300
                "
              >
                {tech}
              </span>

            ))}

          </div>

        )}

      </div>

    </div>

  );

};

export default TimelineCard;