import modelCImage from "@/../public/images/alhathaa-towers/alhathaa-towers-model-3d-c.webp";
import modelCNumberedImage from "@/../public/images/alhathaa-towers/alhathaa-towers-numbered-model-3d-c.webp";
import { ModelData } from "@/data/types";

export const modelC: ModelData<"Alhathaa-Towers"> = {
  name: "towers.tower-a.model-c.name",
  layout: {
    description: "towers.tower-a.model-c.layout.description",
    images: [
      {
        image: modelCImage,
        alt: "towers.tower-a.model-c.layout.images.image-1",
      },
    ],
  },
  details: [
    {
      images: [
        {
          image: modelCNumberedImage,
          alt: "towers.tower-a.model-c.layout.images.image-1",
        },
      ],
      sections: [
        {
          title: "section-titles.guest-section",
          rooms: [
            { key: "guest-reception-hall", dimensions: "4.20m x 4.00m" },
            { key: "majlis-guest-lounge", dimensions: "6.70m x 4.00m" },
            { key: "majlis-bathroom", dimensions: "2.20m x 1.80m" },
          ],
        },
        {
          title: "section-titles.family-wing-section",
          rooms: [
            { key: "living-room", dimensions: "8.20m x 4.00m" },
            { key: "balcony", dimensions: "4.00m x 1.20m" },
            { key: "maid-room", dimensions: "1.90m x 1.90m" },
            { key: "kitchen", dimensions: "4.00m x 4.00m" },
            { key: "bedroom-1", dimensions: "5.30m x 4.00m" },
            { key: "bedroom-2", dimensions: "4.00m x 4.00m" },
            { key: "main-bathroom", dimensions: "3.40m x 1.90m" },
          ],
        },
        {
          title: "section-titles.master-bedroom-suite",
          rooms: [
            { key: "master-bedroom", dimensions: "5.30m x 4.00m" },
            { key: "dressing-room", dimensions: "1.95m x 1.90m" },
            { key: "bathroom", dimensions: "2.65m x 1.90m" },
          ],
        },
      ],
    },
  ],
};
