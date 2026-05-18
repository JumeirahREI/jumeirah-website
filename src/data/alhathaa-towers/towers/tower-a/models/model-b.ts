import modelBImage from "@/../public/images/alhathaa-towers/alhathaa-towers-model-3d-b.webp";
import modelBNumberedImage from "@/../public/images/alhathaa-towers/alhathaa-towers-numbered-model-3d-b.webp";
import { ModelData } from "@/data/types";

export const modelB: ModelData<"Alhathaa-Towers"> = {
  name: "towers.tower-a.model-b.name",
  layout: {
    description: "towers.tower-a.model-b.layout.description",
    images: [
      {
        image: modelBImage,
        alt: "towers.tower-a.model-b.layout.images.image-1",
      },
    ],
  },
  details: [
    {
      images: [
        {
          image: modelBNumberedImage,
          alt: "towers.tower-a.model-b.layout.images.image-1",
        },
      ],
      sections: [
        {
          title: "section-titles.guest-section",
          rooms: [
            { key: "guest-reception-hall", dimensions: "3.10m x 2.60m" },
            { key: "majlis-guest-lounge", dimensions: "6.10m x 3.60m" },
            { key: "majlis-bathroom", dimensions: "1.90m x 1.90m" },
          ],
        },
        {
          title: "section-titles.family-wing-section",
          rooms: [
            { key: "living-room", dimensions: "8.20m x 4.00m" },
            { key: "storage-room", dimensions: "3.90m x 1.90m" },
            { key: "balcony", dimensions: "2.45m x 1.40m" },
            { key: "kitchen", dimensions: "4.00m x 3.50m" },
            { key: "bedroom-1", dimensions: "4.00m x 4.00m" },
            { key: "main-bathroom", dimensions: "2.00m x 1.90m" },
          ],
        },
        {
          title: "section-titles.master-bedroom-suite",
          rooms: [
            { key: "master-bedroom", dimensions: "4.00m x 4.00m" },
            { key: "bathroom", dimensions: "1.90m x 1.80m" },
          ],
        },
      ],
    },
  ],
};
