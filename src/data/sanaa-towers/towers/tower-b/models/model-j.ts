import modelJImage from "@/../public/images/sanaa-towers/sanaa-towers-model-j.webp";
import { ModelData } from "@/data/types";

export const modelJ: ModelData<"SanaaTowers"> = {
  name: "towers.tower-b.model-j.name",
  layout: {
    description: "towers.tower-b.model-j.layout.description",
    images: [
      {
        image: modelJImage,
        alt: "towers.tower-b.model-j.layout.images.image-1",
      },
    ],
  },
  details: [
    {
      images: [
        {
          image: modelJImage,
          alt: "towers.tower-b.model-j.layout.images.image-1",
        },
      ],
      sections: [
        {
          title: "section-titles.guest-section",
          rooms: [
            { key: "guest-entrance", dimensions: "3.60m x 1.45m" },
            { key: "majlis-bathroom", dimensions: "2.00m x 1.50m" },
            { key: "majlis-guest-lounge", dimensions: "6.50m x 3.60m" },
          ],
        },
        {
          title: "section-titles.family-wing-section",
          rooms: [
            { key: "living-room", dimensions: "5.65m x 3.60m" },
            { key: "balcony", dimensions: "3.15m x 1.50m" },
            { key: "kitchen", dimensions: "4.05m x 4.00m" },
            { key: "bedroom-1", dimensions: "5.65m x 3.85m" },
            { key: "bedroom-2", dimensions: "5.65m x 3.95m" },
            { key: "main-bathroom", dimensions: "2.80m x 1.90m" },
          ],
        },
        {
          title: "section-titles.master-bedroom-suite",
          rooms: [
            { key: "master-bedroom", dimensions: "5.55m x 4.05m" },
            { key: "dressing-room", dimensions: "1.95m x 1.90m" },
            { key: "bathroom", dimensions: "2.30m x 1.95m" },
          ],
        },
      ],
    },
  ],
};
