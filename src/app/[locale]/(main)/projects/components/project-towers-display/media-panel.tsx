"use client";

import MediaDisplay from "@/app/[locale]/(main)/projects/components/project-towers-display/media-display";
import { Project } from "@/data/types";

export default function MediaPanel({
  projectKey,
  className,
}: {
  projectKey: Project;
  className?: string;
}) {
  return (
    <div className={className}>
      <MediaDisplay
        className="relative h-full min-h-52 lg:aspect-[3/4] xl:aspect-[4/5] 2xl:aspect-square"
        projectKey={projectKey}
      />
    </div>
  );
}
