import modelDImage from "@/../public/images/sanaa-towers/sanaa-towers-model-d.webp";
import { ModelData } from "@/data/types";

export const modelD: ModelData<"SanaaTowers"> = {
  name: "towers.tower-a.model-d.name",
  layout: {
    description: "towers.tower-a.model-d.layout.description",
    images: [
      {
        image: modelDImage,
        alt: "towers.tower-a.model-d.layout.images.image-1",
      },
    ],
  },
  details: [
    {
      images: [
        {
          image: modelDImage,
          alt: "towers.tower-a.model-d.layout.images.image-1",
        },
      ],
      sections: [
        {
          title: "section-titles.guest-section",
          rooms: [
            { key: "guest-reception-hall", dimensions: "4.50m x 3.70m" },
            { key: "majlis-bathroom", dimensions: "2.25m x 2.15m" },
            { key: "majlis-guest-lounge", dimensions: "7.50m x 3.75m" },
          ],
        },
        {
          title: "section-titles.family-wing-section",
          rooms: [
            { key: "living-room", dimensions: "9.75m x 4.50m" },
            { key: "balcony", dimensions: "4.45m x 1.60m" },
            { key: "kitchen", dimensions: "5.00m x 3.10m" },
            { key: "storage-room", dimensions: "3.00m x 1.50m" },
            { key: "maid-room", dimensions: "3.00m x 1.45m" },
            { key: "bedroom-1", dimensions: "5.10m x 3.10m" },
            { key: "bedroom-2", dimensions: "5.15m x 4.50m" },
            { key: "main-bathroom", dimensions: "3.40m x 2.10m" },
          ],
        },
        {
          title: "section-titles.private-bedroom-suite",
          rooms: [
            { key: "bedroom", dimensions: "5.10m x 3.50m" },
            { key: "bathroom", dimensions: "2.35m x 1.45m" },
          ],
        },
        {
          title: "section-titles.master-bedroom-suite",
          rooms: [
            { key: "master-bedroom", dimensions: "5.00m x 4.70m" },
            { key: "dressing-room", dimensions: "3.45m x 2.15m" },
            { key: "bathroom", dimensions: "2.70m x 1.50m" },
          ],
        },
      ],
    },
  ],
};
