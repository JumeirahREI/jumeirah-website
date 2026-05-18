import modelW1Image from "@/../public/images/sanaa-towers/sanaa-towers-model-w1.webp";
import modelW2Image from "@/../public/images/sanaa-towers/sanaa-towers-model-w2.webp";
import { ModelData } from "@/data/types";

const layoutImages = [
  { image: modelW1Image, alt: "towers.tower-b.model-w.layout.images.image-1" },
  { image: modelW2Image, alt: "towers.tower-b.model-w.layout.images.image-2" },
];

export const modelW: ModelData<"SanaaTowers"> = {
  name: "towers.tower-b.model-w.name",
  layout: {
    description: "towers.tower-b.model-w.layout.description",
    images: layoutImages,
  },
  details: [
    {
      images: layoutImages,
      sections: [
        {
          title: "section-titles.guest-section",
          rooms: [
            { key: "majlis-guest-lounge", dimensions: "8.30m x 3.95m" },
            { key: "majlis-bathroom", dimensions: "2.30m x 2.10m" },
          ],
        },
        {
          title: "section-titles.family-wing-section",
          rooms: [
            { key: "living-room", dimensions: "5.60m x 3.70m" },
            { key: "balcony", dimensions: "3.40m x 1.45m" },
            { key: "kitchen", dimensions: "4.30m x 3.70m" },
            { key: "main-bathroom", dimensions: "2.70m x 1.70m" },
          ],
        },
        {
          title: "section-titles.master-bedroom-suite",
          rooms: [
            { key: "master-bedroom", dimensions: "6.65m x 4.30m" },
            { key: "dressing-room", dimensions: "3.60m x 2.10m" },
            { key: "bathroom", dimensions: "3.10m x 2.10m" },
          ],
        },
      ],
    },
    {
      images: layoutImages,
      sections: [
        {
          title: "section-titles.family-wing-section",
          rooms: [
            { key: "living-room", dimensions: "5.60m x 3.75m" },
            { key: "balcony", dimensions: "3.40m x 1.45m" },
            { key: "buffet-pantry", dimensions: "3.75m x 1.70m" },
            { key: "laundry-room", dimensions: "3.20m x 1.80m" },
            { key: "storage-room", dimensions: "3.20m x 1.70m" },
            { key: "bedroom-1", dimensions: "5.60m x 4.30m" },
            { key: "bedroom-2", dimensions: "5.70m x 3.95m" },
            { key: "main-bathroom", dimensions: "2.70m x 1.70m" },
          ],
        },
        {
          title: "section-titles.bedroom-wing-section",
          rooms: [
            { key: "bedroom", dimensions: "4.55m x 3.75m" },
            { key: "dressing-room", dimensions: "2.30m x 1.70m" },
            { key: "bathroom", dimensions: "2.30m x 1.95m" },
          ],
        },
        {
          title: "section-titles.master-bedroom-suite",
          rooms: [
            { key: "master-bedroom", dimensions: "5.35m x 4.90m" },
            { key: "dressing-room", dimensions: "3.00m x 2.10m" },
            { key: "bathroom", dimensions: "2.70m x 2.20m" },
          ],
        },
      ],
    },
  ],
};
