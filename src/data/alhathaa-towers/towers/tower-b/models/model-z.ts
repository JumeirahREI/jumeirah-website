import modelZImage from "@/../public/images/alhathaa-towers/alhathaa-towers-model-3d-z2.webp";
import modelZNumberedImage from "@/../public/images/alhathaa-towers/alhathaa-towers-numbered-model-3d-z2.webp";
import { ModelData } from "@/data/types";

export const modelZ: ModelData<"Alhathaa-Towers"> = {
  name: "towers.tower-b.model-z.name",
  layout: {
    description: "towers.tower-b.model-z.layout.description",
    images: [
      {
        image: modelZImage,
        alt: "towers.tower-b.model-z.layout.images.image-1",
      },
    ],
  },
  details: [
    {
      images: [
        {
          image: modelZNumberedImage,
          alt: "towers.tower-b.model-z.layout.images.image-1",
        },
      ],
      sections: [
        {
          title: "section-titles.guest-section",
          rooms: [
            { key: "guest-reception-hall", dimensions: "3.60m x 1.90m" },
            { key: "majlis-guest-lounge", dimensions: "6.00m x 3.60m" },
            { key: "majlis-bathroom", dimensions: "2.10m x 1.70m" },
          ],
        },
        {
          title: "section-titles.family-wing-section",
          rooms: [
            { key: "living-room", dimensions: "9.10m x 4.85m" },
            { key: "balcony", dimensions: "4.60m x 1.80m" },
            { key: "maid-room", dimensions: "1.90m x 1.30m" },
            { key: "kitchen", dimensions: "4.00m x 3.10m" },
            { key: "bedroom-1", dimensions: "4.15m x 4.15m" },
            { key: "bedroom-2", dimensions: "4.15m x 4.00m" },
            { key: "main-bathroom", dimensions: "2.90m x 2.70m" },
          ],
        },
        {
          title: "section-titles.master-bedroom-suite",
          rooms: [
            { key: "master-bedroom", dimensions: "5.55m x 4.00m" },
            { key: "bathroom", dimensions: "2.10m x 1.90m" },
          ],
        },
      ],
    },
  ],
};
