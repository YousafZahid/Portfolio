import React, { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  kicker?: string;
  children: ReactNode;
  customClass?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, kicker, children, customClass }) => {
  return (
    <section
      id={id}
      className={`relative w-full mx-auto px-6 md:px-10 py-24 md:py-28 ${
        customClass ? customClass : "max-w-6xl"
      }`}
    >
      <div className="mb-14">
        {kicker && <span className="kicker">{kicker}</span>}
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white mt-3">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
};

export default Section;
