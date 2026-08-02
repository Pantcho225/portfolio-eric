import Container from "./Container";

const Section = ({ id, children, className = "" }) => {
  return (
    <section
      id={id}
      className={`
        relative
        py-28
        overflow-hidden
        ${className}
      `}
    >
      <Container>
        {children}
      </Container>
    </section>
  );
};

export default Section;