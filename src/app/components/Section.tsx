import { ReactNode } from "react";

export default function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="section-dark py-24 px-4 max-w-5xl mx-auto my-12">
  <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-yellow-300 drop-shadow-[0_2px_8px_rgba(255,255,255,0.25)] text-center">
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
}
