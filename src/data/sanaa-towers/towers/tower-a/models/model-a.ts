import modelAImage from "@/../public/images/sanaa-towers/sanaa-towers-model-a.webp";
import { ModelData } from "@/data/types";

export const modelA: ModelData<"SanaaTowers"> = {
  name: "towers.tower-a.model-a.name",
  layout: {
    description: "towers.tower-a.model-a.layout.description",
    images: [
      {
        image: modelAImage,
        alt: "towers.tower-a.model-a.layout.images.image-1",
      },
    ],
  },
  details: [
    {
      images: [
        {
          image: modelAImage,
          alt: "towers.tower-a.model-a.layout.images.image-1",
        },
      ],
      sections: [
        {
          title: "section-titles.guest-section",
          rooms: [
            { key: "guest-reception-hall", dimensions: "3.75m x 3.10m" },
            { key: "majlis-bathroom", dimensions: "2.00m x 1.50m" },
            { key: "majlis-guest-lounge", dimensions: "7.00m x 3.75m" },
          ],
        },
        {
          title: "section-titles.family-wing-section",
          rooms: [
            { key: "living-room", dimensions: "9.55m x 4.65m" },
            { key: "balcony", dimensions: "5.55m x 1.70m" },
            { key: "kitchen", dimensions: "4.50m x 3.40m" },
            { key: "storage-room", dimensions: "2.00m x 1.55m" },
            { key: "maid-room", dimensions: "2.05m x 1.70m" },
            { key: "bedroom-1", dimensions: "4.25m x 3.60m" },
            { key: "bedroom-2", dimensions: "5.70m x 3.40m" },
            { key: "main-bathroom", dimensions: "3.05m x 2.10m" },
          ],
        },
        {
          title: "section-titles.private-bedroom-suite",
          rooms: [
            { key: "bedroom", dimensions: "4.20m x 4.10m" },
            { key: "bathroom", dimensions: "2.35m x 1.35m" },
          ],
        },
        {
          title: "section-titles.master-bedroom-suite",
          rooms: [
            { key: "master-bedroom", dimensions: "5.90m x 4.30m" },
            { key: "bathroom", dimensions: "2.65m x 1.45m" },
          ],
        },
      ],
    },
  ],
};
