import modelKImage from "@/../public/images/sanaa-towers/sanaa-towers-model-k.webp";
import { ModelData } from "@/data/types";

export const modelK: ModelData<"SanaaTowers"> = {
  name: "towers.tower-b.model-k.name",
  layout: {
    description: "towers.tower-b.model-k.layout.description",
    images: [
      {
        image: modelKImage,
        alt: "towers.tower-b.model-k.layout.images.image-1",
      },
    ],
  },
  details: [
    {
      images: [
        {
          image: modelKImage,
          alt: "towers.tower-b.model-k.layout.images.image-1",
        },
      ],
      sections: [
        {
          title: "section-titles.guest-section",
          rooms: [
            { key: "guest-reception-hall", dimensions: "3.60m x 3.60m" },
            { key: "majlis-bathroom", dimensions: "2.00m x 1.50m" },
            { key: "majlis-guest-lounge", dimensions: "6.50m x 3.60m" },
          ],
        },
        {
          title: "section-titles.family-wing-section",
          rooms: [
            { key: "living-room", dimensions: "8.00m x 4.40m" },
            { key: "balcony", dimensions: "3.95m x 1.50m" },
            { key: "kitchen", dimensions: "4.35m x 3.60m" },
            { key: "storage-room", dimensions: "3.20m x 2.40m" },
            { key: "bedroom-1", dimensions: "5.00m x 4.05m" },
            { key: "bedroom-2", dimensions: "5.00m x 3.95m" },
            { key: "bedroom-3", dimensions: "5.00m x 3.60m" },
            { key: "main-bathroom", dimensions: "3.10m x 1.90m" },
          ],
        },
        {
          title: "section-titles.master-bedroom-suite",
          rooms: [
            { key: "master-bedroom", dimensions: "5.85m x 4.05m" },
            { key: "dressing-room", dimensions: "2.25m x 1.90m" },
            { key: "bathroom", dimensions: "2.30m x 1.95m" },
          ],
        },
      ],
    },
  ],
};
