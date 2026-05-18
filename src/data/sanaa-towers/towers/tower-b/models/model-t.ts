import modelT1Image from "@/../public/images/sanaa-towers/sanaa-towers-model-t1.webp";
import modelT2Image from "@/../public/images/sanaa-towers/sanaa-towers-model-t2.webp";
import { ModelData } from "@/data/types";

const layoutImages = [
  { image: modelT1Image, alt: "towers.tower-b.model-t.layout.images.image-1" },
  { image: modelT2Image, alt: "towers.tower-b.model-t.layout.images.image-2" },
];

export const modelT: ModelData<"SanaaTowers"> = {
  name: "towers.tower-b.model-t.name",
  layout: {
    description: "towers.tower-b.model-t.layout.description",
    images: layoutImages,
  },
  details: [
    {
      images: layoutImages,
      sections: [
        {
          title: "section-titles.family-wing-section",
          rooms: [
            { key: "living-room", dimensions: "6.50m x 3.90m" },
            { key: "balcony", dimensions: "3.15m x 1.50m" },
            { key: "kitchen", dimensions: "4.00m x 3.90m" },
            { key: "storage-room", dimensions: "3.15m x 1.55m" },
            { key: "main-bathroom", dimensions: "3.10m x 1.95m" },
          ],
        },
        {
          title: "section-titles.master-bedroom-suite",
          rooms: [
            { key: "master-bedroom", dimensions: "6.00m x 4.20m" },
            { key: "dressing-room", dimensions: "3.75m x 2.35m" },
            { key: "bathroom", dimensions: "2.55m x 2.35m" },
          ],
        },
      ],
    },
    {
      images: layoutImages,
      sections: [
        {
          title: "section-titles.guest-section",
          rooms: [
            { key: "majlis-guest-lounge", dimensions: "6.70m x 3.90m" },
            { key: "majlis-bathroom", dimensions: "2.00m x 1.50m" },
          ],
        },
        {
          title: "section-titles.family-wing-section",
          rooms: [
            { key: "storage-room", dimensions: "3.15m x 1.55m" },
            { key: "balcony", dimensions: "3.15m x 1.50m" },
            { key: "bedroom-1", dimensions: "5.15m x 3.90m" },
            { key: "bedroom-2", dimensions: "4.60m x 3.50m" },
            { key: "main-bathroom", dimensions: "3.10m x 1.95m" },
          ],
        },
        {
          title: "section-titles.master-bedroom-suite",
          rooms: [
            { key: "master-bedroom", dimensions: "5.80m x 3.90m" },
            { key: "dressing-room", dimensions: "2.35m x 1.90m" },
            { key: "bathroom", dimensions: "2.35m x 2.20m" },
          ],
        },
      ],
    },
  ],
};
