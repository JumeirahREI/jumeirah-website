"use client";

import { useTowersDisplayContext } from "@/app/[locale]/projects/components/project-towers-display/towers-display-context";
import { Project, ProjectData } from "@/data/types";
import { useTranslations } from "next-intl";

export default function ModelTabs({
  projectData,
}: {
  projectData: ProjectData<Project>;
}) {
  const t = useTranslations(projectData.projectKey);
  const { selectedTower, selectedModel, setSelectedModel } =
    useTowersDisplayContext();

  const { towersSection } = projectData;
  const models = towersSection[selectedTower].models;

  return (
    <div className="flex items-center gap-3 2xl:gap-6">
      {models.map((model, index) => (
        <ModelTabButton
          key={index}
          isSelected={selectedModel === index}
          onClick={() => setSelectedModel(index)}
        >
          {t.rich(model.name, {
            span: (s) => (
              <span className="group-data-[selected=true]:text-primary">
                {s}
              </span>
            ),
            i: (s) => <sup className="text-sm font-normal">{s}</sup>,
          })}
        </ModelTabButton>
      ))}
    </div>
  );
}

function ModelTabButton({
  isSelected,
  onClick,
  children,
}: {
  isSelected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      data-selected={isSelected}
      onClick={onClick}
      className="group border-gradient-t border-gradient-to-[#14141400] data-[selected=true]:border-gradient-from-[#7A7A7A99] data-[selected=true]:text-foreground border-gradient-from-[#7A7A7A00] active:text-foreground/50 relative z-30 cursor-pointer rounded-2xl bg-gradient-to-t from-[#1A1A1A]/0 to-[#1A1A1A]/0 p-3 font-semibold text-nowrap text-[#DFDFDF]/70 transition-colors before:transition-colors hover:bg-neutral-600/30 active:bg-neutral-600/50 data-[selected=true]:from-[#1A1A1A] 2xl:text-3xl"
    >
      {children}
    </button>
  );
}
