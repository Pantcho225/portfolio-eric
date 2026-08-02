import Container from "../../components/common/Container";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section
      id="accueil"
      className="
        relative
        min-h-screen
        overflow-hidden
        flex
        items-center
        py-32
      "
    >
      <HeroBackground />

      <Container>
        <div
          className="
            grid
            items-center
            gap-20
            lg:grid-cols-2
          "
        >
          <HeroContent />

          <HeroImage />
        </div>
      </Container>
    </section>
  );
};

export default Hero;