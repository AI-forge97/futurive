interface SectionProps {
  leftHalf: React.ReactNode;
  rightHalf: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ leftHalf, rightHalf }) => {
  return (
    <section className="section overflow-x-hidden">
      <div className="container-content">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 order-2 md:order-1 flex flex-col justify-center md:justify-start px-4">{leftHalf}</div>
          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center md:justify-end px-4">{rightHalf}</div>
        </div>
      </div>
    </section>
  );
};

export default Section;
