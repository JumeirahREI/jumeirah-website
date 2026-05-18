import modelAImage from "@/../public/images/alhathaa-towers/alhathaa-towers-model-3d-a.webp";
import modelANumberedImage from "@/../public/images/alhathaa-towers/alhathaa-towers-numbered-model-3d-a.webp";
import { ModelData } from "@/data/types";

export const modelA: ModelData<"Alhathaa-Towers"> = {
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
          image: modelANumberedImage,
          alt: "towers.tower-a.model-a.layout.images.image-1",
        },
      ],
      sections: [
        {
          title: "section-titles.guest-section",
          rooms: [
            { key: "guest-reception-hall", dimensions: "4.65m x 4.00m" },
            { key: "majlis-guest-lounge", dimensions: "7.30m x 4.00m" },
            { key: "majlis-bathroom", dimensions: "2.00m x 1.95m" },
          ],
        },
        {
          title: "section-titles.family-wing-section",
          rooms: [
            { key: "living-room", dimensions: "8.20m x 5.30m" },
            { key: "balcony", dimensions: "5.20m x 1.10m" },
            { key: "maid-room", dimensions: "2.45m x 1.90m" },
            { key: "kitchen", dimensions: "4.00m x 4.00m" },
            { key: "bedroom-1", dimensions: "5.00m x 4.00m" },
            { key: "bedroom-2", dimensions: "5.30m x 4.00m" },
            { key: "bedroom-3", dimensions: "4.00m x 4.00m" },
            { key: "main-bathroom", dimensions: "2.90m x 2.40m" },
            { key: "storage-room", dimensions: "2.40m x 1.60m" },
          ],
        },
        {
          title: "section-titles.master-bedroom-suite",
          rooms: [
            { key: "master-bedroom", dimensions: "5.30m x 4.00m" },
            { key: "dressing-room", dimensions: "4.00m x 1.90m" },
            { key: "bathroom", dimensions: "2.20m x 1.90m" },
          ],
        },
      ],
    },
  ],
};
