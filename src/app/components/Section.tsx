import React, { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  customClass?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, customClass }) => {
  return (
    <section id={id} className={`section-dark py-16 md:py-24 px-4 md:px-8 mx-auto my-8 md:my-12 ${customClass ? customClass : 'max-w-5xl'}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 md:mb-12 text-center">
        <span 
          className="bg-clip-text inline-block"
          style={{
            backgroundImage: 'linear-gradient(to right, #fde047, #fbbf24, #ec4899, #a855f7, #9333ea)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 4px 12px rgba(255, 255, 255, 0.3)'
          }}
        >
          {title}
        </span>
      </h2>
      <div>{children}</div>
    </section>
  );
};

export default Section;
