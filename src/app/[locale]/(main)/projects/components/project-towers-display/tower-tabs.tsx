"use client";

import { Project, ProjectData } from "@/data/types";
import { useTranslations } from "next-intl";
import { KeyboardEvent, useCallback } from "react";
import { useTowersDisplayContext } from "./towers-display-context";

interface TowerTabsProps {
  projectData: ProjectData<Project>;
  tabPanelId?: string;
  tabListId?: string;
}

export default function TowerTabs({
  projectData,
  tabPanelId,
  tabListId,
}: TowerTabsProps) {
  const context = useTowersDisplayContext();
  const t = useTranslations(projectData.projectKey);
  const { towersSection } = projectData;
  const selectedTower = context.selectedTower;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
      if (!towersSection) return;

      const lastIndex = towersSection.length - 1;
      let nextIndex = index;

      switch (e.key) {
        case "ArrowRight":
          e.preventDefault();
          nextIndex = index >= lastIndex ? 0 : index + 1;
          break;
        case "ArrowLeft":
          e.preventDefault();
          nextIndex = index <= 0 ? lastIndex : index - 1;
          break;
        case "Home":
          e.preventDefault();
          nextIndex = 0;
          break;
        case "End":
          e.preventDefault();
          nextIndex = lastIndex;
          break;
        default:
          return;
      }

      context.setSelectedTower(nextIndex);
      // Focus the newly selected tab
      const nextTab = document.getElementById(`tower-tab-${nextIndex}`);
      nextTab?.focus();
    },
    [towersSection, context],
  );

  return (
    <div
      className="flex items-center justify-center gap-4"
      role="tablist"
      aria-label="Project towers"
      id={tabListId}
    >
      {towersSection?.map((tower, index) => {
        const isSelected = selectedTower === index;
        const tabId = `tower-tab-${index}`;

        return (
          <TabButton
            key={index}
            id={tabId}
            isSelected={isSelected}
            onClick={() => context.setSelectedTower(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            aria-selected={isSelected}
            aria-controls={tabPanelId}
            role="tab"
            tabIndex={isSelected ? 0 : -1}
          >
            {t.rich(tower.name, {
              span: (s) => <span className="font-semibold">{s}</span>,
            })}
          </TabButton>
        );
      })}
    </div>
  );
}

interface TabButtonProps {
  id?: string;
  isSelected: boolean;
  onClick: () => void;
  onKeyDown: (e: KeyboardEvent<HTMLButtonElement>, index: number) => void;
  "aria-selected": boolean;
  "aria-controls"?: string;
  role: string;
  tabIndex: number;
  children: React.ReactNode;
}

function TabButton({
  id,
  isSelected,
  onClick,
  onKeyDown,
  children,
  ...props
}: TabButtonProps) {
  return (
    <button
      id={id}
      data-selected={isSelected}
      onClick={onClick}
      onKeyDown={(e) => onKeyDown(e, parseInt(id?.split("-").pop() || "0", 10))}
      className="border-gradient-b border-gradient-width-0.5 border-gradient-to-[#14141400] data-[selected=true]:border-gradient-from-[#7A7A7A99] border-gradient-from-[#7A7A7A00] data-[selected=true]:text-primary active:text-foreground/50 relative z-30 cursor-pointer rounded-2xl bg-linear-to-b from-[#1A1A1A]/0 to-[#1A1A1A]/0 p-0.5 px-6 py-2 text-lg transition-colors before:transition-colors hover:bg-neutral-600/30 active:bg-neutral-600/50 data-[selected=true]:from-[#1A1A1A] lg:px-8 lg:py-3 lg:text-2xl"
      {...props}
    >
      <span className="sr-only">{isSelected ? "Selected: " : ""}</span>
      {children}
    </button>
  );
}
