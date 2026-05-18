import modelNImage from "@/../public/images/sanaa-towers/sanaa-towers-model-n.webp";
import { ModelData } from "@/data/types";

export const modelN: ModelData<"SanaaTowers"> = {
  name: "towers.tower-b.model-n.name",
  layout: {
    description: "towers.tower-b.model-n.layout.description",
    images: [
      {
        image: modelNImage,
        alt: "towers.tower-b.model-n.layout.images.image-1",
      },
    ],
  },
  details: [
    {
      images: [
        {
          image: modelNImage,
          alt: "towers.tower-b.model-n.layout.images.image-1",
        },
      ],
      sections: [
        {
          title: "section-titles.guest-section",
          rooms: [
            { key: "majlis-guest-lounge", dimensions: "7.30m x 3.55m" },
            { key: "majlis-bathroom", dimensions: "2.00m x 2.00m" },
          ],
        },
        {
          title: "section-titles.family-wing-section",
          rooms: [
            { key: "living-room", dimensions: "7.30m x 3.30m" },
            { key: "balcony", dimensions: "3.10m x 1.40m" },
            { key: "kitchen", dimensions: "4.40m x 3.90m" },
            { key: "storage-room", dimensions: "2.00m x 1.55m" },
            { key: "bedroom-1", dimensions: "4.80m x 3.00m" },
            { key: "bedroom-2", dimensions: "4.80m x 3.30m" },
            { key: "main-bathroom", dimensions: "3.00m x 2.00m" },
          ],
        },
        {
          title: "section-titles.master-bedroom-suite",
          rooms: [
            { key: "master-bedroom", dimensions: "4.80m x 4.55m" },
            { key: "dressing-room", dimensions: "2.15m x 2.00m" },
            { key: "bathroom", dimensions: "2.95m x 1.40m" },
          ],
        },
      ],
    },
  ],
};
