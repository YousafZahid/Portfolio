import { projects } from "../../data/projects";
import { notFound } from "next/navigation";
import CaseStudyView from "../../components/CaseStudyView";

export function generateStaticParams() {
  return projects.filter((p) => p.slug).map((p) => ({ slug: p.slug! }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project || !project.caseStudy) return notFound();
  return <CaseStudyView project={project} />;
}
