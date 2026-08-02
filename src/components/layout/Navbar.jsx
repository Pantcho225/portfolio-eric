import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { navigation } from "../../data/navigation";
import Button from "../common/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="
        fixed
        inset-x-0
        top-0
        z-50
        border-b
        border-white/10
        bg-slate-950/70
        backdrop-blur-2xl
        supports-[backdrop-filter]:bg-slate-950/60
        transition-all
        duration-300
      "
    >
      <nav
        className="
          mx-auto
          flex
          h-20
          max-w-7xl
          items-center
          justify-between
          px-6
          lg:px-8
        "
      >
        {/* ========================= */}
        {/* Logo */}
        {/* ========================= */}

        <a
          href="#accueil"
          className="
            group
            flex
            items-center
            gap-3
          "
        >
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              from-blue-500
              to-indigo-700
              text-lg
              font-black
              tracking-wider
              text-white
              shadow-xl
              shadow-blue-500/30
              transition-all
              duration-300
              group-hover:-translate-y-1
              group-hover:scale-105
            "
          >
            EAK
          </div>

          <div className="hidden sm:block">
            <p className="text-base font-bold tracking-wide text-white">
              Eric Adia Kore
            </p>

            <p className="text-sm text-slate-400">
              Full Stack Developer
            </p>
          </div>
        </a>

        {/* ========================= */}
        {/* Navigation Desktop */}
        {/* ========================= */}

        <div className="hidden items-center gap-10 md:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="
                relative
                text-sm
                font-medium
                tracking-wide
                text-slate-300
                transition-all
                duration-300
                hover:text-white

                after:absolute
                after:left-0
                after:-bottom-2
                after:h-0.5
                after:w-0
                after:rounded-full
                after:bg-blue-500
                after:transition-all
                after:duration-300

                hover:after:w-full
              "
            >
              {item.name}
            </a>
          ))}

          <Button
            href="/public/cv-eric-adia-kore.pdf"
            download
            className="
    rounded-2xl
    bg-gradient-to-r
    from-blue-600
    to-blue-500
    px-6
    py-3
    shadow-lg
    shadow-blue-600/30
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-blue-500/40
            "
          >
            Télécharger CV
          </Button>
        </div>

        {/* ========================= */}
        {/* Bouton Mobile */}
        {/* ========================= */}

        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="
              rounded-xl
              border
              border-white/10
              p-3
              text-white
              transition
              hover:bg-slate-800
            "
            aria-label="Ouvrir le menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* ========================= */}
      {/* Menu Mobile */}
      {/* ========================= */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              md:hidden
              border-t
              border-white/10
              bg-slate-950/95
              backdrop-blur-xl
            "
          >
            <div
              className="
                flex
                flex-col
                gap-6
                p-6
              "
            >
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="
                    text-lg
                    font-medium
                    text-slate-300
                    transition
                    hover:text-blue-400
                  "
                >
                  {item.name}
                </a>
              ))}

              <Button
                className="
                  w-full
                  justify-center
                  rounded-2xl
                  bg-gradient-to-r
                  from-blue-600
                  to-blue-500
                "
              >
                Télécharger CV
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;