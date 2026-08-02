import Container from "../../components/common/Container";
import SectionTitle from "../../components/common/SectionTitle";

import CaseStudyHero from "./CaseStudyHero";
import CaseStudyGallery from "./CaseStudyGallery";
import CaseStudyFeatures from "./CaseStudyFeatures";
import CaseStudyArchitecture from "./CaseStudyArchitecture";
import CaseStudyStats from "./CaseStudyStats";
import CaseStudyTimeline from "./CaseStudyTimeline";

const CaseStudy = () => {
  return (
    <section
      id="etude-de-cas"
      className="py-28"
    >
      <Container>
        <SectionTitle
          title="Étude de cas : SaaS de gestion de copropriété"
          subtitle="Conception et développement d'une plateforme SaaS moderne destinée à digitaliser la gestion des copropriétés."
        />

        <CaseStudyHero />

        <CaseStudyGallery />

        <CaseStudyFeatures />

        <CaseStudyArchitecture />

        <CaseStudyStats />

        <CaseStudyTimeline />
      </Container>
    </section>
  );
};

export default CaseStudy;