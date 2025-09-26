"use client";

import { Project, ProjectData } from "@/data/types";
import { useTranslations } from "next-intl";
import { useTowersDisplayContext } from "./towers-display-context";

export default function TowerTabs({
  projectData,
}: {
  projectData: ProjectData<Project>;
}) {
  const context = useTowersDisplayContext();
  const t = useTranslations(projectData.projectKey);
  const { towersSection } = projectData;

  return (
    <div className="flex items-center justify-center gap-4">
      {towersSection?.map((tower, index) => (
        <TabButton
          key={index}
          isSelected={context.selectedTower === index}
          onClick={() => context.setSelectedTower(index)}
        >
          {t.rich(tower.name, {
            span: (s) => <span className="font-semibold">{s}</span>,
          })}
        </TabButton>
      ))}
    </div>
  );
}

function TabButton({
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
      className="border-gradient-b border-gradient-to-[#14141400] data-[selected=true]:border-gradient-from-[#7A7A7A99] border-gradient-from-[#7A7A7A00] data-[selected=true]:text-primary active:text-foreground/50 relative z-30 cursor-pointer rounded-2xl bg-linear-to-b from-[#1A1A1A]/0 to-[#1A1A1A]/0 px-6 py-2 text-lg transition-colors before:transition-colors hover:bg-neutral-600/30 active:bg-neutral-600/50 data-[selected=true]:from-[#1A1A1A] 2xl:px-10 2xl:py-3 2xl:text-4xl"
    >
      {children}
    </button>
  );
}
