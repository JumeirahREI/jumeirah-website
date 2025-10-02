"use client";

import MediaDisplay from "@/app/[locale]/(main)/projects/components/project-towers-display/media-display";
import { useTowersDisplayContext } from "@/app/[locale]/(main)/projects/components/project-towers-display/towers-display-context";
import { Project } from "@/data/types";

export default function MediaPanel({ projectKey }: { projectKey: Project }) {
  const { selectedDataTab } = useTowersDisplayContext();

  if (selectedDataTab === "details") return;

  return (
    <div className="media">
      <MediaDisplay
        className="relative h-full min-h-52"
        projectKey={projectKey}
      />
    </div>
  );
}
