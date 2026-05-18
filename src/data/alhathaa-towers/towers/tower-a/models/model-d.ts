import modelD1Image from "@/../public/images/alhathaa-towers/alhathaa-towers-model-3d-d1.webp";
import modelD2Image from "@/../public/images/alhathaa-towers/alhathaa-towers-model-3d-d2.webp";
import modelD1NumberedImage from "@/../public/images/alhathaa-towers/alhathaa-towers-numbered-model-3d-d1.webp";
import modelD2NumberedImage from "@/../public/images/alhathaa-towers/alhathaa-towers-numbered-model-3d-d2.webp";
import { ModelData } from "@/data/types";

export const modelD: ModelData<"Alhathaa-Towers"> = {
  name: "towers.tower-a.model-d.name",
  layout: {
    description: "towers.tower-a.model-d.layout.description",
    images: [
      {
        image: modelD1Image,
        alt: "towers.tower-a.model-d.layout.images.image-1",
      },
      {
        image: modelD2Image,
        alt: "towers.tower-a.model-d.layout.images.image-2",
      },
    ],
  },
  details: [
    {
      images: [
        {
          image: modelD1NumberedImage,
          alt: "towers.tower-a.model-d.layout.images.image-1",
        },
        {
          image: modelD2NumberedImage,
          alt: "towers.tower-a.model-d.layout.images.image-2",
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
    {
      images: [
        {
          image: modelD1NumberedImage,
          alt: "towers.tower-a.model-d.layout.images.image-1",
        },
        {
          image: modelD2NumberedImage,
          alt: "towers.tower-a.model-d.layout.images.image-2",
        },
      ],
      sections: [
        {
          title: "section-titles.family-wing-section",
          rooms: [
            { key: "family-entrance", dimensions: "4.00m x 1.90m" },
            { key: "living-room", dimensions: "8.20m x 4.60m" },
            { key: "bedroom-1", dimensions: "4.00m x 4.00m" },
            { key: "bedroom-2", dimensions: "4.00m x 4.00m" },
            { key: "main-bathroom", dimensions: "1.90m x 1.80m" },
          ],
        },
        {
          title: "section-titles.master-bedroom-suite",
          rooms: [
            { key: "master-bedroom", dimensions: "5.20m x 5.10m" },
            { key: "balcony", dimensions: "5.20m x 1.40m" },
            { key: "dressing-room", dimensions: "5.20m x 1.90m" },
            { key: "bathroom", dimensions: "3.10m x 1.90m" },
          ],
        },
      ],
    },
  ],
};
