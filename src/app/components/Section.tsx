import React, { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  customClass?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, customClass }) => {
  return (
    <section id={id} className={`section-dark py-24 px-4 mx-auto my-12 ${customClass ? customClass : 'max-w-5xl'}`}>
      <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-yellow-300 drop-shadow-[0_2px_8px_rgba(255,255,255,0.25)] text-center">
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
};

export default Section;
