"use client";

import MediaDisplay from "@/app/[locale]/(main)/projects/components/project-towers-display/media-display";
import { Project } from "@/data/types";

export default function MediaPanel({ projectKey }: { projectKey: Project }) {
  return (
    <div className="media">
      <MediaDisplay
        className="relative h-full min-h-52"
        projectKey={projectKey}
      />
    </div>
  );
}
