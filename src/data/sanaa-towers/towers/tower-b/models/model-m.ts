import modelMImage from "@/../public/images/sanaa-towers/sanaa-towers-model-m.webp";
import { ModelData } from "@/data/types";

export const modelM: ModelData<"SanaaTowers"> = {
  name: "towers.tower-b.model-m.name",
  layout: {
    description: "towers.tower-b.model-m.layout.description",
    images: [
      {
        image: modelMImage,
        alt: "towers.tower-b.model-m.layout.images.image-1",
      },
    ],
  },
  details: [
    {
      images: [
        {
          image: modelMImage,
          alt: "towers.tower-b.model-m.layout.images.image-1",
        },
      ],
      sections: [
        {
          title: "section-titles.guest-section",
          rooms: [
            { key: "guest-reception-hall", dimensions: "3.90m x 2.35m" },
            { key: "majlis-bathroom", dimensions: "2.00m x 1.70m" },
            { key: "majlis-guest-lounge", dimensions: "7.00m x 3.75m" },
          ],
        },
        {
          title: "section-titles.family-wing-section",
          rooms: [
            { key: "living-room", dimensions: "8.60m x 3.40m" },
            { key: "balcony", dimensions: "3.25m x 1.30m" },
            { key: "kitchen", dimensions: "3.75m x 3.35m" },
            { key: "storage-room", dimensions: "2.10m x 1.75m" },
            { key: "bedroom-1", dimensions: "5.30m x 4.00m" },
            { key: "bedroom-2", dimensions: "4.50m x 3.25m" },
            { key: "main-bathroom", dimensions: "3.00m x 1.85m" },
          ],
        },
        {
          title: "section-titles.master-bedroom-suite",
          rooms: [
            { key: "master-bedroom", dimensions: "4.30m x 3.90m" },
            { key: "dressing-room", dimensions: "2.80m x 1.85m" },
            { key: "bathroom", dimensions: "2.95m x 2.30m" },
          ],
        },
      ],
    },
  ],
};
