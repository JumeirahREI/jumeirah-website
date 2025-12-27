"use client";

import AppLink from "@/components/app-link";
import { Project, ProjectData } from "@/data/types";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

export default function VideoSection({
  projectData,
}: {
  projectData: ProjectData<Project>;
}) {
  const t = useTranslations(projectData.projectKey);
  const ct = useTranslations("Common");

  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!projectData.videoSection) return null;

  const { title, description, videoUrl } = projectData.videoSection;

  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.match(
      /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([\w-]{11})/,
    )?.[1];
    return videoId
      ? `https://www.youtube.com/embed/${videoId}?autoplay=1`
      : url;
  };

  return (
    <>
      <section className="container bg-black py-16 text-white">
        <div className="mx-auto flex flex-col items-center gap-12 md:flex-row">
          {/* Video Thumbnail */}
          <div
            className="group relative w-full shrink-0 cursor-pointer md:w-2/5 2xl:w-2/6"
            onClick={() => setIsModalOpen(true)}
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-4xl bg-gradient-to-br from-blue-400/30 to-blue-600/30 backdrop-blur">
              {/* Placeholder for video thumbnail - you can replace with actual thumbnail */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all group-hover:bg-white/30">
                  <svg
                    className="ml-1 h-10 w-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <Image
                src={projectData.videoSection.videoThumbnail}
                alt={t(projectData.videoSection.title)}
                className="-z-10 object-cover"
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 47vw, (max-width: 1536px) 40vw, 28vw"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-light md:text-4xl lg:text-5xl">
              {t(title)
                .split("—")
                .map((part, i) => (
                  <span key={i}>
                    {i > 0 && "— "}
                    {part.includes("Modern Lifestyle") ? (
                      <span className="text-yellow-400">{part.trim()}</span>
                    ) : (
                      part
                    )}
                  </span>
                ))}
            </h2>
            <p className="text-lg leading-relaxed text-gray-400">
              {t(description)}
            </p>
            <div className="flex gap-4 pt-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="cursor-pointer rounded-full border border-white/30 px-6 py-3 transition-all hover:bg-white/10"
              >
                {ct("watch-trailer")}
              </button>
              <AppLink
                href="/contact"
                className="rounded-full bg-yellow-400 px-6 py-3 font-medium text-black transition-all hover:bg-yellow-500"
              >
                {ct("contact-us")}
              </AppLink>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex size-full items-center justify-center bg-black/90 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative aspect-video w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 text-white transition-colors hover:text-gray-300"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <iframe
              src={getYouTubeEmbedUrl(videoUrl)}
              className="h-full w-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
